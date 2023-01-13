# GitHub contributors NFT rewards

This project demonstrates how you can build a full-stack web3 application that allows github contributors of certain repositories to mint an ERC 1155 NFT using signature minting.

## Tools:

- [React SDK](https://docs.web3sdks.com/react): To access the connected wallet, switch the user's network, and claim an NFT from our Edition Drop collection.
- [Auth](https://docs.web3sdks.com/auth): To authenticate the user and verify them on the backend.

## Using This Template

Create a project using this example:

```bash
npx web3sdks create --template github-contributor-nft-rewards
```

- Create an edition contract on [web3sdks dashboard](https://web3sdks.com/dashboard) and lazy mint an NFT. Now, update the contract address in `pages/index.tsx` and `pages/api/claim-nft.ts` files.
- Add your private key to the `.env.local` file.
- Create a new OAuth app on GitHub and add the client ID and secret to the `.env.local` file.
- Generate a new access token on Github and add it to the `.env.local` file.
- You need the following variables in your `.env.local` file:

```
PRIVATE_KEY=
GITHUB_ID=
GITHUB_SECRET=
GITHUB_ACCESS_TOKEN=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
```

## How It Works

Using [Auth](https://docs.web3sdks.com/auth), we first authenticate the user using their web3 wallets which we later use on the backend to generate a signature. We also use next auth to authenticate users with their GitHub account, so that we can check if they have contributed to the repository.

In the api we get the web3sdks user and the next auth user. We first check if both the users are present then we validate if the user has contributed to the repository. If the user has contributed, we generate a signature using the user's private key and send it back to the frontend. The frontend then uses the signature to mint the NFT.

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/KX2tsh9A](https://discord.gg/KX2tsh9A).
