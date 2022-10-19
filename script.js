let paragraphe = document.querySelector(".paragraphe .text");
let titre = document.querySelector(".titre");
let btn1 = document.querySelector(".uno");
let btn2 = document.querySelector(".dos");
let btn3 = document.querySelector(".tres");
let StartButton = "Commencer l'histoire";
let keyFounded = false;

let chaptersObj = {
  prologue: {
    subtitle: "Introduction",
    text:
      "Vous incarnez une jeune adulte sous le nom de Bonnie Parker," +
      "elle vie avec son oncle Arthur. Étant témoin du meurtre de ses parents," +
      "elle décidèrent de poursuivre ce que son père avait commencé," +
      "la recherche d'un homme planifiant de causer la mort de millions de personnes à travers le pays" +
      "Elle devena agente pour une organisation, elle était très gafeuse mais faisait toujours du bon travail." +
      "Jusqu'à ce qu'on lui donne une mission qui pourrait tout changer, une mission qui aurait pour but de sauver plusieurs." +
      "La mission en question est de localiser Professeur Crâne, l'homme étant tenu coupable de la mort de ses parents, et de prendre la décision de le tuer ou servir la justice",
    img: "assets/personnageprincipalle.jpg",
    option: [
      {
        text: StartButton,
        action: "goToChapter('chapitre1')",
      },
    ],
  },
  chapitre1: {
    subtitle: "Le début de l'histoire",
    text: "Il est 7h30, et vous êtes confortable dans votre lit douillet. Votre alarme sonne, que faites-vous?",
    img: "assets/cadran.jpg",
    option: [
      {
        text: "Commander de la pizza",
        action: "goToChapter('chapitre2')",
      },
      {
        text: "Retourner se coucher",
        action: "goToChapter('chapitre2')",
      },
      {
        text: "Décide de faire la mission tout de suite",
        action: "goToChapter('badchoice1')",
      },
    ],
  },
  badchoice1: {
    text: "Vous décidez de faire la mission mais malheureusement, vous tombez en bas des escaliers de votre appartment et vous vous retrouviez paralysé.",
    img: "assets/gameover1.jpg",
  },

  chapitre2: {
    subtitle: "L'appel",
    text:
      "Vous recevez un appel, votre mission est de trouver professeur Crâne," +
      "et l'arrêter ou de le tuer, à vous de faire cette décision." +
      "Maintenant il faut que vous vous trouver un moyen de transport, que décidez-vous de prendre?",
    img: "assets/phonecall.jpg",
    option: [
      {
        text: "Prendre votre voiture",
        action: "goToChapter('badchoice2')",
      },
      {
        text: "Se rendre à pieds",
        action: "goToChapter('chapitre3')",
      },
      {
        text: "Se rendre en vélo",
        action: "goToChapter('altpath1')",
      },
    ],
  },
  altpath1: {
    text: "Vous prenez votre vélo mais vous n'êtes pas sur de vouloir mettre un casque de protection, voulez-vous le mettre?",
    option: [
      {
        text: "Oui",
        action: "goToChapter('badchoice3')",
      },
      {
        text: "Non",
        action: "goToChapter('chapitre3')",
      },
    ],
  },

  badchoice2: {
    text: "Vous vous décidiez de vous y rendre en voiture, mais vous vous faites arrêter par la police pour excès de vitesse",
    img: "assets/arrest.jpg ",
  },

  badchoice3: {
    text: "En mettant votre casque, vous vous rendez compte qu'il était trop gros et donc vous cache la vue. Donc vous vous enfargez sur un homme armé, et il vous tire dessus",
    img: "assets/falling.jpg",
  },

  chapitre3: {
    subtitle: "La mission",
    text: "Vous arrivez à destination. Maintenant, vous prenez connaissance aux informations de la mission et du suspect en question. Que faites-vous?",
    img: "assets/car.jpg",
    option: [
      {
        text: "Retourner chez vous",
        action: "goToChapter('badchoice4')",
      },
      {
        text: "Appeller votre partenaire",
        action: "goToChapter('badchoice5')",
      },
      {
        text: "Aller directement chez votre partenaire",
        action: "goToChapter('chapitre4')",
      },
      {
        text: "Commencer la mission toute seule",
        action: "goToChapter('ch4altpath')",
      },
    ],
  },

  badchoice4: {
    text:
      "Vous apprenez aux nouvelles que Professeur Crâne a mis son plan en exécution." +
      " Un grand nombre de personnes ont dû payer le prix. Dans le plus grand des remords de n'avoir rien fait, vous vous tuer.",
  },

  badchoice5: {
    text:
      "Quelqu'un a tracé votre numéro lorsque vous avez appellé" +
      "votre partenaire et a trouvé votre numéro d'appartement et vous kidnappe",
  },

  chapitre4: {
    subtitle: "Le commencement de la mission",
    text: "Maintenant que vous et votre partenaire sont réuni, que faites-vous?",
    img: "assets/partner.jpg",
    option: [
      {
        text: "Lui dire bonjour",
        action: "goToChapter('goback')",
      },
      {
        text: "Faire à manger",
        action: "goToChapter('badchoice6')",
      },
      {
        text: "L'inviter à prendre un café",
        action: "goToChapter('chapitre5')",
      },
    ],
  },

  goback: {
    text: "Billy n'a pas le temps de clavarder il vous dit de revenir plus tard. ",
    action: "goToChapter('chapitre4')",
  },

  badchoice6: {
    text: "Vous faites du spaghetti à votre partenaire mais s'étouffe et meurt",
    img: "assets/rip.jpg",
  },

  ch4altpath: {
    subtitle: "Commencer mission toute seule",
    text: "Vous commencer à regrouper des informations sur votre suspect Professeur Crâne mais vous ne savez pas où rechercher les sources nécessaires",
    img: "assets/computer.jpg",
    option: [
      {
        text: "Vous ne trouver rien à ce sujet",
        action: "goToChapter('ch4altpath')",
      },
      {
        text: "Vous cousultez le profile Facebook du professeur Crâne, mais vous vous appercevez qu'il vous a bloqué",
        action: "goToChapter('ch4altpath')",
      },
    ],
  },

  chapitre5: {
    subtitle: "",
    text: "Après avoir pris un bon café, vous et votre partenaire discutiez d'un plan pour infiltrer la forteresse du Professeur Crâne. Après la discussion vous vous dirigiez vers sa forteresse.",
    img: "assets/fortress.jpg",
    option: [
      {
        text: "Devant",
        action: "goToChapter('badchoice7')",
      },
      {
        text: "Derrière",
        action: "goToChapter('chapitre6')",
      },
    ],
  },

  chapitre6: {
    subtitle: "Le choix final",
    text: "Vous trouvez enfin professeur Crâne, sans ses hommes, sans ses armes, sans rien. Il est sans défense. Vous pointer votre revolver contre son front. Que faites-vous?",
    img: "",
    option: [
      {
        text: "Tuer",
        action: "goToChapter('badending')",
      },
      {
        text: "Épargner",
        action: "goToChapter('goodending')",
      },
    ],
  },

  badending: {
    text: "Vous tuer Professeur Crâne pendant qu'il ricanait, et vous sauvez l'humanité. Mais votre partenaire prise en otage meurt aussi en même temps sans vous en aperçevoir.",
  },

  goodending: {
    text: "Vous épargnez Professeur Crâne et mettre son plan à terme, et l'emporter à la justice. Félicitations!!!",
  },
};

