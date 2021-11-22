import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Charles Cantin photographe</title>
        <meta name="Content-Type" content="UTF-8" />
        <meta name="Content-Language" content="fr" />
        <meta
          name="Description"
          content="Bienvenue sur le site de Charles Cantin, photographe professionnel à Clermont-Ferrand : évènementiel, personnel et professionnel, en studio ou à domicile"
        />
        <meta name="Subject" content="Photographie" />
        <meta name="Author" content="guibacsolutions" />
        <meta name="Publisher" content="guibacsolutions" />
        <meta
          name="Identifier-Url"
          content="https://zen-mestorf-4d5f9c.netlify.app"
        />
        {/* Twitter card data */}
        <meta name="twitter:card" content="summary" />
        {/* meta Facebook and LinkedIn OpenGraph */}
        <meta property="og:title" content="accueil" />
        <meta property="og:url" content="http://ccantin.com/" />
        <meta property="og:image" content="https://exemple.com/image-fb.png" />
        <meta property="og:description" content="Charles Cantin photographe" />
        <meta property="og:site_name" content="Charles Cantin" />
        <meta property="og:type" content="accueil" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&family=Montserrat:wght@200&display=swap');
        </style>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}


