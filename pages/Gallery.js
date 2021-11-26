import React, { useState } from "react";
import Layout from "../Components/Layout";
import path, { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";
import GalleryLayout from "../Components/galleryLayout";

export default function Gallery({ mkImage }) {
  //extract data and conversion to JSON format
  const imageData = mkImage.map((image) => {
    const { dataString } = image;
    return JSON.parse(dataString);
  });

  // display only select category of photos
  const [selectCategory, setSelectCategory] = useState("");
  
  //load selected category of image
  const handleSelect = (evt) => {
    setSelectCategory(evt.currentTarget.value);
  };

  //gallery component in "GALERIE" page
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Layout>
        <div className="homeHeight flex flex-col relative">
          <div className="h-48  md:h-20 flex justify-center">
            <div className="absolute right-1/2 top-36 md:top-4 translate-x-1/2 border-2 border-black rounded-xl py-1 px-3 font-JosefinSans text-sm md:text-lg text-lightViolet">
              <label for="categorie-select">Catégorie:</label>
              <select
                onChange={(evt) => {
                  handleSelect(evt);
                }}
                className="font-semibold outline-none"
                name="cat_photo"
                id="cat_photo"
              >
                <option className="text-center" value=""></option>
                <option className="text-center" value="mariage">
                  Mariage
                </option>
                <option className="text-center" value="grossesse">
                  Grossesse
                </option>
                <option className="text-center" value="bebe">
                  Bébé
                </option>
                <option className="text-center" value="famille">
                  Famille
                </option>
                <option className="text-center" value="bapteme">
                  Baptême
                </option>
                <option className="text-center" value="couple">
                  Couple
                </option>
              </select>
            </div>
          </div>

          {/* test if a photo category is selected */}
          {!!selectCategory ? (
            <GalleryLayout
              photoSelection={imageData.filter(
                (image) =>
                  image.category.toLowerCase() == selectCategory.toLowerCase()
              )}
            />
          ) : (            
            // {/* render every images in markdown files with titles at loading or select without category  */}
            <GalleryLayout photoSelection={imageData} />
          )}
        </div>
      </Layout>
    </motion.div>
  );
}

//collect every info on the markdown files created for setting the gallery
export async function getStaticProps() {
  //get files from the images dir
  const file = await fs.readdirSync(path.join("markdown/images"));

  const images = file.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    //get frontmatter from files images.md
    const markDownOfImage = fs.readFileSync(
      path.join("markdown/images", filename),
      "utf-8"
    );

    // const imagesDetail = matter(images)
    const { data: dataMarkDown } = matter(markDownOfImage);

    const dataString = JSON.stringify(dataMarkDown)

    return { slug, dataString };
  });

  return {
    props: {
      mkImage: images,
    },
  };
}
