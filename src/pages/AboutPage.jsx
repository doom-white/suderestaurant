import deneme1 from "../assets/restaurant_images/deneme1.jpg";
import deneme2 from "../assets/restaurant_images/deneme2.jpg";

const AboutPage = () => {
  return (
    <section className="ap-main-container">
      <div className="ap-top-main-container">
        <div className="ap-top-info">
          <h1 className="ap-top-title">
            World famous <br /> stars like our app!
          </h1>
          <p className="ap-top-text">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for lorem ipsum will
            uncover many web sites still in their infancy various versions have
            evolved.
          </p>
        </div>
        <div className="ap-top-img-div">
          <img className="ap-top-img" src={deneme2} alt="" />
        </div>
      </div>

      <div className="ap-bottom-main-container">
        <div className="ap-bottom-img-div">
          <img className="ap-bottom-img" src={deneme1} alt="" />
        </div>
        <div className="ap-bottom-info">
          <h1 className="ap-bottom-title">
            Share favorit <br /> music with friends!
          </h1>
          <p className="ap-bottom-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using lorem ipsum is that it has a more-or-less normal
            distribution of letters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
