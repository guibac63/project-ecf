import React, { useState } from "react";
import Layout from "../Components/Layout";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

//contact component in "CONTACT" page
export default function Contact() {
  const [successItem, setSuccessItem] = useState(false);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // encoding data function
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  //submit data to netlify forms
  const onSubmit = (data) => {
    setTimeout(() => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "photo-contact-form",
          ...data,
        }),
      })
        .then(() => setSuccessItem(true))
        .catch((error) => alert(error));
    }, 500);
  };

  // variant for onclick animation button : framer motion
  const buttonAnimation = {
    tap: {
      scale: [1, 0.4, 1],
      backgroundColor: "#50475e",
    },
    transition: { type: "spring", duration: 0.1 },
  };

  return (
    <div>
      <Layout>
        <div className="contactHeight relative z-0">
          <img
            className="blur-sm object-cover h-full w-full absolute"
            src="/photos/wedding-contact.jpg"
            layout="fill"
            alt="tree"
          />

          {
            // if the form is succesfully posted display success component
            !successItem ? (
              <div className="py-8 w-5/5 xs:w-4/5 sm:w-4/6 md:w-3/6 xl:w-2/6 xl:h-5/6 mx-auto">
                <h1 className="z-10 font-Montserrat relative text-gray-600 text-xl md:text-3xl text-center mb-4 font-semibold">
                  Pour me contacter
                </h1>
                <div className="z-10 relative border-2 border-darkViolet h-full mx-4 shadow-xl">
                  <form
                    className="font-JosefinSans flex flex-col p-6 bg-extraLightViolet border-darkViolet"
                    method="POST"
                    name="photo-contact-form"
                    data-netlify="true"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {/* hidden input to allow netlify form works in Next js */}
                    <input
                      type="hidden"
                      name="form-name"
                      value="photo-contact-form"
                    />
                    {/* NAME */}
                    <label
                      className="text-lightGreen font-semibold my-2 md:text-xl"
                      htmlFor="nom"
                    >
                      Nom
                    </label>

                    <div className="flex flex-col lg:flex-row">
                      {/* firstname input content */}
                      <div className="lg:w-1/2 lg:mr-2">
                        {/* firstname input */}
                        <input
                          className="lg:mr-4 lg:mt-0 w-full p-2"
                          type="text"
                          placeholder="Prénom"
                          id="prenom"
                          name="prenom"
                          {...register("prenom", {
                            required: "Donnée obligatoire",
                            pattern: {
                              value: /^[-'a-zA-ZÀ-ÖØ-öø-ÿ]+$/,
                              message: "saisie invalide",
                            },
                          })}
                        />
                        {/* firstname error message */}
                        <div className="h-6">
                          {errors.prenom && (
                            <span className="ml-1 text-red-600 font-semibold">
                              {errors.prenom.message}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* name content */}
                      <div className="lg:w-1/2">
                        {/* name input content  */}
                        <div className="lg:ml-2">
                          {/* name input */}
                          <input
                            className="p-2 mt-4 lg:mt-0 w-full"
                            type="text"
                            placeholder="Nom"
                            id="nom"
                            name="nom"
                            {...register("nom", {
                              required: "Donnée obligatoire",
                              pattern: {
                                value: /^[-'a-zA-ZÀ-ÖØ-öø-ÿ]+$/,
                                message: "saisie invalide",
                              },
                            })}
                          />
                          {/* name input error message */}
                          <div className="h-6">
                            {errors.nom && (
                              <span className="ml-1 text-red-600 font-semibold">
                                {errors.nom.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <label
                      className="text-lightGreen font-semibold my-2 md:text-xl"
                      htmlFor="email"
                    >
                      E-mail
                    </label>
                    <input
                      className="lg:w-2/3 p-2"
                      type="mail"
                      placeholder="E-mail"
                      id="email"
                      name="email"
                      {...register("email", {
                        required: "Donnée obligatoire",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "adresse mail invalide",
                        },
                      })}
                    />
                    {/* email error message */}
                    <div className="h-6">
                      {errors.email && (
                        <span className="ml-1 text-red-600 font-semibold">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <label
                      className="text-lightGreen font-semibold my-2 md:text-xl"
                      htmlFor="categoryphoto"
                    >
                      Type de prestation
                    </label>
                    <select
                      className="lg:w-1/2 p-2"
                      name="categoryphoto"
                      id="categoryphoto"
                      {...register("categoryphoto")}
                    >
                      <option value=""></option>
                      <option value="mariage">Mariage</option>
                      <option value="grossesse">Grossesse</option>
                      <option value="bebe">Bébé</option>
                      <option value="famille">Famille</option>
                      <option value="bapteme">Baptême</option>
                      <option value="Couple">Couple</option>
                    </select>
                    <label
                      className="text-lightGreen font-semibold my-2 md:text-xl"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="p-2"
                      id="message"
                      name="message"
                      rows="3"
                      {...register("message")}
                    />
                    <motion.button
                      variants={buttonAnimation}
                      whileTap="tap"
                      className="mt-4 bg-darkGreen px-2 2xl:w-1/4 h-10 text-white font-semibold rounded-lg mx-auto"
                      type="submit"
                    >
                      <span>ENV</span>
                      <img
                        className="h-4 mb-1 inline"
                        src="/icons/lens.svg"
                        alt="lens icon"
                      />
                      <span>YER</span>
                    </motion.button>
                  </form>
                </div>
              </div>
            ) : (
              // success component
              <div className="z-10 relative homeHeight flex justify-center items-center font-Montserrat">
                <div className="rounded-lg font-semibold text-green-700 h-28 bg-white border-8 border-darkViolet w-3/4 md:w-2/4 p-2 flex justify-center items-center">
                  <h1 className="text-center text-sm md:text-lg">
                    Votre message a bien été transmis avec succès !
                  </h1>
                </div>
              </div>
            )
          }
        </div>
      </Layout>
    </div>
  );
}
