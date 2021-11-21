import React, { useLayoutEffect, useState } from "react";
import Layout from "../Components/Layout";
import path, { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/dist/client/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function Gallery({ mkImage }) {
  // display only select category of photos
  const [selectCategory, setSelectCategory] = useState("");
  //state to manage the scaling of a selected photo
  const [selectedPhoto, setSelectedPhoto] = useState("");
  const [photoDisplayPos, setPhotoDisplayPos] = useState(null);
  //allow only one opacity animation on page loading
  const [firstAnimation, setFirstAnimation] = useState(false);

  // scroll to the position of the clicked element
  useEffect(() => {
    window.scrollTo(0, photoDisplayPos);
  }, [selectedPhoto]);

  //load selected category of image
  const handleSelect = (evt) => {
    setSelectCategory(evt.currentTarget.value);
  };

  const handlePhoto = (evt, imagedata) => {
    // cancel animation if the user wants to scale a select photo
    setFirstAnimation(true);
    // to conserve the photo position on the scroll and don't reload on the top of the page
    setPhotoDisplayPos(evt.pageY - 220);
    //get the data from the selected photo
    setSelectedPhoto(imagedata);
  };

  // component that represents the layout of a picture in the gallery
  const GalleryPhoto = ({ photoSelection }) => {
    return (
      <motion.div
        initial={firstAnimation ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
        className="flex flex-wrap p-2 gallery justify-center items-center min-h-3/4"
      >
        {photoSelection.map((image, index) => {
          return (
            <motion.div
              key={index}
              className={[
                "w-96",
                "border-black",
                "border",
                "m-2",
                "p-2",
                "transform",
                "hover:scale-105",
                "shadow-lg",
                "relative",
                "z-20",
                selectedPhoto ? "blur-md" : null,
              ].join(" ")}
            >
              <div className=" relative h-48 border border-black">
                <a
                  href="#"
                  // enable scaled display of the photo if the link is clicked,else disable link
                  onClick={
                    !selectedPhoto
                      ? (evt) => handlePhoto(evt, image.dataMarkDown)
                      : null
                  }
                >
                  <Image
                    src={image.dataMarkDown.cover_image}
                    alt={image.dataMarkDown.title}
                    quality={100}
                    layout="fill"
                  />
                </a>
              </div>
              <h3 className="pt-2 font-JosefinSans text-center">
                {image.dataMarkDown.title}
              </h3>
            </motion.div>
          );
        })}

        {selectedPhoto && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={[
              "photo-width",
              "border-black",
              "bg-white",
              "border",
              "m-2",
              "p-2",
              "transform",
              !selectedPhoto && "hover:scale-105",
              "shadow-lg",
              selectedPhoto ? "fixed" : "relative",
              selectedPhoto ? "top-28 md:top-14 xl:top-0" : null,
              "z-20",
            ].join(" ")}
          >
            <div className="z-50 h-full border border-black relative">
              <a href="#">
                <Image
                  src={selectedPhoto.cover_image}
                  alt={selectedPhoto.title}
                  quality={100}
                  layout="fill"
                />
              </a>
              {/* cross-icon to quit scaled photo */}
              <a onClick={() => setSelectedPhoto("")} href="#">
                <img
                  className="h-10 lg:h-16 absolute right-0"
                  src="/icons/cross-circle.svg"
                  alt="cross circle"
                />
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  //-----------------------COMPONENT-----------------------//

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&family=Montserrat:wght@200&display=swap');
        </style>
      </Head>
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
                <option className="text-center" value="Couple">
                  Couple
                </option>
              </select>
            </div>
          </div>

          {/* test if a photo category is selected */}
          {!!selectCategory ? (
            // {/* render every images in markdown files which match with selected category  */}
            <GalleryPhoto
              photoSelection={mkImage.filter(
                (image) =>
                  image.dataMarkDown.excerpt.toLowerCase() ==
                  selectCategory.toLowerCase()
              )}
            />
          ) : (
            // {/* render every images in markdown files with titles at loading or select without category  */}
            <GalleryPhoto photoSelection={mkImage} />
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

    return { slug, dataMarkDown };
  });

  return {
    props: {
      mkImage: images,
    },
  };
}
