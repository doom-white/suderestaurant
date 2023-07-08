import GaleryModal from "../components/GaleryModal";
import { useModal } from "../context/ModalContext";
import sude_images from "../assets/restaurant_images/sude-images";
import { useEffect, useState } from "react";

const GaleryPage = () => {
  const { showModal } = useModal();
  const [selectedImg, setSelectedImg] = useState(sude_images[0]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    setAllImages([
      { id: selectedImg.id, res: selectedImg.res },

      ...sude_images.filter((item) => item.res !== selectedImg.res),
    ]);
  }, [selectedImg]);

  return (
    <section className="gp-main-container">
      <div className="gp-img-container">
        {sude_images &&
          sude_images.map((sude) => (
            <>
              <div
                className="gp-img-item"
                onClick={() => {
                  setSelectedImg(sude);

                  showModal();
                }}
              >
                <img className="gp-img" src={sude.res} alt="sude-resimler" />
              </div>
            </>
          ))}
      </div>
      <GaleryModal sude={allImages} />
    </section>
  );
};

export default GaleryPage;
