import GaleryModal from "../components/GaleryModal";
import { useModal } from "../context/ModalContext";
import sude_images from "../assets/restaurant_images/sude-images";
import { useState } from "react";

const GaleryPage = () => {
  const { showModal } = useModal();
  const [selectedImg, setSelectedImg] = useState(false);

  return (
    <section className="gp-main-container">
      <div className="gp-img-container">
        {sude_images &&
          sude_images.map((sude) => (
            <>
              <div
                className="gp-img-item"
                onClick={() => {
                  setSelectedImg(sude.res);
                  showModal();
                }}
              >
                <img className="gp-img" src={sude.res} alt="sude-resimler" />
              </div>
            </>
          ))}
      </div>
      <GaleryModal sude={selectedImg} />
    </section>
  );
};

export default GaleryPage;
