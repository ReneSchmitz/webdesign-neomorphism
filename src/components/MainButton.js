import "./mainbutton.css";
import { createElement } from "../utils/elements";

function createMainButton() {
  onclick = function () {
    alert("You clicked me!");
  };
  return createElement("button", {
    className: "main__button",
    innerText: "Main Button",
  });
}

export default createMainButton;
