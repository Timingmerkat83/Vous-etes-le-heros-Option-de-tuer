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
    img: "assets/img/personnageprincipalle.jpg",
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
    img: "assets/img/cadran.jpg",
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
    subtitle: "Tombé de l'escalier... Ouch!!",
    text: "Vous décidez de faire la mission mais malheureusement, vous tombez en bas des escaliers de votre appartment et vous vous retrouviez paralysé.",
    img: "assets/img/gameover1.png",
    option: [
      {
        text: "Recommencer l'histoire",
        action: "goToChapter('prologue')",
      },
    ],
  },

  chapitre2: {
    subtitle: "L'appel",
    text:
      "Vous recevez un appel, votre mission est de trouver professeur Crâne," +
      "et l'arrêter ou de le tuer, à vous de faire cette décision." +
      "Maintenant il faut que vous vous trouver un moyen de transport, que décidez-vous de prendre?",
    img: "assets/img/phonecall.jpg",
    video: "assets/videos/phonecall.mp4",
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
    subtitle: "L'heure de rouler!!",
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
    subtitle: "Vous conduisez trop vite!!",
    text: "Vous vous décidiez de vous y rendre en voiture, mais vous vous faites arrêter par la police pour excès de vitesse",
    img: "assets/img/arrest.jpg ",
    option: [
      {
        text: "Recommencer l'histoire",
        action: "goToChapter('prologue')",
      },
    ],
  },

  badchoice3: {
    subtitle: "Il aurait fallu un plus petit casque",
    text: "En mettant votre casque, vous vous rendez compte qu'il était trop gros et donc vous cache la vue. Donc vous vous enfargez sur un homme armé, et il vous tire dessus",
    img: "assets/img/falling.jpg",
    option: [
      {
        text: "Recommencer l'histoire",
        action: "goToChapter('prologue')",
      },
    ],
  },

  chapitre3: {
    subtitle: "La mission",
    text: "Vous arrivez à destination. Maintenant, vous prenez connaissance aux informations de la mission et du suspect en question. Que faites-vous?",
    img: "assets/img/car.jpg",
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
    subtitle: "Perdu!!",
    text:
      "Vous apprenez aux nouvelles que Professeur Crâne a mis son plan en exécution." +
      " Un grand nombre de personnes ont dû payer le prix. Dans le plus grand des remords de n'avoir rien fait, vous vous tuer.",
    option: [
      {
        text: "Recommencer l'histoire",
        action: "goToChapter('prologue')",
      },
    ],
  },

  badchoice5: {
    subtitle: "Kidnappé!",
    text:
      "Quelqu'un a tracé votre numéro lorsque vous avez appellé" +
      "votre partenaire et a trouvé votre numéro d'appartement et vous kidnappe",
    option: [
      {
        text: "Recommencer l'histoire",
        action: "goToChapter('prologue')",
      },
    ],
  },

  chapitre4: {
    subtitle: "Le commencement de la mission",
    text: "Maintenant que vous et votre partenaire sont réuni, que faites-vous?",
    img: "assets/img/partner.jpg",
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
    subtitle: "Votre partenaire s'étouffe!!",
    text: "Vous faites du spaghetti à votre partenaire mais s'étouffe et meurt",
    img: "assets/img/rip.jpg",
    option: [
      {
        text: "Recommencer l'histoire",
        action: "goToChapter('prologue')",
      },
    ],
  },

  ch4altpath: {
    subtitle: "Commencer mission toute seule",
    text: "Vous commencer à regrouper des informations sur votre suspect Professeur Crâne mais vous ne savez pas où rechercher les sources nécessaires",
    img: "assets/img/computer.jpg",
    option: [
      {
        text: "Wikipedia",
        action: "goToChapter('chapitre6')",
      },
      {
        text: "Profile Twitter",
        action: "goToChapter('ch4tryagain')",
      },
      {
        text: "Profile Facebook",
        action: "changeStateKeyFounded()",
      },
    ],
  },

  ch4tryagain: {
    subtitle: "Professeur Crâne vous as bloqué!!",
    text:
      "En recherchant de l'information sur Professeur Crâne sur son profile Twitter," +
      "vous vous rendez compte qu'il vous a bloqué en raison d'harcèlement et de spam," +
      "car vous étiez frustré qu'il ait tué vos parents!",
    img: "assets/img/blocked.png",
    option: [
      {
        text: "Refaire une nouvelle recherche",
        action: "goToChapter('ch4altpath')",
      },
    ],
  },

  ch4tryagain_key: {
    subtitle: "Professeur Crâne envoie ses hommes vous kidnappé! Cependant...",
    text:
      "Vous avez accès à la page Facebook du Professeur Crâne. Sauf qu'il détecte votre présence sur son profile" +
      "et décide d'envoyer ses hommes vous kidnapper." +
      "Sur l'épaule du bandit, vous attrapez une clé attaché à son pantalon!",
    img: "",
    option: [
      {
        text: "Recommencer",
        action: "goToChapter('prologue')",
      },
    ],
  },

  chapitre5: {
    subtitle: "C'était bon, en route maintenant!",
    text: "Après avoir pris un bon café, vous et votre partenaire discutiez d'un plan pour infiltrer la forteresse du Professeur Crâne. Après la discussion vous vous dirigiez vers sa forteresse.",
    img: "assets/img/fortress.jpg",
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
  console.log(chaptersObj[chapterName].option[1]);
  console.log(chaptersObj[chapterName].img);

  //Éléments querySelector du sypnosis.html
  let subDisplay = document.querySelector(".titre-chapitre");
  let textDisplay = document.querySelector(".chapter-text");
  //Contenu du tableau chaptersObj
  subDisplay.innerText = chaptersObj[chapterName].subtitle;
  textDisplay.innerText = chaptersObj[chapterName].text;

  let media;
  media = `<img src="${chaptersObj[chapterName].img}" alt="" class="chapter-img">`;

  let chapterImgContainer = document.querySelector(".media-container");
  chapterImgContainer.innerHTML = media;

  /**Options PS3 */
  let optionsArr = chaptersObj[chapterName].option;
  let buttonPanel = document.querySelector(".btn-panel");
  let buttonTag;
  let optionText;
  let optionAction;

  for (var i = 0; i < optionsArr.length; i++) {
    optionText = optionsArr[i].text;
    optionAction = optionsArr[i].action;
    buttonTag = `<button id="btn" onclick="${optionAction}">${optionText}</button>`;
    if (i == 0) {
      buttonPanel.innerHTML = buttonTag;
    } else {
      buttonPanel.insertAdjacentHTML("beforeend", buttonTag);
    }
  }
  //fonction vidéo
  let myVideo = chaptersObj[chapterName].video;
  function playVideo() {
    if (chaptersObj[chapterName].video) {
      console.log(
        (mediaTag.innerHTML =
          "<video>" + "<source src= " + myVideo + "/>" + "</video>")
      );
      document.querySelector(".media").innerHTML =
        "<video>" + "<source src= " + myVideo + "/>" + "</video>";
    }
  }
  const notif = new Audio("assets/audio/notification.mp3");
  notif.play();

  const gameOver = new Audio("assets/audio/gameover.mp3");

  let badChapters = [
    chaptersObj[badchoice1],
    chaptersObj[badchoice2],
    chaptersObj[badchoice3],
    chaptersObj[badchoice4],
    chaptersObj[badchoice5],
    chaptersObj[badchoice6],
  ];
}

goToChapter("prologue");

//Je vais être honnête je n'ai AUCUNE idée de comment faire cette partie là. Je suis débutant en fonctions javascript et j'y comprends rien
let keyFound = false;

let changeStateKeyFounded = function () {
  keyFound = true;
  goToChapter("ch4tryagain_key");
};

function impact() {}

//PS4.2 LocalStorage

let gameProgress = localStorage.getItem("chaptersObj");
