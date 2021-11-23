import Layout from "../Components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  // first animation : progressive apparition of the main photo
  const variantsOne = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.3 } },
  };

  // connect invited user to admin
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }, []);

  return (
    <div>
      <Layout>
        {/* background image of the application */}
        <div className="relative z-0 homeHeight">
          <motion.div
            variants={variantsOne}
            initial="hidden"
            animate="visible"
            className="z-0"
          >
            <Image
              src="/photos/tree.jpg"
              layout="fill"
              alt="tree"
              quality={100}
              objectFit="cover"
              loading="eager"
              priority={true}
            />
          </motion.div>
          {/* Main title of the application */}
          <h1 className="z-10 text-white titleCenter text-center font-Montserrat ">
            <span className="text-xl md:text-5xl font-semibold">
              Charles CANTIN
            </span>{" "}
            <br />
            <span className="font-JosefinSans text-xl md:text-2xl">
              Photographe
            </span>
          </h1>
        </div>
      </Layout>
    </div>
  );
}
