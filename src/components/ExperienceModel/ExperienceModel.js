import React, { useState, useEffect } from "react";
import "./ExperienceModel.css";

function ExperienceModel({ model, image }) {
  const [background, setBackground] = useState(false);

  function handleProp() {
    if (model === "s" || model === "x") {
      setBackground(true);
      console.log(background);
    } else if (model === "3" || model === "y") {
      setBackground(false);
    }
  }

  useEffect(() => {
    handleProp();
  }, []);

  return (
    <section
      className="experience-container"
      style={{ backgroundColor: background ? "white" : "black" }}
    >
      <span className="experience-content">
        <div className="experience-text" style={{ lineHeight: "5em" }}>
          <span
            style={{ fontSize: "40px", color: background ? "black" : "white" }}
          >
            Experience Model{" "}
            <span style={{ textTransform: "uppercase" }}>{model}</span>
          </span>
          <span>
            <a className={background ? "buttonTrans" : "buttonBlack-exp"}>
              Order Now
            </a>
            <a className={background ? "buttonTrans" : "whiteBorder"}>
              Compare
            </a>
          </span>
        </div>
        <span className="experience-image">
          <img
            src={image}
            style={{ width: "90%", height: background ? "50%" : "26%" }}
          />
        </span>
      </span>
    </section>
  );
}

export default ExperienceModel;
