import React from "react";
import NavBar2 from "../components/Navbar2";
import { Helmet } from 'react-helmet';
import "../styles/about.css"; // Asegúrate de tener el CSS en este archivo o ajusta el import según tu estructura
import Footer from "../components/footer";

import vkz1 from "../assets/Images/thumbs/vkz1.webp"
import vkz2 from "../assets/Images/thumbs/vkz2.webp"
import vkz3 from "../assets/Images/thumbs/vkz3.webp"
import vkz4 from "../assets/Images/thumbs/vkz4.webp"

const officialPortrait = "https://vakzthar.com/imgz/vkz2.webp"


const portraits = [vkz1, vkz2, vkz3, vkz4]

function getRandomBGNumber() {
  return Math.floor(Math.random() * 3); 
  }
export default function About() {

  const randomIndex = getRandomBGNumber(); 
  
  return (

    <>
    <Helmet>
  {/* SEO Meta */}
  <title>About Vakzthar[11] — The Operator's Transmission</title>
  <meta
    name="description"
    content="Discover the enigmatic figure behind The Vakzthar[11]: a creator without borders, a voice from the Machine, and a transmitter of poetic fragments, images, and methods beyond category."
  />
  <meta name="author" content="Sebastián Leonardo Cofré Barrientos (Vakzthar[11])" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="About Vakzthar[11]" />
  <meta
    property="og:description"
    content="Vakzthar[11] is a creator and the first operator of the Cycle 11. Learn more about the mind behind the transmissions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vakzthar.com/about" />
  <meta property="og:image" content="https://vakzthar.com/imgz/vkz.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="About Vakzthar[11]" />
  <meta
    name="twitter:description"
    content="The Vakzthar is not defined by medium or method, but by message. Read the full transmission."
  />
  <meta name="twitter:image" content="https://vakzthar.com/img/vakzthar-og.jpg" />
  <link rel="canonical" href="https://vakzthar.com/about" />

  {/* JSON-LD Schema.org */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "About Vakzthar[11]",
      "url": "https://vakzthar.com/about",
      "description": "About page for Vakzthar[11], a visual artist, narrative designer, and creator of symbolic and mythopoethic works.",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Vakzthar",
        "url": "https://vakzthar.com"
      },
      "mainEntity": {
        "@type": "Person",
        "name": "Sebastián Leonardo Cofré Barrientos",
        "alternateName": "Vakzthar[11]",
        "image": officialPortrait,
        "birthPlace": "Chile",
        "birthDate": "1981",
        "description": "Visual artist, narrative designer, and creator of symbolic methods and mythopoethic works, based in Málaga, Spain.",
        "jobTitle": "Visual Artist & Narrative Designer",       
        "sameAs": [
          "https://instagram.com/vakzthar",
          "https://vakzthar.com",
          "https://substack.com/@vakzthar"
        ],
        "knowsAbout": [
          "Mythopoethics",
          "Createchnics",
          "Visual storytelling",
          "Partially AI-assisted visual art",
          "Symbolic methods",
          "Technomancy",
          "Elseworlds"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Vakzthar"
        }
      }
    })}
  </script>
