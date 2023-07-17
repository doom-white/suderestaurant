import apBottomImg from "../assets/restaurant_images/ap-bottom-img.png";
import apTopImg from "../assets/restaurant_images/ap-top-img.png";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

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
    x: "200",
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
    x: "-200",
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
  const { switchOnOff } = useTheme();

  return (
    <motion.section
      className="ap-main-container"
      variants={aboutPageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={`${
          switchOnOff ? "ap-top-main-container" : "ap-top-main-dark-container"
        }`.trimEnd()}
        variants={topVariants}
      >
        <div className="ap-top-info">
          <h1
            className={`ap-top-title ${
              switchOnOff ? "" : "abt-dark"
            } `.trimEnd()}
          >
            Bilecik'te <br /> Gaziantep Lezzetleri
          </h1>
          <p
            className={`ap-top-text ${
              switchOnOff ? "" : "abt-dark"
            } `.trimEnd()}
          >
            2000'li yılların başından beri Bilecik ilimizde esnaflık
            yapmaktayız. Siz değerli müşterilerimize varsayılan lezzetler
            haricinde Gaziantep lezzetlerini de Gaziantep'e gitmenize gerek
            kalmadan eş değerde sunmaktayız ve bundan büyük keyif alıyoruz.
            Sizin mutluluğunuzu görmek bizi de ziyadesiyle mutlu ediyor.
          </p>
        </div>
        <div
          className={`${
            switchOnOff ? "ap-top-img-div" : "ap-top-img-dark-div"
          }`}
        >
          <img className="ap-top-img" src={apTopImg} alt="" />
        </div>
      </motion.div>

      <div
        className={`ap-divider ${switchOnOff ? "" : "abt-dark"} `.trimEnd()}
      ></div>

      <motion.div
        className={`${
          switchOnOff
            ? "ap-bottom-main-container"
            : "ap-bottom-main-dark-container"
        }`.trimEnd()}
        variants={bottomVariants}
      >
        <div
          className={`${
            switchOnOff ? "ap-bottom-img-div" : "ap-bottom-img-dark-div"
          }`}
        >
          <img className="ap-bottom-img" src={apBottomImg} alt="" />
        </div>
        <div className="ap-bottom-info">
          <h1
            className={`ap-bottom-title ${
              switchOnOff ? "" : "abt-dark"
            } `.trimEnd()}
          >
            Ev tadında, güvenelir <br /> ve nezih yemekler
          </h1>
          <p
            className={`ap-bottom-text ${
              switchOnOff ? "" : "abt-dark"
            } `.trimEnd()}
          >
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
