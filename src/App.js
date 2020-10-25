import "./app.css";
import Header from "./components/Header";
import createSecButton from "./components/SecButton";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const card = createElement("span", {
    className: "card",
    innerText: "I'm a card",
  });
  const secButton = createSecButton();

  const container = createElement("div", {
    className: "main_container",
    children: [header, card, secButton],
  });
  return container;
}

export default App;
