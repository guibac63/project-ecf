import React, { useState } from "react";
import Layout from "../Components/Layout";
import path, { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/dist/client/image";

export default function Gallery({ mkImage }) {
  const [selectCategory, setSelectCategory] = useState("");
  

  const handleSelect = (evt) => {
    setSelectCategory(evt.currentTarget.value);
  };

  // component that represents the layout of a picture in the gallery
  const GalleryPhoto = ({photoSelection}) =>{
    console.log(photoSelection)
    return (
      <div className="flex flex-wrap p-2 gallery justify-center items-center min-h-3/4">
        {photoSelection.map((image, index) => {
          return (
            <div
              key={index}
              className=" w-96 border-black border m-2 p-2 transform hover:scale-105 shadow-lg"
            >
              <div className=" relative h-48 border border-black">
                <a href="#">
                  <Image
                    src={image.dataMarkDown.cover_image}
                    alt={image.dataMarkDown.title}
                    quality={100}
                    layout="fill"
                  />
                  {/* <img className="object-fill"
                            src={image.dataMarkDown.cover_image}
                            alt={image.dataMarkDown.title}
                          /> */}
                </a>
              </div>
              <h3 className="pt-2 font-JosefinSans text-center">
                {image.dataMarkDown.title}
              </h3>
            </div>
          );
        })}
      </div>
    );
  }


  return (
    <div>
      <Layout>
        <div className="homeHeight flex flex-col relative">
          <div className="h-32 flex justify-center">
            <h1 className="pt-4 font-Montserrat text-xl md:text-5xl font-semibold text-lightGreen">
              Galerie
            </h1>
          </div>
          <div className="absolute right-1/2 top-20 translate-x-1/2 border-2 border-black rounded-xl py-1 px-3 font-JosefinSans text-sm md:text-lg text-lightViolet">
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
            {/* test if a photo category is selected */}
            {!!selectCategory ? (
              // {/* render every images in markdown files which match with selected category  */}
              <GalleryPhoto
                photoSelection={mkImage.filter(
                  image => image.dataMarkDown.excerpt.toLowerCase() == selectCategory.toLowerCase()
                )}
              />
            ) : (
              // {/* render every images in markdown files with titles at loading or select without category  */}
                <GalleryPhoto
                  photoSelection={mkImage}
              />
            )}
        </div>
      </Layout>
    </div>
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
