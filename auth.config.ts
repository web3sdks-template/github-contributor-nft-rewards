import { Web3sdksAuth } from "@web3sdks/auth/next";

export const { Web3sdksAuthHandler, getUser } = Web3sdksAuth({
  // It is not best practice to store your private key in an environment variable.
  // Learn how to store your private key securely: https://docs.web3sdks.com/sdk/set-up-the-sdk/securing-your-private-key
  privateKey: process.env.PRIVATE_KEY as string,
  domain: "example.com",
});
