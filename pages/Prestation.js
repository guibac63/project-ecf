import React from "react";
import Layout from "../Components/Layout";
import path, { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/dist/client/image";


export default function Prestation({mkPresta}) {


  return (
    <div>
      <Layout>
        <div className="homeHeight grid grid-cols-1 gap-6 px-4 xs:grid-cols-2 xs:px-4 xs:gap-4 md:gap-16 2xl:gap-28 md:px-24 lg:grid-cols-3 py-6 ">
          {mkPresta.map((presta) => {
            //extract data within the markdown
            const { dataMarkDown } = presta;
            const {content} = presta

            //render every prestation layout with all markdown data
            return (
              <div className="border-2 border-lightViolet prestaHeight shadow-lg">
                <h2 className="text-center mt-8 mb-2 font-Montserrat text-xl md:text-2xl font-semibold text-lightGreen">
                  {dataMarkDown.title}
                </h2>
                <div className="relative border p-0 h-2/6 mx-4 xs:h-1/4 md:h-1/3 lg:h-1/4 xl:h-1/3 2xl:mx-12 shadow-lg ">
                  <Image
                    src={dataMarkDown.cover_image}
                    alt={dataMarkDown.title}
                    quality={100}
                    layout="fill"
                  />
                </div>
                <h3 className="text-center mt-2 mx-10 font-semibold font-JosefinSans xl:text-lg text-lightViolet">
                  {dataMarkDown.description}
                </h3>
                <h3 className="text-center mb-2 mx-10 font-semibold font-JosefinSans xl:text-lg text-lightViolet">
                  {dataMarkDown.price}{" "}
                  {dataMarkDown.title === "Evénement" ? null : " euros"}
                </h3>
                <p className="text-center font-JosefinSans mt-10 px-10 xs:px-4">
                  {content}
                </p>
              </div>
            );
          })}
        </div>
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
    const { data: dataMarkDown,content } = matter(markDownOfPresta);

    return { slug, dataMarkDown,content };
  });

  return {
    props: {
      mkPresta: presta,
    },
  };
}
