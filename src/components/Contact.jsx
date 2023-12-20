import { React, useState, useRef } from "react";
import { ParticlesContainer } from "./canvas";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // U-U18xpLuuvRET9rt
  // template_is9r4ki
  // Service ID:service_507yflg
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_507yflg",
        "template_is9r4ki",
        {
          from_name: form.name,
          to_name: "Alaa",
          from_email: form.email,
          to_email: "alaa.alsharif@lau.edu",
          message: form.message,
        },
        "U-U18xpLuuvRET9rt"
      )
      .then(
        () => {
          setLoading(False);
          alert("Thank You. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(False);

          console.log(error);
          alert("Something Went Wrong");
        }
      );
  };
  return (
    <section id="Contact" className="contact-section">
      <div className="contact-wrapper">
        <p className="subTitle">Get in touch</p>
        <h3 className="title">Contact</h3>
        <form action="" ref={formRef} onSubmit={handleSubmit} className="form">
          <label>
            <span>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
            />
          </label>
          <label>
            <span>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
            />
          </label>
          <label>
            <span>Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
            />
          </label>

          <button className="SubmitBtn" type="submit">
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </div>
      <ParticlesContainer />
    </section>
  );
};

// const Contact = () => {
//   return (
//     <section id="Contact" className="contact-section">
//       <div className="intro">
//         <span>Feel free to reach out to me </span>
//         <h2>Contact</h2>
//       </div>
//       <ParticlesContainer />
//     </section>
//   );
// };

export default Contact;
