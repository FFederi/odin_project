import {
  navigationPanel,
  homeContent,
  menuContent,
  contactContent,
} from "./config";
import { loadMain } from "./homepage.js";
import "./style.css";

let btnNames = navigationPanel.tabs;
let content = document.getElementById("content");

loadMain(btnNames, content, homeContent);

function addListenersToButtons(btnNames) {
  btnNames.forEach((btnName) => {
    var btn = document.getElementById(btnName);
    btn.addEventListener("click", () => {
      if (btn.id == "home") {
        loadMain(btnNames, content, homeContent);
      } else if (btn.id == "menu") {
        loadMain(btnNames, content, menuContent);
      } else {
        loadMain(btnNames, content, contactContent);
      }
    });
  });
}

addListenersToButtons(btnNames);

export { addListenersToButtons };
