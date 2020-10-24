import "./header.css";
import { createElement } from "../utils/elements";
import createMainButton from "./MainButton";

function Header() {
  const mainButton = createMainButton();

  const navigation = createElement("nav", {
    className: "nav",
    innerText: "I'm a Navigationbar!!",
  });

  const header = createElement("div", {
    className: "header",
    children: [navigation, mainButton],
  });

  return header;
}

export default Header;

// import "./header.css";
// import { createElement } from "../utils/elements";

// function Header() {
//   const header = createElement("header", {
//     className: "header",
//     innerText: "I'm a Header",
//     children: [],
//   });
//   return header;
// }

// export default Header;
