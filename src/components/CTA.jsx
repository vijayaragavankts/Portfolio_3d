import React from "react";
import resumePDF from "../assets/resume/Vijayaragavan.pdf";
const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Ready to hire me?
        <br className="sm:block hidden" />
        Delve into my resume and let's get started !
      </p>
      <a href={resumePDF} download="Vijayaragavan.pdf" className="btn">
        Resume
      </a>
    </section>
  );
};

export default CTA;
