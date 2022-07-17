import React from 'react'
import Image from "next/dist/client/image";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";

export default function GalleryLayout({photoSelection}) {
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
  return (
    <motion.div
      initial={firstAnimation ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
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
                className='h-full w-full block'
                href="#"
                // enable scaled display of the photo if the link is clicked,else disable link
                onClick={
                  !selectedPhoto ? (evt) => handlePhoto(evt, image) : null
                }
              >
                <img
                  className='object-cover h-full w-full'
                  src={image.thumbnail}
                  alt={image.title}
                  
                />
              </a>
            </div>
            <h3 className="pt-2 font-JosefinSans text-center font-bold">{image.title}</h3>
          </motion.div>
        );
      })}

      {/* if click on photo appeared scaled on the screenk */}
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
            selectedPhoto ? "top-28 xs:top-0" : null,
            "z-20",
          ].join(" ")}
        >
          <div className="z-50 h-full border border-black relative">
            <a href="#">
              <Image
                src={selectedPhoto.thumbnail}
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

