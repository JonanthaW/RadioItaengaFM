/* When User wants to play the sound*/
document.querySelector("#play").addEventListener("click", ()=> {
  document.querySelector("#play").style.display = "none";
  document.querySelector("#pause").style.display = "flex";
  document.querySelector("#stream").play();
})

/* When User wants to pause the sound*/
document.querySelector("#pause").addEventListener("click", ()=> {
  document.querySelector("#pause").style.display = "none";
  document.querySelector("#play").style.display = "flex";
  document.querySelector("#stream").pause();
})

document.querySelector("#volume-control").addEventListener("change", function(e) {
  document.querySelector("#stream").volume = e.currentTarget.value / 100;
})
