// FONCTION ET STRUCTURE CONDITIONNELLE DU MENU :
// La fonction appelle un événement du DOM qui est identifié par le nom "editNav()" permettant l'événement clique de bouton "onclick" sur un élément de la page
function editNav() {
  // La variable "x" utilise le document méthode JS (document.getElementById) pour rajouter le contenu lié à l'identifiant HTML "myTopnav"
  var x = document.getElementById("myTopnav");
  // Si l'instruction exécute la condition au moyen de la propriété JS "className" alors le contenu de la variable "x" sera identique "==" à la classe HTML "myTopnav"
  if (x.className === "topnav") {
    // Ou alors la variable "+=" au sélecteur CSS "responsive"
    x.className += " responsive";
    // Sinon "else" dit à la variable "x" de revenir à la condition précédente
  } else {
    x.className = "topnav";
  }
}

// CONSTANTES CLASSES HTML :
// Les classes HTML sont capturés à travers les documents méthodes JS pour ensuite stocker les styles CSS appropriés dans les constantes
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.getElementById(".btn-submit");
const modalForm = document.querySelector(".modal-form");
const closeBtn = document.querySelector(".close");
const modalClassRemerciement = document.querySelector(".classRemerciement");

// CONSTANTES IDENTIFIANTS HTML DU FORMULAIRE MODAL :
// Les identifiants HTML sont capturés à travers les documents méthodes JS pour ensuite stocker les contenus HTML appropriés dans les constantes
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const emailName = document.querySelector("#email");
const birthdateName = document.querySelector("#birthdate");
const numberName = document.querySelector("#quantity");
const cguName = document.querySelector("#checkbox1");

// CONSTANTES IDENTIFIANTS HTML RELATIVES AUX MESSAGES D'AFFICHAGE DU FORMULAIRE MODALE :
const constFirstMessage = document.querySelector("#firstMessage");
const constLastMessage = document.querySelector("#lastMessage");
const constEmailMessage = document.querySelector("#emailMessage");
const constBirthdateMessage = document.querySelector("#birthdateMessage");
const constNumberMessage = document.querySelector("#numberMessage");
const constCitiesMessage = document.querySelector("#citiesMessage");
const constCguMessage = document.querySelector("#cguMessage");
const constRemerciementMessage = document.querySelector("#remerciementMessage");
const constRemerciementMessageClose = document.querySelector(
  "#remerciementMessageClose"
);
const constRemerciementMessageMerci = document.querySelector(
  "#remerciementMessageMerci"
);
const constRemerciementMerciFermeture = document.querySelector(
  "#remerciementMerciFermeture"
);

// LANCEMENT DU FORMULAIRE MODAL :
// La fonction sera intégrée dans la boucle "for" ci-dessus
function launchModal() {
  // Affiche du formulaire modal
  modalbg.style.display = "block";
}

// La fonction sera intégrée dans la boucle "for" ci-dessus
function closeModal() {
  // Disparition du formulaire modal
  modalbg.style.display = "none";
}

// STRUCTURE DE BOUCLE RÉPÉTITIVE AU LANCEMENT DE L'ÉVÉNEMENT DU FORMULAIRE MODAL :
// La méthode JS "forEach" obtient le contenu de la constante "modalBtn" afin de l'exécuter dans le tableau implémenté
// L'événement du DOM "click" simule le clique de souris selon la cible
// Ouverture du formulaire modal au clique (je m'inscris)
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// La méthode JS "addEventListener" rajoute le contenu implémenté dans la constante
// Fermeture du formulaire modal au clique (croix de fermeture)
closeBtn.addEventListener("click", closeModal);

// CONSTANTES CHAMPS FORMULAIRE MODAL :
// Les balises HTML sont capturés par les documents méthodes JS qui ensuite stocker les données appropriées dans les constantes
const constForm0 = document.querySelector("form");
{
  constForm0.addEventListener("submit", functionFirst);
  const constForm1 = document.querySelector("form");
  constForm1.addEventListener("submit", functionLast);
  const constForm2 = document.querySelector("form");
  constForm2.addEventListener("submit", functionEmail);
  const constForm3 = document.querySelector("form");
  constForm3.addEventListener("submit", functionBirthdate);
  const constForm4 = document.querySelector("form");
  constForm4.addEventListener("submit", functionNumber);
  const constForm5 = document.querySelector("form");
  constForm5.addEventListener("submit", functionCities);
  const constForm6 = document.querySelector("form");
  constForm6.addEventListener("submit", functionCgu);
}

