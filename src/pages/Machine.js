import PanelContainer from "../components/PanelLabyrinth/PanelContainer";
import { Helmet } from "react-helmet-async";
import FloatingMenu from "../components/FloatingMenu";
import "../styles/panels.css"
import Panel from "../components/PanelLabyrinth/Panel";
import MACHINE1 from "../content/Machine_1";

import MACHINE1_1 from "../content/Machine_1_1";
import MACHINE1_2 from "../content/Machine_1_2";
import MACHINE1_2_1 from "../content/Machine_1_2_1";
import MACHINE1_2_2 from "../content/Machine_1_2_2";
import MACHINE1_2_3 from "../content/Machine_1_2_3";
import MACHINE1_2_4 from "../content/Machine_1_2_4";
import MACHINE1_2_5 from "../content/Machine_1_2_5";
import MACHINE1_2_6 from "../content/Machine_1_2_6";
import MACHINE1_2_7 from "../content/Machine_1_2_7";
import MACHINE1_2_8 from "../content/Machine_1_2_8";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "The Machine — Vakzthar",
    "headline": "The Machine — First Operator Cycle",
    "description": "A symbolic narrative corridor exploring the concept of The Machine, structured as a navigable labyrinth of panels.",
    "author": {
      "@type": "Person",
      "name": "Sebastián Leonardo Cofré Barrientos",
      "alternateName": "Vakzthar[11]",
      "url": "https://vakzthar.com/about"
    },
    "creator": {
      "@type": "Person",
      "name": "Sebastián Leonardo Cofré Barrientos",
      "alternateName": "Vakzthar[11]"
    },
    "url": "https://vakzthar.com/machine",
    "inLanguage": "en",
    "genre": "Mythopoetic Narrative",
    "keywords": [
      "The Machine",
      "Vakzthar",
      "Symbolic narrative",
      "Digital labyrinth",
      "First Operator Cycle"
    ]
  };


export default function Machine() {


 
  return (
     <>
     <Helmet>


  <title>The Machine | Vakzthar</title>

  <meta
    name="description"
    content="The Machine is a nonlinear visual narrative built as a navigable labyrinth. A sequence of structured panels exploring perception, recursion, and calibrated consciousness."
  />

  <link rel="canonical" href="https://vakzthar.com/machine" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="The Machine | Vakzthar" />
  <meta
    property="og:description"
    content="Enter the corridor. A structured visual narrative composed of calibrated panels."
  />
  <meta property="og:url" content="https://vakzthar.com/machine" />
  <meta property="og:image" content="https://vakzthar.com/vkz.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="The Machine | Vakzthar" />
  <meta
    name="twitter:description"
    content="A nonlinear labyrinth of panels exploring The Machine."
  />
  <meta name="twitter:image" content="https://vakzthar.com/og-machine.jpg" />
    <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
  
</Helmet>
      <FloatingMenu />
    
   
    <PanelContainer
  seedKey="machine"
  config={{
    minHorizontal: 2,
    maxHorizontal: 2,
    maxConsecutiveHorizontal: 1,
    avoidAlternation: true,
    snapMs: 260,
    wheelThreshold: 140,
    swipeMin: 40,
    turnGlitch: true,
    debug: false
  }}
>
      <Panel id="machine-1"><MACHINE1 /></Panel>
      <Panel id="machine-1-1"><MACHINE1_1 /></Panel>
      <Panel id="machine-1-2"><MACHINE1_2 /></Panel>
      <Panel id="machine-1-2-1"><MACHINE1_2_1 /></Panel>
      <Panel id="machine-1-2-2"><MACHINE1_2_2 /></Panel>
      <Panel id="machine-1-2-3"><MACHINE1_2_3 /></Panel>
      <Panel id="machine-1-2-4"><MACHINE1_2_4 /></Panel>
      <Panel id="machine-1-2-5"><MACHINE1_2_5 /></Panel>
      <Panel id="machine-1-2-6"><MACHINE1_2_6 /></Panel>
      <Panel id="machine-1-2-7"><MACHINE1_2_7 /></Panel>
      <Panel id="machine-1-2-8"><MACHINE1_2_8 /></Panel>
    </PanelContainer>

     </>
  );
}
