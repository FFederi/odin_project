import Risotto from "./risotto.jpg";
import Pasta from "./pasta.jpeg";

let navigationPanel = {
  tabs: ["home", "menu", "contact"],
};

let homeContent = {
  description: [
    "very basic restaurant. offering a wide variety of food. rice, pasta, beans, you name it we got it.",
  ],
  hours: ["open all day long, all year long"],
  location: ["down the road on the right"],
};

let menuContent = {
  risotto: { risottoImg: Risotto, risottoDescription: "apple risotto" },

  pasta: { pastaImg: Pasta, pastaDescription: "apple pasta" },
};

let contactContent = {
  mail: ["basic@somewhere.com"],
  number: ["0000000001"],
};

export { navigationPanel, homeContent, menuContent, contactContent };
