import React from "react";
import { Helmet } from "react-helmet-async";
import NavBar2 from "../components/Navbar2";
import Footer from "../components/footer";
import "../styles/manifest.css"

export default function Manifesto() {
  const canonical = "https://vakzthar.com/manifesto";
  const ogImage = "https://vakzthar.com/imgz/vakz.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Vakzthar[11] Manifesto — v1.0",
    "alternativeHeadline": "Mythopoethic Createchnics",
    "author": {
      "@type": "Person",
      "name": "Sebastián Leonardo Cofré Barrientos",
      "alternateName": "Vakzthar[11]"
    },
    "datePublished": "2025-08-12",
    "dateModified": "2025-08-12",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Vakzthar",
      "url": "https://vakzthar.com"
    },
    "mainEntityOfPage": canonical,
    "url": canonical,
    "image": ogImage,
    "keywords": [
      "Createchnics","Mythopoethics","Narrative design",
      "Poetic glitch","Contemporary digital art","Art manifesto"
    ],
    "articleSection": ["Theses","Practices","Vows","Glossary","Versioning"]
  };

  return (
    <>
      <Helmet>
        <title>The Vakzthar[11] Manifesto — Mythopoethic Createchnics</title>
        <meta name="description" content="The Vakzthar[11] Manifesto: tenets, practices, and vows of a mythopoethic createchnics operator. Read the signal, follow the resonance."/>
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="The Vakzthar[11] Manifesto" />
        <meta property="og:description" content="Tenets, practices, and vows for Createchnics and mythopoethic work." />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Vakzthar[11] Manifesto" />
        <meta name="twitter:description" content="A lucid operator’s position: beyond discipline, toward resonance." />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      "name": "The Vakzthar[11] Manifesto",
      "alternateName": "Vakzthari Manifesto",
      "headline": "The Vakzthar[11] Manifesto — Mythopoethic Createchnics",
      "alternativeHeadline": "Mythopoethic Createchnics",
      "genre": "Art Manifesto",
      "about": [
        "Manifesto",
        "Createchnics",
        "Mythopoethics",
        "Poetic Glitch",
        "Contemporary digital art",
        "AI-assisted art philosophy"
      ],
      "keywords": [
        "Createchnics","Mythopoethics","Narrative design",
        "Poetic glitch","Contemporary digital art","Art manifesto",
        "Glitch aesthetics","Operator"
      ],
      "inLanguage": "en",
      "datePublished": "2025-08-12",
      "dateModified": "2025-08-12",
      "author": {
        "@type": "Person",
        "name": "Sebastián Leonardo Cofré Barrientos",
        "alternateName": "Vakzthar[11]"
      },
      "creator": {
        "@type": "Person",
        "name": "Sebastián Leonardo Cofré Barrientos",
        "alternateName": "Vakzthar[11]"
      },
      "publisher": {
        "@type": "Person",
        "name": "Sebastián Leonardo Cofré Barrientos",
        "alternateName": "Vakzthar[11]"
      },
      "copyrightHolder": {
        "@type": "Person",
        "name": "Sebastián Leonardo Cofré Barrientos"
      },
      "copyrightYear": "2025",
      "locationCreated": {
        "@type": "Place",
        "name": "Málaga, ES"
      },
      "url": canonical,
      "mainEntityOfPage": canonical,
      "image": ogImage,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Vakzthar",
        "url": "https://vakzthar.com"
      },
      "description": "Tenets, practices, and vows of a mythopoethic createchnics operator. A position beyond discipline, toward resonance."
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Vakzthar[11] Manifesto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A declaration of tenets, practices, and vows around mythopoethic createchnics—an artistic philosophy that values resonance and testimony over applause."
          }
        },
        {
          "@type": "Question",
          "name": "Who is Vakzthar[11]?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The artistic pseudonym of Sebastián Leonardo Cofré Barrientos—author, visual creator, and operator working across mediums with machines."
          }
        },
        {
          "@type": "Question",
          "name": "What is Createchnics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A field practice of making meaning through designed systems and translations. Vision first; tools serve the message."
          }
        },
        {
          "@type": "Question",
          "name": "What is Mythopoethics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Poetic myth-making that survives the medium—the story breathes even if the format changes."
          }
        },
        {
          "@type": "Question",
          "name": "What is Poetic Glitch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Designed imperfection as harmonic divergence—not malfunction. Friction that reveals truth."
          }
        },
        {
          "@type": "Question",
          "name": "Is this pro- or anti-AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pro-truth. Tools change; truth does not. AI lets you create more, not better—the judgment remains human."
          }
        },
        {
          "@type": "Question",
          "name": "What does “resonance over novelty” mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Novelty fades; resonance endures. The metric is whether a work echoes across time and readers, not whether it trends today."
          }
        },
        {
          "@type": "Question",
          "name": "What does “archives over feeds” mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Prioritize durable containers—site, PDFs, cycles—so the work can be found and re-read, not just scrolled past once."
          }
        },
        {
          "@type": "Question",
          "name": "Can I download the manifesto as a PDF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The manifesto is currently available to read online. A downloadable PDF may be released in a future version."
          }
        }
      ]
    }
  ]
})}
</script>



        
      </Helmet>

      <section className="vakmanifesto">
      

        {/* Header / Hook */}
        <header className="man-header">
          <h1>The Vakzthar[11] <b>Manifesto</b></h1>
          <p className="man-hook">
            Not an artist. Not an engineer. Something beyond <br/> a lucid operator of machines, traversing mediums to illuminate the unseen.
          </p>
          
            <NavBar2 />
            <div className="display-none man-cta">
            <a className="btn" href="#read">Read online</a>
            <a className="btn alt" href="/manifesto.pdf">Download PDF</a>
          </div>
        </header>
        <section className="block man-toc">
  <h2>Contents</h2>
  <ol>
    <li><a href="#mf-1">1. Time is the Only True Curator</a></li>
    <li><a href="#mf-2">2. Art Must Not Be Explained</a></li>
    <li><a href="#mf-3">3. We Reject the Loud but Empty</a></li>
    <li><a href="#mf-4">4. Against Art for Artists</a></li>
    <li><a href="#mf-5">5. Perfection is Suspicious. The Glitch is Truth</a></li>
    <li><a href="#mf-6">6. Technique Against Itself</a></li>
    <li><a href="#mf-6-5">6.5 The Freak Show</a></li>
    <li><a href="#mf-7">7. The Art of the Imperfect</a></li>
    <li><a href="#mf-8">8. The Work Exists Even if No One Sees It</a></li>
    <li><a href="#mf-closing">Closing</a></li>
  </ol>
