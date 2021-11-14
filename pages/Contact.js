import React from 'react'
import Layout from '../Components/Layout'

export default function Contact() {
  return (
    <div>
      <Layout>
        <div className="contactHeight">
          <div className="py-8 w-5/5 xs:w-4/5 sm:w-4/6 md:w-3/6 xl:w-2/6 xl:h-5/6 mx-auto mt-2">
            <h1 className="font-Montserrat  text-lightGreen text-xl md:text-3xl text-center mb-4">
              Pour me contacter
            </h1>
            <div className=" border-2 border-darkViolet h-full bg-extraLightViolet mx-4 shadow-xl">
              <form
                className="font-JosefinSans flex flex-col p-4 lg:p-6 mx-6 lg:mx-2 xl:mx-0"
                action="POST"
                name="photo-contact-form"
                data-netlify="true"
                action="/Success"
              >
                <label
                  className="text-lightGreen font-semibold my-2 md:text-xl"
                  htmlFor="nom"
                >
                  Nom
                </label>
                <div className="flex flex-col lg:flex-row">
                  <input
                    className="lg:w-1/2 p-2"
                    type="text"
                    placeholder="Nom"
                    id="nom"
                    name="nom"
                  />
                  <input
                    className="mt-4 lg:ml-4 lg:mt-0 lg:w-1/2 p-2"
                    type="text"
                    placeholder="Prénom"
                    id="prenom"
                    name="prenom"
                  />
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
                />
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
                />
                <button
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
