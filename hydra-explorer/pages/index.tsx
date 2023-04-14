import Head from "next/head";
import { useState } from 'react';
import { CardanoWallet, MeshBadge } from "@meshsdk/react";

export default function Home() {
  const [heads, setHeads] = useState([]);
  const getHydraHeads = async () => {
    const blockfrostUrl = "https://cardano-preview.blockfrost.io/api/v0/"
    const hydraSTPolicyId = "dd8a40ebfbe2eb9351ce4854c791d80d9682e01b20cd4b986868d176"
    const hydraSTHex = "4879647261486561645631"
    const assetUrl = "assets/" + hydraSTPolicyId + hydraSTHex
    const assetTransactionsUrl = "assets/" + hydraSTPolicyId + hydraSTHex + "/transactions";
    const assetPolicyUrl = "assets/policy/" + hydraSTPolicyId
    const blockfrostHeader = { "project_id": "preview4sobQ9X5iZk8rlppH7YNGbZmnGqoBhp1" }
    const response = await fetch( blockfrostUrl + assetPolicyUrl , {method: "GET", headers:blockfrostHeader});
    const headsResult = await response.json();
    console.log("heads", heads);
    setHeads(headsResult);
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
         <button onClick={() => getHydraHeads()}> Find Hydra Heads </button>
         <div>
           {heads.map(head => (
             <li key={head.asset}>
               {head.asset}
             </li>
           ))}
         </div>
        </div>
      </main>

      <footer className="footer">
        <MeshBadge dark={true} />
      </footer>
    </div>
  );
}
