import "./secbutton.css";
import { createElement } from "../utils/elements";

function createSecButton() {
  onclick = function () {
    alert("You clicked me!");
  };
  return createElement("button", {
    className: "sec__button",
    innerText: "Secondary Button",
  });
}

export default createSecButton;
