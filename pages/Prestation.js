import React from "react";
import Layout from "../Components/Layout";
import path, { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";

export default function Prestation({ mkPresta }) {
  // variable to animate global apparition of prestations 
  const container = {
    hidden: { scale: 0.8, opacity:0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  const item = {
    hidden: { scale: 0.9 },
    show: { scale: 1 },
    transition: { type: "spring", duration: 1.5 },
  };

  return (
    <div>
      <Layout>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="homeHeight grid grid-cols-1 gap-6 px-4 xs:grid-cols-2 xs:px-4 xs:gap-4 md:gap-16 2xl:gap-28 md:px-24 lg:grid-cols-3 py-6 "
        >
          {mkPresta.map((presta,index) => {
            //extract data within the markdown
            const { dataConvert } = presta
            //convert data stringified in object JSON
            const datajson = JSON.parse(dataConvert)
            const { content } = presta;
           
            //render every prestation layout with all markdown data
            return (
              <motion.div
                key={index}
                // animate the prestation card hovered
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 2, type: "spring" },
                  boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.3)",
                }}
                className="border border-lightViolet prestaHeight shadow-lg"
              >
                <h2 className="text-center mt-8 mb-2 font-Montserrat text-xl md:text-2xl font-semibold text-lightGreen">
                  {datajson.title}
                </h2>
                <div className="relative border p-0 h-2/6 mx-4 xs:h-1/4 md:h-1/3 lg:h-1/4 xl:h-1/3 2xl:mx-12 shadow-lg ">
                  <Image
                    src={datajson.thumbnail}
                    alt={datajson.title}
                    quality={100}
                    layout="fill"
                  />
                </div>
                <h3 className="text-center mt-2 mx-10 font-semibold font-JosefinSans xl:text-lg text-lightViolet">
                  {datajson.description}
                </h3>
                <h3
                  className={[
                    "text-center",
                    "mx-5",
                    "font-semibold",
                    "font-JosefinSans",
                    "xl:text-lg",
                    "text-lightViolet",
                    datajson.title === "Famille" ? "mb-2" : "mb-10",
                  ].join(" ")}
                >
                  {datajson.price}
                  {datajson.title === "Evénement" ? null : " euros"}
                </h3>
                <h3 className="text-center mt-2 mx-10 mb-2 xs:mx-2 font-semibold font-JosefinSans xl:text-lg text-lightViolet">
                  {datajson.title === "Famille" ? datajson.price : null}
                </h3>
                <p className="text-center font-JosefinSans px-10 xs:px-4">
                  {content}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  //get files from the prestations dir
  const file = await fs.readdirSync(path.join("markdown/prestations"));

  const presta = file.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    //get frontmatter from files images.md
    const markDownOfPresta = fs.readFileSync(
      path.join("markdown/prestations", filename),
      "utf-8"
    );

    // const imagesDetail = matter(images)
    const { data: dataMarkDown, content } = matter(markDownOfPresta);
    
    const dataConvert = JSON.stringify(dataMarkDown)

    return { slug, dataConvert, content };
  });

  return {
    props: {
      mkPresta: presta,
    },
  };
}