// FONCTION PRÉNOM ET STRUCTURE CONDITIONNELLE INDIQUANT LES MESSAGES D'AFFICHAGE CI-DESSOUS AU FORMULAIRE MODAL :
function functionFirst() {
  const constFirst = document.querySelector("#first");
  // Affiche le prénom dans la console
  console.log(constFirst.value);
  if (!firstName.value) {
    // Si le champ est vide alors le message ci-dessous apparaît
    constFirstMessage.innerHTML = "Veuillez entrer votre prénom";
    constFirstMessage.style.display = "block";
    return false;
    // La condition est constituée de la propriété "value" JS qui retourne l'infériorité de la valeur « 2 » puis "length" renvoie la longueur du prénom
  } else if (firstName.value.length < 2) {
    // Sinon si le prénom fait moins de 2 caractères alors le message ci-dessous apparait
    constFirstMessage.innerHTML =
      "Veuillez inscrire au moins deux caractères pour votre prénom";
    constFirstMessage.style.display = "block";
    return false;
  } else {
    // Sinon le cas contraire le nombre de caractères est renseignée alors aucun message n'apparait
    constFirstMessage.style.display = "none";
    return true;
  }
}

// FONCTION NOM ET STRUCTURE CONDITIONNELLE INDIQUANT LES MESSAGES D'AFFICHAGE CI-DESSOUS AU FORMULAIRE MODAL :
function functionLast() {
  const constLast = document.querySelector("#last");
  // Affiche le nom dans la console
  console.log(constLast.value);
  if (!lastName.value) {
    // Si le champ est vide alors le message ci-dessous apparaît
    constLastMessage.innerHTML = "Veuillez entrer votre nom";
    constLastMessage.style.display = "block";
    return false;
    // La condition est constituée de la propriété "value" JS qui retourne l'infériorité de la valeur « 2 » puis "length" renvoie la longueur du nom
  } else if (lastName.value.length < 2) {
    // Sinon si le nom fait moins de 2 caractères alors le message ci-dessous apparait
    constLastMessage.innerHTML =
      "Veuillez inscrire au moins deux caractères pour votre nom";
    constLastMessage.style.display = "block";
    return false;
  } else {
    // Sinon le cas contraire le nombre de caractères est renseignée alors aucun message n'apparait
    constLastMessage.style.display = "none";
    return true;
  }
}

// FONCTION EMAIL ET STRUCTURE CONDITIONNELLE INDIQUANT LES MESSAGES D'AFFICHAGE CI-DESSOUS AU FORMULAIRE MODAL :
function functionEmail() {
  const constEmail = document.querySelector("#email");
  // Affiche l'email dans la console
  console.log(constEmail.value);
  // La variable "letEmail" est = aux caractères spéciaux admis dans une adresse email avant et après l'arobase
  let letEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // La valeur retourne les données à la constante "emailName"
  if (!emailName.value) {
    // Si le champ est vide alors le message ci-dessous apparaît
    constEmailMessage.innerHTML = "Veuillez entrer votre adresse email";
    constEmailMessage.style.display = "block";
    return false;
    // La méthode JS "exec" exécute les données de la variable "letEmail" qui retourne à la constante "emailName" sans quoi elle retourne null
  } else if (letEmail.exec(emailName.value) == null) {
    // Sinon si a défaut l'adresse email ne correspond pas aux caractères acceptés alors le message ci-dessous apparaît
    constEmailMessage.innerHTML = "Veuillez entrer une adresse email valable";
    constEmailMessage.style.display = "block";
    return false;
  } else {
    // Sinon le cas contraire l'adresse email est renseignée alors aucun message n'apparait
    constEmailMessage.style.display = "none";
    return true;
  }
}

// FONCTION BIRTHDATE ET STRUCTURE CONDITIONNELLE INDIQUANT LES MESSAGES D'AFFICHAGE CI-DESSOUS AU FORMULAIRE MODAL :
function functionBirthdate() {
  const constBirthdate = document.querySelector("#birthdate");
  // Affiche le nombre de tournois dans la console
  console.log(constBirthdate.value);
  let letBirthdate = birthdateName.value;
  if (!birthdateName.value) {
    // Si le champ est vide alors le message ci-dessous apparaît
    constBirthdateMessage.innerHTML = "Veuillez entrer votre date de naissance";
    constBirthdateMessage.style.display = "block";
    return false;
  } else {
    // La variable "letBirthdateDateNaissance" sera égale à la méthode JS "split()" qui fractionne les données de la variable "letBirthdate"
    let letBirthdateDateNaissance = letBirthdate.split("-")[0];
    // La variable "letBirthdateDateJour" sera égale à la méthode JS "getFullYear()" qui renvoie l'année de la date spécifiée en fonction de l'heure locale
    let letBirthdateDateJour = new Date().getFullYear();
    // La variable "letbirthdateage" sera égale à son contenu entier par rapport aux autres variables
    let letBirthdateAge = letBirthdateDateJour - letBirthdateDateNaissance;
    // La condition est que la variable sera inférieure et égale à la valeur « 17 »
    if (letBirthdateAge <= 17) {
      // Si l'âge est inférieur à 18 ans alors le message ci-dessous apparait
      constBirthdateMessage.innerHTML =
        "Votre date de naissance ne répond pas aux critères d'âge";
      constBirthdateMessage.style.display = "block";
      return false;
    } else {
      // Sinon le cas contraire l'âge est renseignée alors aucun message n'apparait
      constBirthdateMessage.style.display = "none";
      return true;
    }
  }
}

