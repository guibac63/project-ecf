import React from 'react'
import Layout from '../Components/Layout'

export default function Success() {
  return (
    <div>
      <Layout>
        <div className="homeHeight flex justify-center items-center">
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
