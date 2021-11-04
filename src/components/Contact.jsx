import React from "react";

function Contact({ contactElement }) {
  return (
    <article id="contact">
      <div className="contact-container" ref={contactElement}>
        <p>04. What's Next?</p>
        <p>Get In Touch</p>
        <p>
          I'm looking for new opportunities at the moment, so feel free to reach
          out to me if you're interested in my profile and I'll do my best to
          respond as quickly as possible.
        </p>
        <a href="mailto:wetsmaxime@gmail.com">
          <div>Say Hello</div>
        </a>
      </div>
    </article>
  );
}

export default Contact;
