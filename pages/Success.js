import React from 'react'
import Layout from '../Components/Layout'
import Head from 'next/head';

export default function Success() {
  return (
    <div>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&family=Montserrat:wght@200&display=swap');
        </style>
      </Head>
      <Layout>
        <div className="homeHeight flex justify-center items-center font-Montserrat">
          <div className="rounded-lg font-semibold text-green-700 h-28 bg-green-100 w-1/4 flex justify-center items-center">
            <h1 className="text-center text-lg">
              Votre message a bien été transmis avec succès !
            </h1>
          </div>
        </div>
      </Layout>
    </div>
  );
}
