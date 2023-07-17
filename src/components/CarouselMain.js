import { Carousel } from "antd";
import imagesData from "../assets/data/carousel.json";
import ribbon from "../assets/icons/ico_general/ribbon.png";
import ribbondark from "../assets/icons/ico_general/ribbond.png";
import { useTheme } from "../context/ThemeContext";

const CarouselMain = () => {
  const { switchOnOff } = useTheme();

  return (
    <div className="crsl-main-container">
      <img
        className="crsl-ribbon-top"
        src={switchOnOff ? ribbon : ribbondark}
        alt="ribbon"
      />
      <img
        className="crsl-ribbon-bottom"
        src={switchOnOff ? ribbon : ribbondark}
        alt="ribbon"
      />
      <Carousel autoplay>
        {imagesData &&
          imagesData.map((i) => {
            return (
              <div className="crsl-images-container" key={i.id}>
                <span
                  className={`crsl-images-title ${
                    switchOnOff ? "" : "crsl-dark"
                  }`.trimEnd()}
                >
                  {i.title} {i.desc && "-"} {i.desc}
                </span>
                <img className="crsl-images" src={i.imgURL} alt={i.title} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default CarouselMain;