// FONCTION NUMBER ET STRUCTURE CONDITIONNELLE INDIQUANT LES MESSAGES D'AFFICHAGE CI-DESSOUS AU FORMULAIRE MODAL :
function functionNumber() {
  const constNumber = document.querySelector("#quantity");
  // Affiche le nombre de tournois dans la console
  console.log(constNumber.value);
  if (!numberName.value) {
    // Si le champ est vide alors le message ci-dessous apparaît
    constNumberMessage.innerHTML =
      "Veuillez entrer un certain nombre de participant";
    constNumberMessage.style.display = "block";
    return false;
    // Valeur sera retournée à la constante "numberName"
  } else if (numberName.value > 99) {
    // Sinon si le nombre d'inscrits est plus que 99 alors le message ci-dessous apparait
    constNumberMessage.innerHTML = "Le nombre maximum d'inscrits est atteint";
    constNumberMessage.style.display = "block";
    return false;
  } else {
    // Sinon le cas contraire le nombre de 99 inscrits est renseignée alors aucun message n'apparait
    constNumberMessage.style.display = "none";
    return true;
  }
}

// FONCTION CGU ET STRUCTURE CONDITONNELLE INDIQUANT LES MESSAGES D'AFFICHAGE CI-DESSOUS AU FORMULAIRE MODAL :
function functionCgu() {
  // La propriété JS "checked" coche ou renvoie le cochement d'une case à cocher via la constante "cguName"
  // Si les conditions générales d'utilisation ne sont pas acceptés alors le message ci-dessous apparait
  if (!cguName.checked) {
    constCguMessage.innerHTML =
      "Veuillez accepter les conditions générales d'utilisation";
    constCguMessage.style.display = "block";
    return false;
    // Sinon le cas contraire où les conditions générales d'utilisation sont acceptés alors aucun message n'apparaît
  } else {
    constCguMessage.style.display = "none";
    return true;
  }
}

// TABLEAU RADIOS :
// La variable "letLocations" récupèrent tous les identifiants radios du tableau afin de l'indexer à la fonction "functionCities"
let letLocations = [
  document.querySelector("#location1"),
  document.querySelector("#location2"),
  document.querySelector("#location3"),
  document.querySelector("#location4"),
  document.querySelector("#location5"),
  document.querySelector("#location6"),
];

// FONCTION CITIES ET STRUCTURE CONDITIONNELLE INDIQUANT LE MESSAGE D'AFFICHAGE CI-DESSOUS AU FORMULAIRE MODAL :
// La fonction "functionCities" obtient l'indexation des fonctions nécessaires à la validation du formulaire modal
function functionCities() {
  if (
    !letLocations[0].checked &&
    !letLocations[1].checked &&
    !letLocations[2].checked &&
    !letLocations[3].checked &&
    !letLocations[4].checked &&
    !letLocations[5].checked
  ) {
    // Si la condition de l'un des boutons de ville n'est pas coché alors le message ci-dessous apparaît
    constCitiesMessage.innerHTML =
      "Veuillez accepter une ville pour participer";
    constCitiesMessage.style.display = "block";
    return false;
  } else {
    // Sinon le cas contraire ou la ville est coché alors aucun message n'apparaît
    constCitiesMessage.style.display = "none";
    return true;
  }
}

// FONCTION VALIFORM AVEC LES VARIABLES ET STRUCTURE CONDITIONNELLE DU FORMULAIRE MODAL :
function validForm(e) {
  // La méthode "preventDefault" empêche le rafraîchissement de la page du formulaire modal
  e.preventDefault();
  // Les variables de validation permettant d'invoquent chacune des fonctions à vérifier les champs du formulaire modal
  let validFirst = functionFirst();
  let validLast = functionLast();
  let validEmail = functionEmail();
  let validBirthdate = functionBirthdate();
  let validNumber = functionNumber();
  let validCgu = functionCgu();
  let validCities = functionCities();
  if (
    validFirst &&
    validLast &&
    validEmail &&
    validBirthdate &&
    validNumber &&
    validCities &&
    validCgu
  ) {
    // Si la condition valide les champs du formulaire modal alors il sera fonctionnel
    // Disparition du formulaire modal
    modalbg.style.display = "none";
    // Affiche la page "Merci pour votre inscription"
    modalClassRemerciement.style.display = "block";
    functionRemerciement();
  }
}

// FONCTION DE REMERCIEMENT
// Ouvre la page "Merci pour votre inscription"
function functionRemerciement() {
  constRemerciementMessage.style.display = "block";
}

// La méthode JS "addEventListener" ajoute le contenu de la constante "constRemerciementMessageClose" à l'événement JS "click"
// Le paramètre JS "event" retourne le type d'événement
constRemerciementMessageClose.addEventListener("click", (e) => {
  // Clique sur la croix de fermeture
  constRemerciementMessage.style.display = "none";
  // Disparition du message de remerciement
  modalClassRemerciement.style.display = "none";
});

// Clique sur l'icone "fermeture"
constRemerciementMerciFermeture.addEventListener("click", (e) => {
  constRemerciementMessage.style.display = "none";
  // Disparition de l'icone "fermeture"
  modalClassRemerciement.style.display = "none";
});
