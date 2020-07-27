document.querySelector(".play button").addEventListener("click", () => {
  document.querySelector(".play").classList.add("disapear");
  document.querySelector(".game").classList.add("player");
  document.querySelector(".game + section + section").classList.add("player");
});

const choices = document.querySelectorAll(".game img");

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", () => {
    const player = choices[i].getAttribute("src").split(".")[0];

    // OPACITY = 0  POUR LES 2 IMAGES NON SELECTIONNEES //

    console.log(document.getElementById(!player));
    document.getElementById(player).classList.add("selected");
    const robot = choices[Math.floor(Math.random() * choices.length)]
      .getAttribute("src")
      .split(".")[0];

    document.querySelector(".robot").setAttribute("src", `${robot}.jpg`);
    document.querySelector(".robot").classList.add("appear");

    let result = "";

    if (player === robot) {
      result = "Equality";
    } else if (
      (player === "pierre" && robot == "ciseaux") ||
      (player === "feuille" && robot === "pierre") ||
      (player === "ciseaux" && robot === "feuille")
    ) {
      result = "You Win !";
    } else {
      result = "You Loose !";
    }

    document.querySelector(".result").classList.add("appear");
    document.querySelector(".result").innerHTML = result;
  });
}
