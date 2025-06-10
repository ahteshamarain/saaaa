import React from "react";

function Datec() {
  const fname = "AhteshamArain";
  let current = new Date();
  const hours = current.getHours();
  const cssStyle = {};
  let greet = "";
  const randomNum = Math.random(); // fixed typo: radom → random

  if (hours >= 1 && hours < 12) {
    greet = "Good Morning";
    cssStyle.color = "red";
    document.body.style.backgroundColor = "lightyellow";
  } else if (hours >= 12 && hours < 19) {
    greet = "Good Afternoon";
    cssStyle.color = "blue";
    document.body.style.backgroundColor = "lightblue";
  } else {
    greet = "Good Evening";
    cssStyle.color = "green";
    document.body.style.backgroundColor = "lightgray";
  }

  return (
    <h1 style={cssStyle}>
      Hello {fname}, {greet}!
      <br />
      Hour: {hours}
      <br />
      Random: {randomNum.toFixed(2)}
    </h1>
  );
}

export default Datec;
