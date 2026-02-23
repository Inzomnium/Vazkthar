import PanelContainer from "../components/PanelLabyrinth/PanelContainer";
import { Helmet } from "react-helmet-async";
import FloatingMenu from "../components/FloatingMenu";
import "../styles/panels.css"
import Panel from "../components/PanelLabyrinth/Panel";

import MACHINE2 from "../content/Machine_2";
import MACHINE2_1 from "../content/Machine_2_1";
import MACHINE2_1_1 from "../content/Machine_2_1_1";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Vault — Vakzthar",
    "description":
      "The Vault is a living archive of collectible digital artifacts. Items appear, disappear, and return shifted through Blinks and Movements.",
    "url": "https://vakzthar.com/vault",
    "inLanguage": "en",
    "about": [
      {
        "@type": "Thing",
        "name": "The Vault"
      },
      {
        "@type": "Thing",
        "name": "Blinks"
      },
      {
        "@type": "Thing",
        "name": "Digital artifacts"
      }
    ],
    "isPartOf": {
      "@type": "WebSite",
      "name": "Vakzthar",
      "url": "https://vakzthar.com"
    },
    "creator": {
      "@type": "Person",
      "name": "Sebastián Leonardo Cofré Barrientos",
      "alternateName": "Vakzthar[11]",
      "url": "https://vakzthar.com/about"
    },
    "keywords": [
      "The Vault",
      "Vakzthar",
      "digital artifacts",
      "collectibles",
      "Blinks",
      "limited downloads",
      "shifted versions"
    ]
  };


export default function vault() {
  return (
     <>

    <Helmet>
      <title>The Vault — Vakzthar</title>

      <meta
        name="description"
        content="A living archive of collectible digital artifacts. Items appear, disappear, and return shifted through Blinks and Movements."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://vakzthar.com/vault" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The Vault — Vakzthar" />
      <meta
        property="og:description"
        content="A living archive of collectible digital artifacts. Blinks, rare returns, shifted versions."
      />
      <meta property="og:url" content="https://vakzthar.com/vault" />
      <meta property="og:image" content="https://vakzthar.com/vkz.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="The Vault — Vakzthar" />
      <meta
        name="twitter:description"
        content="A living archive of collectible digital artifacts. Blinks, rare returns, shifted versions."
      />
      <meta name="twitter:image" content="https://vakzthar.com/og-vault.jpg" />

      {/* Schema.org JSON-LD (safe, minimal) */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>


      <FloatingMenu />
    
   
    <PanelContainer
  seedKey="vault"
  config={{
    minHorizontal: 2,
    maxHorizontal: 6,
    maxConsecutiveHorizontal: 1,
    avoidAlternation: true,
    snapMs: 260,
    wheelThreshold: 140,
    swipeMin: 40,
    turnGlitch: true,
    debug: false
  }}
>
      <Panel id="machine-2"><MACHINE2 /></Panel>
      <Panel id="machine-2-1"><MACHINE2_1 /></Panel>
     
      <Panel id="machine-2-1-1"><MACHINE2_1_1 /></Panel>
      
    </PanelContainer>

     </>
  );
}
