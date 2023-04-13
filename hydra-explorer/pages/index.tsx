import Head from "next/head";
import { BlockfrostProvider } from "@meshsdk/core";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";

export default function Home() {

  const getHydraHeads = async () => {
    const blockfrostProvider = new BlockfrostProvider('preview4sobQ9X5iZk8rlppH7YNGbZmnGqoBhp1');
    let heads = await blockfrostProvider.fetchAccountInfo(
       'stake_test1uzx0ksy9f4qnj2mzfdncqyjy84sszh64w43853nug5pedjgytgke9',
     )
    console.log("heads", heads);
  };


  return (
    <div className="container">
      <Head>
        <title>Hydra Explorer</title>
        <meta name="description" content="Hydra Explorer dApp" />
        <link
          rel="icon"
          href="https://meshjs.dev/favicon/favicon-32x32.png"
        />
        <link
          href="https://meshjs.dev/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">

        <h1 className="title">
          <a href="/">Hydra</a> Explorer
        </h1>

        <div className="grid">
          <a href="/" className="card">
            <h2>Hydra explorer</h2>
            <p>Provides useful information on Hydra heads, their status, TVL etc.</p>
          </a>
         <button onClick={() => getHydraHeads()}> Submit </button>
        </div>
      </main>

      <footer className="footer">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
