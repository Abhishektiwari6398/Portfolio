import React from "react";
import contact from "../assets/contact.png";
import { motion } from "framer-motion";
import Swal from 'sweetalert2';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "a51b953e-d85b-49bd-bfb3-c79e5fea4dd0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: 'Success',
        text: 'Message sent successfully!',
        icon: 'success',
      });
      form.reset(); 
      setResult("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact">
      <section>
        <form onSubmit={onSubmit}>
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            name="message"
            placeholder="Your Message"
            required
          />
          <motion.button type="submit">
            Send
          </motion.button>
        </form>
        {result && <p>{result}</p>}
      </section>
      <aside>
        <img src={contact} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
