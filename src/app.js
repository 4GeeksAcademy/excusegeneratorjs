import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];
  const generateExcuse = () =>
    `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(
      when
    )}`;

  document.querySelector("#excuse").innerHTML = generateExcuse();
};
