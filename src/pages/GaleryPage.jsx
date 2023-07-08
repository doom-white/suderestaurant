import GaleryModal from "../components/GaleryModal";
import { useModal } from "../context/ModalContext";

const GaleryPage = () => {
  const { setIsOpen } = useModal();
  function openModal() {
    setIsOpen(true);
  }
  return (
    <section className="gp-main-container">
      <div className="gp-img-container">
        <div className="gp-img-item" onClick={openModal}>
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item" onClick={openModal}>
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item" onClick={openModal}>
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>{" "}
        <div className="gp-img-item">
          <img
            className="gp-img"
            src="https://www.akhisar.bel.tr/images/blog/336-5145.JPG"
            alt="kafe"
          />
        </div>
        <GaleryModal
          imgURL={"https://www.akhisar.bel.tr/images/blog/336-5145.JPG"}
        />
      </div>
    </section>
  );
};

export default GaleryPage;
