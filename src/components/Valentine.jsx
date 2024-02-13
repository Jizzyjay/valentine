import React, { useState } from "react";

const Valentine = () => {
  const [x, setX] = useState(52);
  const [y, setY] = useState(55);
  const [showModal, setShowModal] = useState(false);

  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
  }
  
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 200) {
      heartArr[0].remove();
    }
  }, 100);

  /* code for moving button */
  const popUp = () => {
    alert(
      "AH look at you, you caught the button. \nLucky button catchers win one free date on February 14th with an eligible bachelor who will be in touch with you to follow up!"
    );
  };

  function mouseOver() {
    setX(Math.random() * 100);
    setY(Math.random() * 100);
  }

  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };

  var yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  };

  const clickedYes = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 100000);
  };

  return (
    <div>
      {!showModal && (
        <div>
          <p className="pre-valentine">Will you be my</p>
          <p className="valentine">Valentine</p>
          <button style={yesStyle} type="submit" onClick={clickedYes}>
            Yes
          </button>
          <button onMouseOver={mouseOver} style={noStyle} onClick={popUp}>
            No
          </button>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <p>
            As Valentine's Day arrives, I find myself reflecting on the joy and
            warmth you brought into my life. I want to express the depth of my
            feelings for you in words that barely scratch the surface of what I
            truly feel for you.
            <p>
              Your presence in my life is like a gentle melody that soothes my
              soul and a burst of colors that brightens even on the grayest
              days. Your laughter is the sweetest symphony, and your smile is a
              beacon of light that guides me through any darkness. It's not just
              today, but every day that I cherish every moments we've shared and
              the connections we've built.
            </p>
            <p>
              {" "}
              Your kindness, intelligence, and your beauty, makes me fall for
              you over and over again. It's a privilege to know you and an honor
              to call you mine. On this day of love, I want to celebrate you –
              your uniqueness, your dreams, and the beautiful soul that you are.
              My love for you knows no bounds, and I look forward to creating
              countless more memories together.
            </p>
            <p>
              Wishing you a Valentine's Day filled with love, joy, and the
              knowledge that you are cherished beyond measure. With all my love.
            </p>
          </p>
        </div>
      )}
    </div>
  );
};

export default Valentine;
