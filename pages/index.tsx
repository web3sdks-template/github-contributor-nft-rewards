import { useContract, Web3Button } from "@web3sdks/react";
import type { GetServerSideProps, NextPage } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { getUser } from "../auth.config";
import styles from "../styles/Home.module.css";
import { authOptions } from "./api/auth/[...nextauth]";

const EDITION_CONTRACT_ADDRESS = "0x16ab32FAd64E9369e9158B45a0207640dec12056";

const Home: NextPage = () => {
  const { contract: edition } = useContract(
    EDITION_CONTRACT_ADDRESS,
    "edition"
  );

  const mintNft = async () => {
    try {
      const req = await fetch("/api/claim-nft", {
        method: "POST",
      });

      const res = await req.json();

      if (!req.ok) {
        alert(`Error: ${res.message}`);
        return;
      }

      await edition?.signature.mint(res.signedPayload);

      alert("Successfully minted NFT 🚀");
    } catch (err) {
      console.error(err);
      alert("Failed to mint NFT");
    }
  };

  return (
    <div className={styles.container}>
      <h1>GitHub Contributor NFTs</h1>
      <p>
        Claim an NFT if you have contributed to any of web3sdks&apos;s repos.
      </p>

      <Web3Button
        contractAddress={EDITION_CONTRACT_ADDRESS}
        action={() => mintNft()}
      >
        Claim NFT
      </Web3Button>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const web3sdksUser = await getUser(context.req);

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!web3sdksUser || !session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
