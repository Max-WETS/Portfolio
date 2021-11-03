import React from "react";

function Contact({ contactElement }) {
  return (
    <article id="contact">
      <div className="contact-container" ref={contactElement}>
        <p>04. What's Next?</p>
        <p>Get In Touch</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum
          praesentium suscipit maiores veritatis nulla. Possimus esse sunt sequi
          aliquid.
        </p>
        <a href="mailto:wetsmaxime@gmail.com">
          <div>Say Hello</div>
        </a>
      </div>
    </article>
  );
}

export default Contact;
