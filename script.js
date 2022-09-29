let chaptersObj = {
  prologue: function goToChapter() {
    console.log(prologue.subtitle, "<br>", prologue.text);
  },

  chapitre1: function goToChapter() {
    console.log(chapitre1.subtitle, chapitre1.text);
  },

  badchoice1: function goToChapter(){
    console.log(badchoice1.text);
  },

  chapitre2: function goToChapter() {
    console.log(chapitre2.subtitle, chapitre2.text);
  },
 badchoice2: function goToChapter(){
    console.log(badchoice2.text);
 },
 badchoice3: function goToChapter(){
    console.log(badchoice3.text);
 },

  chapitre3: function goToChapter() {
    console.log(chapitre3.subtitle, chapitre3.text);
  },

  chapitre4: function goToChapter() {
    console.log(chapitre4.subtitle, chapitre4.text);
  },

  badchoice4: function goToChapter() {
    console.log(badchoice4.text);
  },

  badchoice5: function goToChapter() {
    console.log(badchoice5.text);
  }

  ch4altpath: function goToChapter() {
    console.log(ch4path1.subtitle, ch4path1.text);
  },

  chapitre7: function goToChapter() {
    console.log(chapitre7.subtitle, chapitre7.text);
  },

chapitre9 : function goToChapter() {
    console.log(chapitre9.subtitle, chapitre9.text);
},

badending : function goToChapter() {
    console.log(badending.text);
},

goodending : function goToChapter() {
    console.log(goodending.text);
},

};

let prologue = {
  subtitle: "Option de tuer",
  text: "Vous incarnez une jeune adulte sous le nom de Bonnie Parker, elle vie avec son oncle Arthur. Étant témoin du meurtre de ses parents, elle décidèrent de poursuivre ce que son père avait commencé, la recherche d'un homme planifiant de causer la mort de millions de personnes à travers le pays",
};

let chapitre1 = {
  subtitle: "Le début de l'histoire",
  text: "Il est 7h30, et vous êtes confortable dans votre lit douillet. Votre alarme sonne, que faites-vous?",
  option:  [
    let choix1 = {
        text: "Commander de la pizza",
        action: goToChapter("chapitre2"),
    },
    
    let choix2 = {
        text: "Retourner se coucher",
        action: goToChapter("chapitre2"),
    },

    let choix3 = {
        text: "Décide de faire la mission tout de suite",
        action: goToChapter("badchoice1"),
    }

  ],
  img: "assets/cadran.jpg",
};

let badchoice1 = {
    text: "Vous décidez de faire la mission mais malheureusement, vous tombez en bas des escaliers de votre appartment et vous vous retrouviez paralysé.",
    img: "assets/gameover1.jpg",
}

let chapitre2 = {
  subtitle: "L'appel",
  text: "Vous recevez un appel, votre mission est de trouver professeur Crâne, et l'arrêter ou de le tuer, à vous de faire cette décision. Maintenant il faut que vous vous trouver un moyen de transport, que décidez-vous de prendre?",
  option: [ 
    let car = {
    text: "Prendre votre voiture",
    action: goToChapter("badchoice2"),
    }, 

    let walk = {
    text: "Se rendre à pieds",
    action: goToChapter("chapitre3"),
    },

    let bike = {
        text: "Se rendre en vélo",
        action: goToChapter("altpath1"),
    },
],
  img: "assets/phonecall.jpg",
};

let altpath1 ={
    text: "Vous prenez votre vélo mais vous n'êtes pas sur de vouloir mettre un casque de protection, voulez-vous le mettre?",
    option: [
        let yes = {
            text: "Oui",
            action: goToChapter("badchoice3"),
        },

        let no = {
            text: "Non",
            action: goToChapter("chapitre3"),
        },
    ],
}

let badchoice2 = {
    text: "Vous vous décidiez de vous y rendre en voiture, mais vous vous faites arrêter par la police pour excès de vitesse",
    img: "assets/arrest.jpg ",
};

let badchoice3 = {
    text:"En mettant votre casque, vous vous rendez compte qu'il était trop gros et donc vous cache la vue. Donc vous vous enfargez sur un homme armé, et il vous tire dessus",
    img: "assets/falling.jpg",
}

let chapitre3 = {
  subtitle: "La mission",
  text: "Vous arrivez à destination. Maintenant, vous prenez connaissance aux informations de la mission et du suspect en question. Que faites-vous?",
  option: [
    let path1 = {
        text:"Retourner chez vous",
        action:goToChapter("badchoice4") ,
    },
    let path2 = {
        text:"Appeller votre partenaire",
        action:goToChapter("badchoice5"),
    },
  let path3 = {
    text:"Aller directement chez votre partenaire",
    action:goToChapter("chapitre4") ,
  },

  let path4 = {
    text:" Commencer la mission toute seule",
    action:goToChapter("ch4altpath") ,
  },

  ],
  img: "assets/car.jpg",
};

let badchoice4 = {
    text: "Vous apprenez aux nouvelles que Professeur Crâne a mis son plan en exécution et un grand nombre de personnes ont dû payer le prix. Dans le plus grand des remords de n'avoir rien fait, vous vous tuer.",
}

let badchoice5 = {
    text: "Quelqu'un a tracé votre numéro lorsque vous avez appellé votre partenaire et a trouvé votre numéro d'appartement et vous kidnappe",
}

let chapitre4 = {
  subtitle: "Le commencement de la mission",
  option: [""],
  img: "",
};

let ch4altpath = {
  subtitle: "",
  text: "",
  option: [""],
  img: "",
};


let chapitre7 = {
  subtitle: "",
  text: "",
  option: [""],
  img: "",
};

let chapitre8 = {
  subtitle: "",
  text: "",
  option: [""],
  img: "",
};

let chapitre9 = {
  subtitle: "Le choix final",
  text: "Vous trouvez enfin professeur Crâne, sans ses hommes, sans ses armes, sans rien. Il est sans défense. Vous pointer votre revolver contre son front. Que faites-vous?",
  option: [
    let tuer = {
        text: "Tuer",
        action: goToChapter("badending"),
    },

    let mercy = {
        text: "Épargner",
        action: goToChapter("goodending"),
    }
  ],
  img: "",
};

let badending = {
    text: "Vous tuer Professeur Crâne pendant qu'il ricanait, et vous sauvez l'humanité. Mais votre partenaire prise en otage meurt aussi en même temps sans vous en aperçevoir."
}

let goodending ={
    text: "Vous épargnez Professeur Crâne et mettre son plan à terme, et l'emporter à la justice. Félicitations!!!",
}