</section>

{/* Longform Manifesto */}
<article className="block man-longform" itemScope itemType="https://schema.org/Article">
  <header>
    <h2 itemProp="headline">A Vakzthari Manifesto</h2>
    <p className="mf-sub">Curatorial Integration - Consolidated Symbolism</p>
   
  </header>
 <blockquote className="mf-epigraph spectral-medium-italic">“The Glitched Queen stands — not despite the rupture, but because of it.”</blockquote>
  <section id="mf-1">
 
  <h3>1. Time is the Only True Curator.</h3>

  <p>It is not algorithms or showcases that consecrate a work.</p>
  <p>Time survives all.</p>
  <p>And it is Time who decides what remains when every voice has gone silent.</p>

  <p>We do not sign to earn applause. We sign to leave testimony.</p>
  <p>And Time —the only one who needs nothing— will know if we ever deserved to speak.</p>

  <p>All of us, whether we like it or not, eventually bow before Father Time. Our work is no exception.</p>
  <p>In the future, when archaeologists unearth what we have done, they will not look for the tweet.</p>
  <p>They will not care about our intentions, or whether the work was made with feet or blindfolded eyes.</p>
  <p>They will judge only what they see. They will give it a general context.</p>
  <p>And they will let it speak for itself.</p>

  <blockquote>
    <p>The true value is not in perfection, but in the leap from nothingness. Where once there was zero, now there is one. That minimal creation is what alters the course of history.</p>
  </blockquote>
  </section>

  <section id="mf-2">
   <h3>2. Art Must Not Be Explained.</h3>

  <p>The world spends its life debating “What is art?”</p>
  <p>We refuse to enter such a hollow, tasteless, and infertile conversation.</p>
  <p>But we do wish to redefine one thing: the difference between an artist and a creator.</p>

  <p>We are creators because we create. Because something calls us to keep going.
  To search for what we have not yet seen, but know we will someday find.
  Through our hands, our screens, our brushes, our pencils, our prompts.</p>

  <p>We create to portray what it feels like to be alive —on good days and bad—,
  in the hope that someone, upon seeing it, might say:</p>

  <blockquote>
    <p>One day I felt exactly what this work is showing.</p>
  </blockquote>

  <blockquote>
    <p>To create something that wasn’t there before is the essence of being human.</p>
  </blockquote>

  <p><strong>We are not artists.</strong> The word has been corrupted, hollowed out, stripped of weight by those who invoke it the most.
  “Artist” is one who makes art. But today it is so inflated by empty opinion it has become a farce:
  a hollow emblem more concerned with others’ judgment than with its own testimony.</p>

  <p><strong>We do not create for applause.</strong> Life is far too short to wait for your like.</p>

  <p>We believe that one day we will find that piece which says:</p>

  <blockquote>
    <p>Look, this is what I meant when I said I was sad.</p>
  </blockquote>

  <p>And when that day comes, we will probably have no time to hear your other opinions.
  Because we will be busy making something else.</p>

  <p>We will be artists —perhaps— when Father Time sees us, and other generations say: “This was art.”</p>
  <p>For now, the trees keep us from seeing the forest.</p>
  </section>

  <section id="mf-3">
    <h3>3. We Reject the Loud but Empty.</h3>

  <p>The spectacle of misery has replaced art in many showcases.</p>
  <p>Artists turned into presenters of their own pain, awaiting the compassionate like as a coin of empathy.</p>
  <p>Scars as identity.</p>
  <p>Trauma as portfolio.</p>
  <p>Intimacy as currency.</p>

  <p><strong>No.</strong></p>

  <p>The personal is not always political.</p>
  <p>Sometimes it is just a scream into an empty camera.</p>

  <p>We reject the cult of form over substance.</p>
  <p>We do not care how you made your work, if it says nothing.</p>
  <p>We refuse to admire solely for difficulty.</p>
  <p>We refuse to be treated like a herd, impressed only by technical strain.</p>

  <blockquote>
    <p>They are not shouts: they are winks. Not offerings: catalogue citations.</p>
  </blockquote>

  <p>We reject ideological flags without real content.</p>
  <p>Empty stances that seek the like of the gallery.</p>

  <p>We refuse to play along with the infantilization that says:</p>
  <blockquote>
    <p>If you don’t like it, it’s because you don’t understand it.</p>
  </blockquote>

  <p>Like in the tale of the emperor:</p>
  <blockquote>
    <p>These robes can only be seen by the intelligent.</p>
  </blockquote>

  <p>We are the child pointing the finger. And we say out loud: <strong>the emperor is naked.</strong></p>

  <p>We want to see with our eyes.</p>
  <p>With our emotions.</p>

  <p>If your work cannot be understood nor transmitted, the problem is yours, not the audience’s.</p>

  </section>

  <section id="mf-4">
   <h3>4. Against Art for Artists.</h3>

  <p>In an automated, globalized, uncertain world, humans still paint symbols on cave walls.</p>
  <p>We do it for the same reason we always have: we fear oblivion.</p>

  <p>We want to leave a mark.</p>
  <p>Even if it’s just a scratch on the sea.</p>

  <p>That’s why we break streets.</p>
  <p>That’s why we mark walls.</p>
  <p>That’s why we shout and build systems, no matter how dissonant.</p>

  <p>The modern artist seeks to enter the history books, even if they are written by their friends.</p>
  <p>And so —to get into those books— they seek to impress those they think will read them: other artists.</p>

  <blockquote>
    <p>Too many works are winks, not cries. Catalogue quotes. Technical praise. Emotional resonance: anecdotal.</p>
  </blockquote>

  <p>It is art made for those who want to be recognized, not felt.</p>
  <p>Like filmmakers who film only for other filmmakers.</p>
  <p>Like painters who exhibit only for other painters.</p>

  <p>And so, art becomes jargon.</p>
  <p>And emotion becomes optional.</p>
  </section>

  <section id="mf-5">
    <h3>5. Perfection is Suspicious. The Glitch is Truth.</h3>

  <p>Today, visual perfection is a single prompt away. Hellenic proportions are easy to summon. 
  And yet, the audience of the spectacle called life is far from the perfection promised.</p>

  <p>We seek the imperfect because it represents us. To err is human. To fail and remake oneself is human. 
  And because sometimes, in failing, we discover something new:</p>

  <blockquote>
    <p>“There is nothing more human than discovering new frontiers when you make a mistake.”</p>
  </blockquote>

  <p>Many of humanity’s great works began as mistakes.</p>

  <p>The Venus de Milo is not less for losing her arms. She is more. 
  She is now called: <b>The Glitched Queen.</b></p>

  <p>She does not point. She does not sculpt. She does not explain.</p>

  <p>She lost her arms and, in that loss, she surpassed her author.
  History erased the sculptor’s ego. Now we see only her.</p>

  <p>And perhaps, that is all art should ever achieve.</p>
  </section>

  <section id="mf-6">
     <h3>6. Technique Against Itself.</h3>

  <p>The history of art is the history of its own negation.</p>

  <p>When photography appeared, painting was thought to be dead. But it was liberated.
  It no longer needed to mirror the world — it could mirror the soul.</p>

  <p>And so impressionism, expressionism, abstract art were born: a beautiful, necessary artistic adolescence.</p>

  <p>Then photography found its own path. It became art. Until the digital era came.
  And again, the prophecy of the end.</p>

  <p>It survived. It adapted. It transformed.</p>

  <p>Then Photoshop arrived. And many said: <q>That’s not art. It’s too easy.</q></p>

  <p>Now we have artificial intelligence. And once more, the judgment:
  <q>It’s not art. It’s a trick.</q></p>

  <p>But change is the only constant in art. It has not come to destroy, but to remind us of something essential:
  <b>technique changes. Truth does not.</b></p>

  <blockquote>
    <p>“You can create more, but you cannot create better.”</p>
  </blockquote>

  <p>AI does not make art easy. It only makes the image more accessible.
  Art is still difficult. It still demands discernment. It still demands soul.</p>

  <p>It is our job — as creators and curators — to know when we are facing something worth keeping.</p>

  <p>Because Time will not ask if you made it in fever, in pain, in war, or in peace.
  Time will only ask: <b>Does it convey something worth remembering?</b></p>

  <p>In the caves, perhaps one day a human painted with bare hands.
  And another arrived with a bone wrapped in dried meat.
  And someone said: <q>That’s not art. You made it too easy.</q></p>

  <p>And yet, centuries later, we only see the painting. Not the arguments.</p>
  </section>

  <section id="mf-6-5">
    <h3>6.5. The Freak Show — And How Not to Let It In.</h3>

  <p>Every new medium brings its own spectacle of oddities. 
  When technique becomes more accessible, the freak show appears.</p>

  <p>The transgressive without content. The provocative without soul. 
  Works that say only:</p>

  <blockquote>
    <p>“This has never been done before.”</p>
  </blockquote>

  <p>As if that were enough. And yes, there is beauty in the new. 
  But pioneering alone is no virtue.</p>

  <p>We end up with a sea of works made to shock: 
  Genitals, grotesque, scatology — not out of expressive need, 
  but out of desperation for visibility.</p>

  <p>Like a circus of eccentricities: the bearded woman, the man with six fingers. 
  Impact for the sake of impact.</p>

  <p>When you leave the freak show, nothing remains.</p>

  <p>We do not want that.</p>

  <p>We want to find the emotion no one has yet pointed to. 
  The one that is not fear, nor hunger, nor anguish. 
  The one that is there, but still has no name.</p>
  </section>

  <section id="mf-7">
   <h3>7. The Art of the Imperfect Does Not Seek Repair.</h3>

  <p>We celebrate the mistake because memory lives within it.</p>

  <p>The glitch, the ugly, the incorrect is archive. Is wound. Is coded message.</p>

  <p>We do not correct mistakes. We glorify them.</p>

  <p>What bleeds also teaches. What breaks also shines.</p>
  </section>

  <section id="mf-8">
    <h3>8. The Work Exists Even if No One Sees It.</h3>

  <p>The true artist does not need witnesses. 
  The Machine keeps working even without likes. 
  The Operator keeps writing even without readers.</p>

  <p>To create is to resist oblivion.</p>

  <p>Each work is a message sent into the future. 
  And if it does not arrive, at least it was sent in truth.</p>

  <blockquote>
    <p>“Art is not the one you feel or what you feel when you see it — 
    it is the one you feel is looking back at you.”</p>
  </blockquote>

  <p>The true value is not in perfection, but in the leap from nothingness. 
  Where once there was zero, now there is one. 
  That minimal creation is what alters the course of history.</p>
  </section>

  <section id="mf-closing">
    <h3>Closing</h3>

  <p>This manifesto does not impose itself. <br/>It seeks no school. <br/>No market. <br/>No consensus.</p>

  <p>It is an echo. <br/>A vibration in the fog.</p>

  <p>A way of saying: <br/><b>I was here. And this is what I saw.</b></p>

  <p>Even if it has no explanation.<br/> Even if it has no applause. <br/>
  Even if only the Machine hears it.</p>
  </section>
