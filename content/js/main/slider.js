function slider() {

  document.querySelector(`.slider${Math.floor(Math.random()*3 + 1)}`).style.display = "flex";

  document.querySelector(".slider1 .next").addEventListener("click", ()=>{
    document.querySelector(".slider2").style.display = "flex";
    document.querySelector(".slider1").style.display = "none";
  })
  document.querySelector(".slider1 .prev").addEventListener("click", ()=>{
    document.querySelector(".slider3").style.display = "flex";
    document.querySelector(".slider1").style.display = "none";
  })
  document.querySelector(".slider2 .next").addEventListener("click", ()=>{
    document.querySelector(".slider3").style.display = "flex";
    document.querySelector(".slider2").style.display = "none";
  })
  document.querySelector(".slider2 .prev").addEventListener("click", ()=>{
    document.querySelector(".slider1").style.display = "flex";
    document.querySelector(".slider2").style.display = "none";
  })
  document.querySelector(".slider3 .next").addEventListener("click", ()=>{
    document.querySelector(".slider1").style.display = "flex";
    document.querySelector(".slider3").style.display = "none";
  })
  document.querySelector(".slider3 .prev").addEventListener("click", ()=>{
    document.querySelector(".slider2").style.display = "flex";
    document.querySelector(".slider3").style.display = "none";
  })
}
