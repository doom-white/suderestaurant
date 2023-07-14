import apBottomImg from "../assets/restaurant_images/ap-bottom-img.png";
import apTopImg from "../assets/restaurant_images/ap-top-img.png";
import { motion } from "framer-motion";

const aboutPageVariants = {
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

const topVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.7,
      damping: 3,
      duration: 0.7,
      delay: 0.7,
      stiffness: 150,
    },
  },
};

const bottomVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.7,
      damping: 3,
      duration: 0.7,
      delay: 0.7,
      stiffness: 150,
    },
  },
};

const AboutPage = () => {
  return (
    <motion.section
      className="ap-main-container"
      variants={aboutPageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="ap-top-main-container" variants={topVariants}>
        <div className="ap-top-info">
          <h1 className="ap-top-title">
            Bilecik'te <br /> Gaziantep Lezzetleri
          </h1>
          <p className="ap-top-text">
            2000'li yılların başından beri Bilecik ilimizde esnaflık
            yapmaktayız. Siz değerli müşterilerimize varsayılan lezzetler
            haricinde Gaziantep lezzetlerini de Gaziantep'e gitmenize gerek
            kalmadan eş değerde sunmaktayız ve bundan büyük keyif alıyoruz.
            Sizin mutluluğunuzu görmek bizi de ziyadesiyle mutlu ediyor.
          </p>
        </div>
        <div className="ap-top-img-div">
          <img className="ap-top-img" src={apTopImg} alt="" />
        </div>
      </motion.div>
      <div className="ap-divider"></div>
      <motion.div
        className="ap-bottom-main-container"
        variants={bottomVariants}
      >
        <div className="ap-bottom-img-div">
          <img className="ap-bottom-img" src={apBottomImg} alt="" />
        </div>
        <div className="ap-bottom-info">
          <h1 className="ap-bottom-title">
            Ev tadında, güvenelir <br /> ve nezih yemekler
          </h1>
          <p className="ap-bottom-text">
            Siz değerli müşterilerimiz için öncelikli hedefimiz, evinizde yemek
            yediğiniz zamanki hijyeni sağlamak , sağlıklı ve lezettli
            yemeklerimiz ile ihtiyaçlarınızı karşılarken aynı zamanda nezih
            ortamımız ile de geçirdiğiniz süre içinde keyif almanızı
            sağlamaktır.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
