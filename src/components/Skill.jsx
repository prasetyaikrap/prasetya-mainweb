import React from "react";
import { img } from "./Script";

function Skill() {
  return (
    <section id="skill" className="skill-sec">
      <h2>STACK I LEARN AND MASTERED</h2>
      <div className="skill-container">
        <figure>
          <img
            className="main-icon"
            src="data:image/png;base64,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"
            alt=""
          />
          <figcaption>
            <h3>Skill 1</h3>
            <p>Description of Skills</p>
          </figcaption>
          <div className="stack-icon">
            <img
              className="secondary-icon"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </figure>
        <figure>
          <img
            className="main-icon"
            src="data:image/png;base64,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"
            alt=""
          />
          <figcaption>
            <h3>Skill 1</h3>
            <p>Description of Skills</p>
          </figcaption>
          <div className="stack-icon">
            <img
              className="secondary-icon"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </figure>
        <figure>
          <img
            className="main-icon"
            src="data:image/png;base64,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"
            alt=""
          />
          <figcaption>
            <h3>Skill 1</h3>
            <p>Description of Skills</p>
          </figcaption>
          <div className="stack-icon">
            <img
              className="secondary-icon"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Skill;