//Fonction permetant de naviguer à travers les chapitre via la Console Log
function goToChapter(chapterName) {
  console.log(chaptersObj[chapterName].subtitle);
  console.log(chaptersObj[chapterName].text);
  console.log(
    (chaptersObj[chapterName].img.innerHTML =
      "<img src=" + chaptersObj[chapterName].img + "/>")
  );
  console.log(chaptersObj[chapterName].option);
  for (let i = 0; i < chaptersObj[chapterName].option.length; i++) {
    console.log(chaptersObj[chapterName].option[i]);
  }
  document.querySelector(".titre .text").innerText =
    chaptersObj[chapterName].subtitle;
  document.querySelector(".paragraphe .text").innerText =
    chaptersObj[chapterName].text;
  document.getElementsByTagName("img").innerText = chaptersObj[
    chapterName
  ].img.innerHTML = "<img src=" + chaptersObj[chapterName].img + "/>";
  //Commandes pour le bouton 1
  btn1.innerText = chaptersObj[chapterName].option[0].text;
  btn1.onclick = chaptersObj[chapterName].option.action;
  //Commandes pour le bouton 2
  btn2.innerText  = chaptersObj[chapterName].option[1].text;
  btn2.onclick = chaptersObj[chapterName].option.action;
  //Commandes pour le bouton 3
  btn3.innerText = chaptersObj[chapterName].option[2].text;
  btn3.onclick = chaptersObj[chapterName].option.action;
  
}

function progress() {
  keyFounded = true;
}

function impact() {}
