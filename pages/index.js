import Head from "next/head";
import Layout from "../Components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charles Cantin photographe</title>
        <meta
          name="description"
          content="Bienvenue sur le site de Charles Cantin, photographe professionnel à Clermont-Ferrand : évenementiel, personnel et professionnel, en studio ou à domicile"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        {/* Twitter card data */}
        <meta name="twitter:card" content="summary" />
        {/* meta Facebook and LinkedIn OpenGraph */}
        {/* ATTENTION: A REPRENDRE (urls, description , etc ...)!!!!!!!!!!!!!!!!!!!!!!! */}
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
          <Image
            src="/photos/tree.jpg"
            layout="fill"
            alt="tree"
            quality={100}
            objectFit="cover"
            loading="eager"
            priority={true}
          />
          {/* Main title of the application */}
          <h1 className="z-50 text-white titleCenter text-center font-Montserrat font-semibold">
            <span className="text-xl md:text-5xl">Charles CANTIN</span> <br />
            <span className="font-JosefinSans text-xl md:text-2xl">
              Photographe
            </span>
          </h1>
        </div>
      </Layout>
    </div>
  );
}
