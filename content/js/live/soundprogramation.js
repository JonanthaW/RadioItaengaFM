function getProgramation() {
  var date = new Date();
  date.setHours(date.getHours());

  var days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta" , "Sabado"];

  if (days[date.getDay()] == "Segunda" || days[date.getDay()] == "Terça" || days[date.getDay()] == "Quarta" || days[date.getDay()] == "Quinta" || days[date.getDay()] == "Sexta") {
    if (date.getHours() >= 5 && date.getHours() <= 6 ) {
      document.querySelector(".streaming h2").innerText = "FORRÓ PARA O CAMPO - JULIO FILHO";
    }
    else if (date.getHours() >= 6 && date.getHours() <= 7 ) {
      document.querySelector(".streaming h2").innerText = "PROGRAMAS EVANGÉLICOS - IGREJA (EQUIPES)";
    }
    else if (date.getHours() >= 7 && date.getHours() <= 8 ) {
      document.querySelector(".streaming h2").innerText = "MENSAGENS DE AUTOESTIMA - TRANSMISSÃO";
    }
    else if (date.getHours() >= 8 && date.getHours() <= 12 ) {
      document.querySelector(".streaming h2").innerText = "SHOW DA MANHÃ- LUANNA SILVA E EDSON SOUZA";
    }
    else if (date.getHours() >= 12 && date.getHours() <= 13 ) {
      document.querySelector(".streaming h2").innerText = "MICROFONE ABERTO - ISRAEL SILVA";
    }
    else if (date.getHours() >= 13 && date.getHours() <= 14 ) {
      document.querySelector(".streaming h2").innerText = "TARDE SUPER BREGA - MANOEL ANTONIO";
    }
    else if (date.getHours() >= 14 && date.getHours() <= 16 ) {
      document.querySelector(".streaming h2").innerText = "CULTURA E CIDADANIA - ESTÊNIO FERREIRA";
    }
    else if (date.getHours() >= 16 && date.getHours() <= 17 ) {
      document.querySelector(".streaming h2").innerText = "RECORDAÇÃO E SAUDADE - LISANDRA";
    }
    else if (date.getHours() >= 17 && date.getHours() <= 18 ) {
      document.querySelector(".streaming h2").innerText = "FORTES NA FÉ - IGREJA (EQUIPES)";
    }
    else if (date.getHours() >= 18 && date.getHours() <= 19 ) {
      document.querySelector(".streaming h2").innerText = "FORROZÃO DA 98 - AKASSYA MENDONÇA";
    }
    else if (date.getHours() >= 19 && date.getHours() <= 20 ) {
      document.querySelector(".streaming h2").innerText = "VOZ DO BRASIL - RETRANSMISSÃO";
    }
    else if (date.getHours() >= 20 && date.getHours() <= 21 ) {
      document.querySelector(".streaming h2").innerText = "A NOITE É NOSSA - JULIO FILHO";
    }
    else if (date.getHours() >= 21 && date.getHours() < 22 ) {
      document.querySelector(".streaming h2").innerText = "PROGRAMAS EVANGÉLICO - IGREJA (EQUIPES)";
    }
    else {
      document.querySelector(".streaming h2").innerText = "Estamos Offline :(";
    }
  }

  else if (days[date.getDay()] == "Sabado") {
    if (date.getHours() >= 5 && date.getHours() <= 7 ) {
      document.querySelector(".streaming h2").innerText = "FORRÓ PARA O CAMPO - JULIO FILHO";
    }
    else if (date.getHours() >= 6 && date.getHours() <= 7 ) {
      document.querySelector(".streaming h2").innerText = "RESUMO DE NOTÍCIAS - DIACONO OTACÍLIO";
    }
    else if (date.getHours() >= 7 && date.getHours() <= 8 ) {
      document.querySelector(".streaming h2").innerText = "CRESCENDO E APRENDENDO - MANOEL";
    }
    else if (date.getHours() >= 8 && date.getHours() <= 9 ) {
      document.querySelector(".streaming h2").innerText = "COMUNICA JOVEM - PALLOMA LIMA";
    }
    else if (date.getHours() >= 9 && date.getHours() <= 10 ) {
      document.querySelector(".streaming h2").innerText = "PROGRAMA EVANGÉLICO - IGREJA (EQUIPES)";
    }
    else if (date.getHours() >= 10 && date.getHours() <= 11 ) {
      document.querySelector(".streaming h2").innerText = "ITAENGA ESPORTES - VALCILEIDE SILVA";
    }
    else if (date.getHours() >= 12 && date.getHours() <= 13 ) {
      document.querySelector(".streaming h2").innerText = "ESPECIAL COM O REI ROBERTO CARLOS - JULIO FILHO";
    }
    else if (date.getHours() >= 13 && date.getHours() <= 14 ) {
      document.querySelector(".streaming h2").innerText = "ENCONTROS DO MPB - VIVIAN";
    }
    else if (date.getHours() >= 14 && date.getHours() <= 16 ) {
      document.querySelector(".streaming h2").innerText = "SABADÃO SERTANEJO - OLAVO HENRIQUE";
    }
    else if (date.getHours() >= 16 && date.getHours() <= 17 ) {
      document.querySelector(".streaming h2").innerText = "PROGRAMA EVANGÉLICO NOVA VIDA - ROBERTO RODRIGUES";
    }
    else if (date.getHours() >= 17 && date.getHours() <= 18 ) {
      document.querySelector(".streaming h2").innerText = "FORTES NA FÉ - IGREJA (EQUIPES)";
    }
    else if (date.getHours() >= 18 && date.getHours() <= 19 ) {
      document.querySelector(".streaming h2").innerText = "IGREJA ADVENTISTA - IGREJA (EQUIPES)";
    }
    else if (date.getHours() >= 19 && date.getHours() <= 20 ) {
      document.querySelector(".streaming h2").innerText = "SANTA MISSA - RETRANSMISSÃO";
    }
    else if (date.getHours() >= 20 && date.getHours() <= 21 ) {
      document.querySelector(".streaming h2").innerText = "AS MAIS TOCADAS DA SEMANA - AUTOMÁTICO";
    }
    else if (date.getHours() >= 21 && date.getHours() < 22 ) {
      document.querySelector(".streaming h2").innerText = "A VOZ DA ASSEMBLÉIA DE DEUS - IGREJA (EQUIPES)";
    }
    else {
      document.querySelector(".streaming h2").innerText = "Estamos Offline :(";
    }
  }

  else if (days[date.getDay()] == "Domingo") {
    if (date.getHours() >= 5 && date.getHours() <= 7 ) {
      document.querySelector(".streaming h2").innerText = "FORRÓ CULTURA E NORDESTE - BORGES";
    }
    else if (date.getHours() >= 7 && date.getHours() <= 8 ) {
      document.querySelector(".streaming h2").innerText = " SANTA MISSA - RETRANSMISSÃO";
    }
    else if (date.getHours() >= 8 && date.getHours() <= 10 ) {
      document.querySelector(".streaming h2").innerText = "ALÔ CRIANÇA - VALDIRA E EQUIPE";
    }
    else if (date.getHours() >= 10 && date.getHours() <= 13 ) {
      document.querySelector(".streaming h2").innerText = "DOMINGO ALEGRE - VÂNIA LIMA E PAULA BATISTA";
    }
    else if (date.getHours() >= 13 && date.getHours() <= 15 ) {
      document.querySelector(".streaming h2").innerText = " ESTAÇÃO BREGA - PALLOMA LIMA";
    }
    else if (date.getHours() >= 15 && date.getHours() <= 17 ) {
      document.querySelector(".streaming h2").innerText = "DOMINGO ESPECIAL - EDMAR BARROS E EQUIPE";
    }
    else if (date.getHours() >= 17 && date.getHours() <= 18 ) {
      document.querySelector(".streaming h2").innerText = "FORTES NA FÉ - IGREJA (EQUIPES)";
    }
    else if (date.getHours() >= 18 && date.getHours() <= 19 ) {
      document.querySelector(".streaming h2").innerText = "FAMILIA EM FOCO - MOISÉS ARAÚJO E EQUIPE";
    }
    else if (date.getHours() >= 19 && date.getHours() <= 20 ) {
      document.querySelector(".streaming h2").innerText = "SANTA MISSA - RETRANSMISSÃO";
    }
    else if (date.getHours() >= 20 && date.getHours() <= 21 ) {
      document.querySelector(".streaming h2").innerText = "AS MAIS TOCADAS DA SEMANA - AUTOMÁTICO";
    }
    else if (date.getHours() >= 21 && date.getHours() < 22 ) {
      document.querySelector(".streaming h2").innerText = "GOSPEL MUSIC - IGREJA (EQUIPES)";
    }
    else {
      document.querySelector(".streaming h2").innerText = "Estamos Offline :(";
    }
  }
}
