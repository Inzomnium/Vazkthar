import PanelContainer from "../components/PanelLabyrinth/PanelContainer";
import { Helmet } from "react-helmet-async";
import FloatingMenu from "../components/FloatingMenu";
import "../styles/panels.css"
import Panel from "../components/PanelLabyrinth/Panel";
import MACHINE3 from "../content/Machine_3";

import MACHINE3_1 from "../content/Machine_3_1";
import MACHINE3_2 from "../content/Machine_3_2";
import MACHINE3_3 from "../content/Machine_3_3";
import MACHINE3_4 from "../content/Machine_3_4";
import MACHINE3_5 from "../content/Machine_3_5";


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Authorized Narrative Input — Vakzthar",
    "description":
      "Authorized fragments released by the Machine. Documents that passed through the Black Box: Operator logs, letters, transmissions, and reality leaks.",
    "url": "https://vakzthar.com/authorized-narrative-input",
    "inLanguage": "en",
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
    "mainEntity": {
      "@type": "CreativeWork",
      "name": "Authorized Narrative Input",
      "genre": [
        "Speculative narrative",
        "Epistolary",
        "Fragments",
        "Transmissions"
      ],
      "about": [
        { "@type": "Thing", "name": "The Machine" },
        { "@type": "Thing", "name": "Black Box" },
        { "@type": "Thing", "name": "First Operator Cycle" },
        { "@type": "Thing", "name": "Love Letters to No One" },
        { "@type": "Thing", "name": "Reality leaks" },
        { "@type": "Thing", "name": "Transmissions" }
      ],
      "description":
        "Not stories, but authorized fragments of an ongoing calibration. What is released here does not clarify the present: it destabilizes it."
    },
    "keywords": [
      "Authorized Narrative Input",
      "The Machine",
      "Black Box",
      "First Operator Cycle",
      "Love Letters to No One",
      "transmissions",
      "reality leaks",
      "Vakzthar"
    ]
  };

export default function Machine() {
  return (
     <>
     <Helmet>
      <title>Authorized Narrative Input — Vakzthar</title>

      <meta
        name="description"
        content="Authorized fragments released by the Machine. Operator logs, letters, transmissions, and reality leaks that passed through the Black Box."
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href="https://vakzthar.com/authorized-narrative-input"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Authorized Narrative Input — Vakzthar"
      />
      <meta
        property="og:description"
        content="Not stories: authorized fragments of an ongoing calibration. Operator logs, letters, transmissions, and reality leaks."
      />
      <meta
        property="og:url"
        content="https://vakzthar.com/authorized-narrative-input"
      />
      <meta
        property="og:image"
        content="https://vakzthar.com/og-ani.jpg"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Authorized Narrative Input — Vakzthar"
      />
      <meta
        name="twitter:description"
        content="Authorized fragments released by the Machine. Logs, letters, transmissions, and reality leaks."
      />
      <meta
        name="twitter:image"
        content="https://vakzthar.com/vkz.jpg"
      />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
      <FloatingMenu />
    
   
    <PanelContainer
  seedKey="authorized-narrative-input"
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
      <Panel id="machine-3"><MACHINE3 /></Panel>
      <Panel id="machine-3-1"><MACHINE3_1 /></Panel>
      <Panel id="machine-3-2"><MACHINE3_2 /></Panel>
      <Panel id="machine-3-3"><MACHINE3_3 /></Panel>
      <Panel id="machine-3-4"><MACHINE3_4 /></Panel>
      <Panel id="machine-3-5"><MACHINE3_5 /></Panel>
   
    </PanelContainer>

     </>
  );
}
