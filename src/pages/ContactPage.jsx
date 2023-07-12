import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [content, setContent] = useState("");

  const handleCleanInputs = () => {
    setName("");
    setSurname("");
    setMail("");
    setContent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lxqk8f4",
        "template_8r21oc6",
        formRef.current,
        "7m1FE-edaa9F6wLpy"
      )
      .then(
        (result) => {
          toast.success("Mesajınız gönderilmiştir!");
          handleCleanInputs();
        },
        (error) => {
          toast.error(`Üzgünüz! Mesajınız gönderilemedi! Hata:${error}`);
        }
      );
  };

  return (
    <section className="con-main-container">
      <div className="con-form-container">
        <p className="con-form-title">Bizimle iletişime geçin</p>
        <form ref={formRef} className="con-form" onSubmit={handleSubmit}>
          <div className="con-form-item">
            <input
              id="name"
              name="user_name"
              className="con-form-input"
              type="text"
              value={
                name.substring(0, 1).toLocaleUpperCase("tr") + name.substring(1)
              }
              placeholder="Adınızı giriniz..."
              onChange={(e) => setName(e.target.value)}
              required
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
              value={
                surname.substring(0, 1).toLocaleUpperCase("tr") +
                surname.substring(1)
              }
              placeholder="Soyadınızı giriniz..."
              onChange={(e) => setSurname(e.target.value)}
              required
            />
            <label className="con-form-label" htmlFor="surname">
              soyisim
            </label>
          </div>
          <div className="con-form-item">
            <input
              id="mail"
              name="user_email"
              className="con-form-input"
              type="email"
              pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
              value={mail}
              placeholder="E-mail adresinizi giriniz..."
              onChange={(e) => setMail(e.target.value)}
              required
            />
            <label className="con-form-label" htmlFor="user_email">
              e-mail
            </label>
          </div>
          <div className="con-form-item">
            <textarea
              name="message"
              id="mail-text"
              className="con-form-area"
              cols="30"
              rows="5"
              placeholder="Bir şeyler yaz..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
            <label className="con-form-label" htmlFor="message">
              içerik
            </label>
          </div>
          <div className="con-button-container">
            <button className="con-button btn-send" type="submit">
              Gönder
            </button>
            <ToastContainer />
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
