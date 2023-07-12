import { useRef, useState } from "react";

const ContactPage = () => {
  const resultRef = useRef(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [content, setContent] = useState("");
  const [mailStatus, setMailStatus] = useState(true);

  const handleCleanInputs = () => {
    setName("");
    setSurname("");
    setMail("");
    setContent("");
    resultRef.current.style.display = "none";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
      Mail gönderme işlemleri....
    */
    resultRef.current.style.display = "flex";
    // setTimeout(() => {
    //   resultRef.current.style.display = "none";
    // }, 2000);
  };

  return (
    <section className="con-main-container">
      <div className="con-form-container">
        <p className="con-form-title">Bizimle iletişime geçin</p>
        <form className="con-form" onSubmit={handleSubmit}>
          <div
            ref={resultRef}
            className="con-result"
            style={
              mailStatus
                ? { background: "rgb(66, 148, 168)" }
                : { background: " rgba(199, 61, 88, 0.918)" }
            }
          >
            {mailStatus
              ? "Mesajınız başarıyla gönderildi!"
              : "Üzgünüz, mesajınız gönderilemedi!"}
          </div>
          <div className="con-form-item">
            <input
              id="name"
              name="name"
              className="con-form-input"
              type="text"
              value={name}
              placeholder="Adınızı giriniz..."
              onChange={(e) => setName(e.target.value)}
            />
            <label className="con-form-label" htmlFor="name">
              isim
            </label>
          </div>
          <div className="con-form-item">
            <input
              id="surname"
              name="surname"
              className="con-form-input"
              type="text"
              value={surname}
              placeholder="Soyadınızı giriniz..."
              onChange={(e) => setSurname(e.target.value)}
            />
            <label className="con-form-label" htmlFor="surname">
              soyisim
            </label>
          </div>
          <div className="con-form-item">
            <input
              id="mail"
              name="mail"
              className="con-form-input"
              type="email"
              pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
              value={mail}
              placeholder="E-mail adresinizi giriniz..."
              onChange={(e) => setMail(e.target.value)}
              // required
            />
            <label className="con-form-label" htmlFor="mail">
              e-mail
            </label>
          </div>
          <div className="con-form-item">
            <textarea
              name="mail-text"
              id="mail-text"
              className="con-form-area"
              cols="30"
              rows="5"
              placeholder="Bir şeyler yaz..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              // required
            ></textarea>
            <label className="con-form-label" htmlFor="mail-text">
              içerik
            </label>
          </div>
          <div className="con-button-container">
            <button className="con-button btn-send" type="submit">
              Gönder
            </button>
            <button
              className="con-button btn-cancel"
              type="button"
              onClick={handleCleanInputs}
            >
              İptal Et
            </button>
          </div>
        </form>
      </div>
      <div className="con-map-container">
        <iframe
          title="sude_restaurant_&_cafe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6100.260662528406!2d29.978908999999998!3d40.1393805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb8fe0c31e83f7%3A0xeb3a95083e87367b!2sOtogar%20Restoran!5e0!3m2!1sen!2str!4v1689006329921!5m2!1sen!2str"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
