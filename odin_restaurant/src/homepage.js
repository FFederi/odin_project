import { addListenersToButtons } from "./index.js";

function clearPage(parent) {
  parent.textContent = "";
  return true;
}

function makeNavigationPanel(parent, btnNames) {
  let panel = document.createElement("div");
  panel.classList.add("panel");

  btnNames.forEach((tab) => {
    let newTab = document.createElement("btn");
    newTab.textContent = tab;
    newTab.setAttribute("id", tab);
    panel.appendChild(newTab);
  });
  parent.appendChild(panel);
  let title = makeTextBlock("title", ["basic restaurant"], "text");
  parent.appendChild(title);

  addListenersToButtons(btnNames);
}

function isValidUrl(urlString) {
  var urlPattern = new RegExp(/\.(png|svg|jpg|jpeg|gif)$/i); // validate fragment locator
  return !!urlPattern.test(urlString);
}

function makeTextBlock(classNames, content, blockType) {
  var block = document.createElement("div");

  for (let key in content) {
    if (isValidUrl(content[key])) {
      var imageBlock = document.createElement("img");
      imageBlock.src = content[key];
      block.appendChild(imageBlock);
    } else {
      var textBlock = document.createElement("div");
      textBlock.textContent = content[key];
      block.appendChild(textBlock);
    }
  }

  block.classList.add(classNames);
  return block;
}

function makeMainContent(parent, content) {
  for (const cont in content) {
    let block = makeTextBlock("content", content[cont]);
    parent.appendChild(block);
  }
}

function loadMain(btnNames, parent, content) {
  clearPage(parent);

  makeNavigationPanel(parent, btnNames);
  makeMainContent(parent, content);
}

export { loadMain };
