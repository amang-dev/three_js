
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_gy4hs7b",
        "template_pm0888f",
        {
          from_name: form.name,
          to_name: "Aman",
          from_email: form.email,
          to_email: "amangupta99344@gmail.com",
          message: form.message,
        },
        'jk-wkhiMLZ9qQGAeF'
      );

      setLoading(false);
      alert("Your message has been sent");
      setForm({
        name: '',
        email:'',
        message:'',
      })
    } catch (error) {
      setLoading(false);
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <section className="c-space my-20 border-b-2 border-gray-600" id="contact">
 
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
           
        />

        <div className="contact-container">
          <h3 className="head-text mt-10">Let's talk</h3>
          <p className="text-lg text-white-600 mt-2">
            Hi, fill the form to contact me.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col space-y-6"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="john Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                row={5}
                className="field-input"
                placeholder="Hi, I'm interested in..... "
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;