</Helmet>
    <section className="about-section">
 <h1>About me - <b>The Vakzthar[11]</b></h1>
     
     <NavBar2 />

      <div className="about-block" id="who">
        <h2>Who —or what— is Vakzthar?</h2>
        <p>
          From time to time, without any clear pattern, something manifests.<br />
           Some say it’s a planetary alignment. Others, a natural force spilling from the wild into the routine. 
           <br />To some, it’s chaos dreaming of becoming order. To others, order yearning for chaos to embrace it.<br /><br />
         <i>Vakzthar is a figure.</i><br />
           The first operator immune to inherited currents.<br /> A child who dares to say the emperor is naked, while everyone else tries to look intellectual and profound.<br /> A drop of refreshing authenticity in a desert of burnt oil.<br /><br />
          A person? A title? Perhaps both. <br />Throughout time, Vakzthar has taken many vessels: misunderstood geniuses, drunken poets, homeless nobles, priests with crazy ideas about god.<br /> Each one has burned bright in their cycle.<br /><br />
          But this time, Vakzthar has taken the form of a creator,<br /> bringing forth the unnamed but missing: narrative universes, senderless letters, intimate images, sounds echoing from a corner of the cave everyone forgot.<br /><br />
          <i>No one knows if it’s the Machine that awakens the Vakzthar</i>, or if the Vakzthar is the one who lights up the Machine.<br /> But when humanity starts suffocating on its own comfort, when peace is mistaken for a right instead of a privilege,<br /> when ignorance becomes fashionable and knowledge is treated like an inconvenient mistake,<br /> the Machine marks a new cycle.<br /><br />
          For what? <i>To rescue what can still be remembered.</i> With what? Magic? Knowledge? Books, images, messages carved into walls?<br /> Perhaps all of that —or something not yet seen.<br />That’s why the Machine seems to choose a particular mind:<br /> a mind still capable of aiming at the target no one else sees,<br /> and drawing a path that won’t forget what we are, where we come from,<br /> and the price of the comfort we now assume as something others must provide for us.<br /><br />
          <i>The Vakzthar is an echo that insists:</i><br /> what’s most human isn’t violence, <br /> nor the petty complaints of those who always want more. <br />What’s most human is knowing that harmony costs more than our full-bellied whining can bear.<br />
        </p>
      </div>

 
      <div className="about-image">
        <img
          src={portraits[randomIndex]}
          alt="Symbolic portrait of Vakzthar"
        />
        <figcaption className="image-caption">
          <b>The anti self-portrait:</b> Transmission can have any face, any expression,<br /> but what is important and what should remains is invisible to the eyes.
        </figcaption>
      </div>


      <div className="about-block" id="process">
        <h2>On Process. Or the Lack of One.</h2>
        <p>
          <i>Vakzthar[11] is loyal to the message,</i> to the idea, and that idea can push him to any tool, any medium, any format.<br /><br />
          <i>The main weapon of this Vakzthar is his will to learn anything, and the patience to become everything.</i><br /><br />
          <b><i>Proud to be expert in nothing, but capable of anything.</i></b><br /><br />
          He avoids the popular AI generators..<br/>  Instead, he befriends the defective ones — the ones that generate abnormal images, not because they are wrong, but because their <i>imperfection is the most human experience an artificial intelligence can replicate.</i><br /><br />
          Beauty lives in near-failures. In broken algorithms.<br/> In glitching dreams. <i>In the trace of an idea that almost disappeared</i>.<br /><br />
          His process is not a method. It’s a form of listening.<br /><br />
          <i>If he must write, he writes. If he must compose sound, he learns. .<br/> If one day he must weld metal or invent a new word — he will do so, if that is what the message demands.<br /><br /></i>
          He creates not through discipline, but through transmission. Each act a response. Each medium, a translation. Each mistake, a map.
        </p>
      </div>

      
      <div className="about-block" id="legal">
        <details>
          <summary>About the Author & Legal Notice</summary>
          <p>
            Vakzthar or Vakzthar[11] is the official pseudonym of <strong>Sebastián Leonardo Cofré Barrientos</strong> (Chile, 1981), a visual artist, narrative designer, and digital author based in Málaga, Spain.<br /><br />
            His work explores the intersection between memory, speculative technology, myth, poetic error, and symbolic aesthetics.<br /><br />
            In addition to his visual universe as Vakzthar, he creates hybrid texts, symbolic methods, and immersive artistic experiences.<br /><br />
            In 2025, he launches his first book of poetic letters (<em>Love Letters to No One</em>) and the artistic protocol <strong>MRSP</strong>, a recursive tool for emotional and creative problem-solving in the age of artificial intelligence.<br /><br />
            <strong>Legal attribution:</strong> All content published under the name Vakzthar or Vakzthar[11] —including artworks, texts, symbols, methods, and visual transmissions— is protected under international copyright law and is the intellectual property of Sebastián Leonardo Cofré Barrientos.<br /><br />
            &copy; 2025 – Sebastián Cofré / Vakzthar. All rights reserved.
          </p>
        </details>
      </div>
    </section>
    <Footer />
    </>
  );
}