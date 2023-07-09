import apBottomImg from "../assets/restaurant_images/ap-bottom-img.png";
import apTopImg from "../assets/restaurant_images/ap-top-img.png";

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
          <img className="ap-top-img" src={apTopImg} alt="" />
        </div>
      </div>

      <div className="ap-bottom-main-container">
        <div className="ap-bottom-img-div">
          <img className="ap-bottom-img" src={apBottomImg} alt="" />
        </div>
        <div className="ap-bottom-info">
          <h1 className="ap-bottom-title">
            ev tadında, güvenelir <br /> ve nezih yemekler!
          </h1>
          <p className="ap-bottom-text">
            Siz değerli müşterilerimiz için öncelikli hedefimiz, evinizde yemek
            yediğiniz zamanki hijyeni sağlamak , sağlıklı ve lezettli
            yemeklerimiz ile ihtiyaçlarınızı karşılarken aynı zamanda nezih
            ortamımız ile de geçirdiğiniz süre içinde keyif almanızı
            sağlamaktır.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
