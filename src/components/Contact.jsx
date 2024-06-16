import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div name="contact" className={`${styles.container} ${styles['bg-gradient-to-b']} ${styles['from-black']} ${styles['to-gray-800']} p-4 text-white`}>
      <div className={`${styles.gradientOverlay}`}></div>
      <div className={`${styles.content} flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full`}>
        <div className={`${styles.heading}`}>
          <p className={`${styles.headingText}`}>
            Contact
          </p>
          <p className={`${styles.subText}`}>Submit the form below to get in touch with me</p>
        </div>

        <div className={`${styles.formContainer}`}>
          <form action="https://getform.io/f/pamqnwqa" method="POST" className={`${styles.form}`}>
            <input type="text" name="name" placeholder="Enter your name" className={`${styles.input}`} />
            <input type="text" name="email" placeholder="Enter your email" className={`${styles.input} my-4`} />
            <textarea name="message" placeholder="Enter your message" rows="10" className={`${styles.textarea}`}></textarea>
            <button className={`${styles.button}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
