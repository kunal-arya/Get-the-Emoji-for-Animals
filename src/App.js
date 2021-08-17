import "./styles.css";
import React, { useState } from "react";

var animalDictionary1 = {
  monkey: "🐒",
  gorilla: "🦍",
  orangutan: "🦧",
  dog: "🐕",
  poodle: "🐩",
  wolf: "🐺",
  fox: "🦊",
  raccoon: "🦝",
  cat: "🐈",
  lion: "🦁",
  tiger: "🐅",
  leopard: "🐆",
  horse: "🐎",
  unicorn: "🦄",
  zebra: "🦓",
  deer: "🦌",
  ox: "🐂",
  "water buffalo": "🐃",
  cow: "🐄",
  pig: "🐖",
  boar: "🐗",
  goat: "🐐",
  camel: "🐪",
  llama: "🦙",
  giraffe: "🦒",
  elephant: "🐘",
  rhinoceros: "🦏",
  hippopotamus: "🦛",
  mouse: "🐁",
  rat: "🐀",
  hamster: "🐹",
  rabbit: "🐇"
};

var animalDictionary2 = {
  "🐒": "monkey",
  "🦍": "gorilla",
  "🦧": "orangutan",
  "🐕": "dog",
  "🐩": "poodle",
  "🐺": "wolf",
  "🦊": "fox",
  "🦝": "raccoon",
  "🐈": "cat",
  "🦁": "lion",
  "🐅": "tiger",
  "🐆": "leopard",
  "🐎": "horse",
  "🦄": "unicorn",
  "🦓": "zebra",
  "🦌": "deer",
  "🐂": "ox",
  "🐃": "water buffalo",
  "🐄": "cow",
  "🐖": "pig",
  "🐗": "boar",
  "🐐": "goat",
  "🐪": "camel",
  "🦙": "llama",
  "🦒": "giraffe",
  "🐘": "elephant",
  "🦏": "rhinoceros",
  "🦛": "hippopotamus",
  "🐁": "mouse",
  "🐀": "rat",
  "🐹": "hamster",
  "🐇": "rabbit"
};

var emojisWeKnow = Object.keys(animalDictionary2);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var emoji = animalDictionary1[userInput];
    setEmoji(emoji);
  }

  function emojiCLickHandler(animal) {
    var meaning = animalDictionary2[animal];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 id="mainHeading">Get the Emoji for Animals</h1>
      <input onChange={onChangeHandler} placeholder="Type Animal name" />
      <h2> Emoji - {emoji}</h2>

      <hr></hr>
      <h3 id="h3heading">Emoji's we have</h3>
      <h2>
        Meaning - <span id="emojiMeaning">{meaning}</span>
      </h2>
      <span>
        {emojisWeKnow.map(function (animal) {
          return (
            <span
              onClick={() => emojiCLickHandler(animal)}
              style={{ padding: "1rem", cursor: "pointer", fontSize: "1.5rem" }}
            >
              {animal}
            </span>
          );
        })}
      </span>
    </div>
  );
}