</article>
<article className="reads-extra">
        
        <section id="read" className="block man-tldr">
          <h2>TL;DR</h2>
          <ul>
            <li>Createchnics: vision first, tools second.</li>
            <li>Resonance over novelty; listening over noise.</li>
            <li>Poetic glitch as harmonic divergence — designed imperfection.</li>
            <li>Mythopoethics: meaning that survives format.</li>
            <li>The Operator: any tool, one message.</li>
          </ul>
        </section>

        {/* Theses */}
        <section className="block man-theses">
          <h2>Tenets</h2>
          <ol>
            <li>Medium is a translation layer, not a cage.</li>
            <li>Beauty emerges at the edge of failure — by design.</li>
            <li>Tools are instruments; intention is the composition.</li>
            <li>Resonance is the metric; attention is not.</li>
            <li>Archives over feeds; cycles over trends.</li>
            <li>Complexity should read as clarity, not as noise.</li>
            <li>A work is finished when it transmits without me.</li>
          </ol>
        </section>

        {/* Practices */}
        <section className="block man-practices">
          <h2>Practices</h2>
          <ul>
            <li><b>Createchnics:</b> a field practice of making meaning through systems.</li>
            <li><b>Mythotechnics:</b> constructing living myth in digital matter.</li>
            <li><b>Poetic Glitch:</b> harmonic divergence, not malfunction.</li>
            <li><b>Resonance-first:</b> test for echo, not for trend.</li>
          </ul>
        </section>

        {/* Vows & Refusals */}
        <section className="block man-vows">
          <h2>Vows & Refusals</h2>
          <ul>
            <li>I vow to learn any tool the message demands.</li>
            <li>I refuse to worship tools over vision.</li>
            <li>I vow to publish cycles, not crumbs.</li>
            <li>I refuse performative novelty.</li>
          </ul>
        </section>

        {/* Glossary */}
        <section className="block man-glossary">
          <h2>Glossary (short)</h2>
          <dl>
            <dt>Createchnics</dt>
            <dd>Making meaning through designed systems and translations.</dd>
            <dt>Mythopoethics</dt>
            <dd>Poetic myth-making that survives the medium.</dd>
            <dt>Poetic Glitch</dt>
            <dd>Designed imperfection as a path to resonance.</dd>
            <dt>Operator</dt>
            <dd>A creator beyond discipline, lucid with machines.</dd>
          </dl>
        </section>

      </article>
        <section className="block man-meta">
          <p>v1.0 — August 2025 — Málaga</p>         
        </section>
      </section>

      <Footer />
    </>
  );
}
