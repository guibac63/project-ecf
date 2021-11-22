import Head from "next/head";
import Layout from "../Components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";




export default function Home() {

  // first animation : progressive apparition of the main photo 
  const variantsOne = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.3 } },
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Charles Cantin photographe</title>
        <meta name="Content-Type" content="UTF-8"/>
        <meta name="Content-Language" content="fr"/>
        <meta name="Description" content="Bienvenue sur le site de Charles Cantin, photographe professionnel à Clermont-Ferrand : évènementiel, personnel et professionnel, en studio ou à domicile"/>
        <meta name="Subject" content="Photographie"/>
        <meta name="Author" content="guibacsolutions"/>
        <meta name="Publisher" content="guibacsolutions"/>
        <meta name="Identifier-Url" content="https://zen-mestorf-4d5f9c.netlify.app"/>
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
      </Head>
      <Layout>
        {/* background image of the application */}
        <div className="relative z-0 homeHeight">
          <motion.div
            variants={variantsOne}
            initial="hidden"
            animate="visible"
            className="z-0"
          >
            <Image
              src="/photos/tree.jpg"
              layout="fill"
              alt="tree"
              quality={100}
              objectFit="cover"
              loading="eager"
              priority={true}
            />
          </motion.div>
          {/* Main title of the application */}
          <h1 className="z-10 text-white titleCenter text-center font-Montserrat ">
            <span className="text-xl md:text-5xl font-semibold">
              Charles CANTIN
            </span>{" "}
            <br />
            <span className="font-JosefinSans text-xl md:text-2xl">
              Photographe
            </span>
          </h1>
        </div>
      </Layout>
    </div>
  );
}
