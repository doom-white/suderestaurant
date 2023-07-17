import GaleryModal from "../components/GaleryModal";
import { useModal } from "../context/ModalContext";
import sude_images from "../assets/restaurant_images/sude-images";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const galeryPageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.3,
      linear: "linear",
    },
  },
};

const GaleryPage = () => {
  const { switchOnOff } = useTheme();
  const { showModal } = useModal();
  const [selectedImg, setSelectedImg] = useState(sude_images[0]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    setAllImages([
      { id: selectedImg.id, desc: selectedImg.desc, res: selectedImg.res },

      ...sude_images.filter((item) => item.res !== selectedImg.res),
    ]);
  }, [selectedImg]);

  return (
    <section className="gp-main-container">
      <motion.div
        className="gp-img-container"
        variants={galeryPageVariants}
        initial="hidden"
        animate="visible"
      >
        {sude_images &&
          sude_images.map((sude) => (
            <div
              className={`gp-img-item ${
                switchOnOff ? "" : "gp-dark"
              }`.trimEnd()}
              onClick={() => {
                setSelectedImg(sude);
                showModal();
              }}
            >
              <img className="gp-img" src={sude.res} alt="sude-resimler" />
            </div>
          ))}
      </motion.div>
      <GaleryModal sude={allImages} />
    </section>
  );
};

export default GaleryPage;
