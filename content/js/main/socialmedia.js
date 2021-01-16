function loadSocial() {
  var socialmedia = ["https://pt-br.facebook.com/itaengafm/", "mailto:Radioitaengafm@hotmail.com", "https://www.youtube.com/channel/UCcTFcYn3rlL7FIfR2wLKe-Q/about", "https://twitter.com/itaengafm", "https://soundcloud.com/itaengafm", "https://api.whatsapp.com/send?phone=08189913971"];
  socialmedia.forEach(sendSocial);

  function sendSocial(item, index) {
      document.querySelector(`.footerlinks section:nth-child(4) ul li:nth-child(${index+1}) i`).addEventListener("click", ()=>{
        window.open(item, "_blank", "noopener");
      })
    }
}
