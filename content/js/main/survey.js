function survey() {

  document.querySelector(".surveyquestion form .optioncontent:nth-child(1)").addEventListener("click", ()=>{
    document.querySelector(".surveyquestion form .optioncontent:nth-child(1)").style.backgroundColor = "#007cff";
    document.querySelector(".surveyquestion form .optioncontent:nth-child(1) label").style.color = "white";
    document.querySelector(".surveyquestion form .optioncontent:nth-child(2)").style.backgroundColor = "lightgray";
    document.querySelector(".surveyquestion form .optioncontent:nth-child(2) label").style.color = "black";
  })

  document.querySelector(".surveyquestion form .optioncontent:nth-child(2)").addEventListener("click", ()=>{
    document.querySelector(".surveyquestion form .optioncontent:nth-child(2)").style.backgroundColor = "#007cff";
    document.querySelector(".surveyquestion form .optioncontent:nth-child(2) label").style.color = "white";
    document.querySelector(".surveyquestion form .optioncontent:nth-child(1)").style.backgroundColor = "lightgray";
    document.querySelector(".surveyquestion form .optioncontent:nth-child(1) label").style.color = "black";
  })
}
