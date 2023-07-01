import { Carousel } from "antd";
import imagesData from "../assets/data/carousel.json";
import ribbon from "../assets/icons/ico_general/ribbon.png";

const CarouselMain = () => {
  return (
    <>
      <img className="crsl-ribbon-top" src={ribbon} alt="ribbon" />
      <img className="crsl-ribbon-bottom" src={ribbon} alt="ribbon" />
      <Carousel autoplay>
        {imagesData &&
          imagesData.map((i) => {
            return (
              <div key={i.id}>
                <img className="crsl-images" src={i.imgURL} alt={i.title} />
              </div>
            );
          })}
      </Carousel>
    </>
  );
};

export default CarouselMain;
