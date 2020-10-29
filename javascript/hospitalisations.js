// Tableau d'objets pour les patients  
var tabPatients = [
    {"Dossier":1,"Nom":"Léger","Prénom":"Émile","Naissance":"26 mars 1917","Sexe":"M"},
    {"Dossier":2,"Nom":"Bernard","Prénom":"Marie","Naissance":"3 fécrier 1946","Sexe":"F"},
    {"Dossier":3,"Nom":"Chartrand","Prénom":"Guy","Naissance":"5 avril 1959","Sexe":"M"},
    {"Dossier":4,"Nom":"Côté","Prénom":"André","Naissance":"2 septembre 1978","Sexe":"M"},
    {"Dossier":5,"Nom":"Lavoie","Prénom":"Carole","Naissance":"4 novembre 1973","Sexe":"F"},
    {"Dossier":6,"Nom":"Martin","Prénom":"Diane","Naissance":"2 décembre 1965","Sexe":"F"},
    {"Dossier":7,"Nom":"Lacroix","Prénom":"Pauline","Naissance":"25 janvier 1956","Sexe":"F"},
    {"Dossier":8,"Nom":"St-Jean","Prénom":"Arthur","Naissance":"7 octobre 1912","Sexe":"M"},
    {"Dossier":9,"Nom":"Béchard","Prénom":"Marc","Naissance":"8 août 1980","Sexe":"M"},
    {"Dossier":10,"Nom":"Chartrand","Prénom":"Mario","Naissance":"23 juillet 1947","Sexe":"M"}
]

// Tableau d'objets pour les établissements
var tabEtablissements = [
    {"codeEtab":1234,"nomEtab":"Centre hospitalier Sud","adresseEtab":"1234, Boul. Sud, Montréal, Qc","postalEtab":"H2M 2Y6","telEtab":"(514) 123-1234"},
    {"codeEtab":1234,"nomEtab":"Centre hospitalier de St. Mary","adresseEtab":"3830, avenue Lacombe Montréal, Qc","postalEtab":"H3T 1M5","telEtab":"(514) 345-3511"},
    {"codeEtab":2346,"nomEtab":"Hôpital Saint-Luc du CHUM","adresseEtab":"1058, rue Saint-Denis, Montréal, Qc","postalEtab":"H2X 3J4","telEtab":"(514) 890-8000"},
    {"codeEtab":3980,"nomEtab":"Hôpital Santa Cabrini","adresseEtab":"5655, rue Saint-Zotique Est Montréal,Qc","postalEtab":"H1T 1P7","telEtab":"(514) 252-6000"},
    {"codeEtab":4177,"nomEtab":"Hôpital Jean-Talon","adresseEtab":"1385, rue Jean-Talon Est Montréal, Qc","postalEtab":"H2E 1S6","telEtab":"(514) 495-6767"},
    {"codeEtab":7306,"nomEtab":"Hôpital Fleury","adresseEtab":"2180, rue Fleury Est Montréal, Qc","postalEtab":"H2B 1K3","telEtab":"(514) 384-2000"},
    {"codeEtab":8895,"nomEtab":"Hôpital Rivière-des-Prairies","adresseEtab":"7070, boulevard Perras Montréal, Qc","postalEtab":"H1E 1A4","telEtab":"(514) 323-7260"},
    {"codeEtab":3655,"nomEtab":"Hôpital St-Hubert","adresseEtab":"7070, boulevard Perras Montréal, Qc","postalEtab":"H1E 1A4","telEtab":"(514) 323-7260"},
]

// Tableau d'objets pour hospitalisations
var tabHospitalisations = [
    {"codeEtab":1234,"Dossier":5,"dateAdmission":"14-août-00","dateSortie":"14-août-01","spécialité":"médecine"},
    {"codeEtab":1234,"Dossier":10,"dateAdmission":"12-déc.-92","dateSortie":"12-déc.-92","spécialité":"chirurgie"},
    {"codeEtab":2346,"Dossier":8,"dateAdmission":"03-mars-03","dateSortie":"05-mars-03","spécialité":"médecine"},
    {"codeEtab":2346,"Dossier":1,"dateAdmission":"11-nov.-97","dateSortie":"12-nov.-97","spécialité":"orthopédie"},
    {"codeEtab":2346,"Dossier":3,"dateAdmission":"12-avr.-95","dateSortie":"30-avr.-95","spécialité":"médecine"},
    {"codeEtab":3980,"Dossier":5,"dateAdmission":"14-fév.-00","dateSortie":"14-mars-00","spécialité":"médecine"},
    {"codeEtab":3980,"Dossier":5,"dateAdmission":"01-jan.-01","dateSortie":"01-fév.-01","spécialité":"médecine"},
    {"codeEtab":3980,"Dossier":9,"dateAdmission":"03-avr.-95","dateSortie":"08-avr.-95","spécialité":"orthopédie"},
    {"codeEtab":3980,"Dossier":7,"dateAdmission":"27-nov.-99","dateSortie":"04-déc.-99","spécialité":"chirurgie"},
    {"codeEtab":3980,"Dossier":10,"dateAdmission":"28-avr.-97","dateSortie":"05-mai-97","spécialité":"chirurgie"},
    {"codeEtab":4177,"Dossier":3,"dateAdmission":"03-août-01","dateSortie":"05-déc.-01","spécialité":"médecine"},
    {"codeEtab":4177,"Dossier":3,"dateAdmission":"02-fév.-02","dateSortie":"23-fév.-02","spécialité":"orthopédie"},
    {"codeEtab":7306,"Dossier":2,"dateAdmission":"23-mai-98","dateSortie":"27-mai-98","spécialité":"orthopédie"}
]
/* variables globales */
var divEntete, tailleTableau;



/* ---------- Lister les patients ---------- */
function listerPatients(){
    var prop, patient, tableauPatient;
    effacer();// vider le tableau
    
    //Entête du tableau
    divEntete='<i class="fas fa-hospital-user"></i> Liste des patients';
    afficherEntete(divEntete); // affiher la nouvelle entête

    //remplir le tableau
    tableauPatient = '<table class="w3-table-all centrer-tableau"><tr><th>No. dossier</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>Sexe</th></tr>';
    for (patient of tabPatients) {//pour chaque objet du tableau
        tableauPatient += "<tr>"; // ajouter une rangée
        for (prop in patient) { // pour chaque prop dans patient
            tableauPatient += "<td>" + patient[prop] + "</td>"; //ajouter une cellule au tableau
        };
        tableauPatient += "</tr>"; // fermer la rangée
    }
    tableauPatient += "</table>"; // fermer le tableau
    document.getElementById("afficheTableau").innerHTML = tableauPatient; //afficher le tableau

    // afficher messages
    tailleTableau = tabPatients.length;
    document.getElementById("champStatus").innerHTML = "Il y a <span class='vert'>" + tailleTableau + " patients</span> enregistrés.";
}




/* ---------- Lister les établissements ---------- */
function listerEtablissements(){
    var prop, etab, tableauEtablissement;
    effacer();// vider le tableau
    
    //Entête du tableau
    divEntete='<i class="far fa-hospital"></i> Liste des &eacute;tablissements';
    afficherEntete(divEntete); // affiher la nouvelle entête

    //remplir le tableau
    tableauEtablissement = '<table class="w3-table-all centrer-tableau"><tr><th> No. &eacute;tablissement</th><th>Nom</th><th>Adresse</th><th>Code Postal</th><th>Téléphone</th></tr>';
    for (etab of tabEtablissements) { // pour chaque etab dans tabEtablissements
        tableauEtablissement += "<tr>"; // ajouter une rangée
        for (prop in etab) { // pour chaque prop dans etab
            tableauEtablissement += "<td>" + etab[prop] + "</td>"; // ajouter une cellule au tableau
        };
        tableauEtablissement += "</tr>";// fermer la rangée
    };
    tableauEtablissement += "</table>";// fermer le tableau
    document.getElementById("afficheTableau").innerHTML = tableauEtablissement; //afficher le tableau

    // afficher message
    tailleTableau = tabEtablissements.length;
    document.getElementById("champStatus").innerHTML =  "Il y a <span class='vert'>" + tailleTableau + " établissements</span> dans le réseau hospitalier.";
}




/* ---------- Lister les hospitalisations ---------- */
function listerHospitalisations(){
    var prop, hospitalisations, tableauHospitalisations;
    effacer();// vider le tableau
    
    //Entête du tableau
    divEntete='<i class="fas fa-ambulance"></i> Liste des hospitalisations';
    afficherEntete(divEntete); // affiher la nouvelle entête

    // Remplir le tableau des hospitalisations
    tableauHospitalisations = '<table class="w3-table-all centrer-tableau"><tr><th> Code &eacute;tablissement</th><th>No. Dossier Patient</th><th>Date arrivée</th><th>Date sortie</th><th>Spécialités</th></tr>';
    for (hospitalisations of tabHospitalisations) { // pour chaque hospitalisations dans le tableau tabHospitalisations
        tableauHospitalisations += "<tr>"; // ajouter une rangée
        for (prop in hospitalisations) { // pour chaque prop dans les hospitalisations
            tableauHospitalisations += "<td>" + hospitalisations[prop] + "</td>"; // ajouter une cellule au tableau
        }
        tableauHospitalisations += "</tr>"; // fermer la rangée
    }
    tableauHospitalisations += "</table>"; // fermer le tableau
    document.getElementById("afficheTableau").innerHTML = tableauHospitalisations; // afficher le tableau dans l'espace prévu

    // afficher message
    tailleTableau = tabHospitalisations.length; // compter le nombre d'objets dans le tableau
    document.getElementById("champStatus").innerHTML = "Il y a <span class='vert'>" + tailleTableau + " hospitalisations</span> depuis le début.";
}




/* ---------- Lister les hospitalisations par patient ---------- */
function selHosParPatients(){

    effacer();// vider le tableau
    
    //Entête du tableau
    divEntete='<i class="fas fa-procedures"></i> Hospitalisatons par patients';
    afficherEntete(divEntete);

    // remplir le sélecteur de patients
    document.getElementById("selectionPatient").className="visible"; // rendre le conteneur div visible
    var selPatient=document.querySelector('#selectPatient');
    selPatient.options.length = 0; // pour vider la liste
    document.getElementById("champStatus").innerHTML = "Choisir le <span class='vert'>Code Patient</span> pour afficher toutes ses hospitalisations";
    selPatient.options[selPatient.options.length]=new Option("Choisir un patient");
	for (patient of tabPatients) {
        selPatient.options[selPatient.options.length]=new Option(patient.Dossier + " - " + patient.Prénom + " " + patient.Nom);
	}
}

function afficherInfosDuPatient(patientSelect) {
    var posPatientChoisi = patientSelect.selectedIndex-1;
    var patientChoisi = tabPatients[posPatientChoisi];
    var nominParGenre = "";
    var compteurHospitalisations = 0 ;
    var tableauParPatient, tableauHospParPatient;
    
    // afficher les données du patient
    tableauParPatient = '<table class="w3-table-all centrer-tableau"><tr><th>No. dossier</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>Sexe</th></tr>';
    tableauParPatient += "<tr>"; // ajouter une rangée
    for (prop in patientChoisi) { // pour chaque prop dans patient
        tableauParPatient += "<td>" + patientChoisi[prop] + "</td>"; //ajouter une cellule au tableau
    }
    tableauParPatient += "</tr></table>"; // fermer la rangée et le tableau

    // afficher les données d'hospitalisation du patient
    dossierPatient = patientChoisi.Dossier;
    tableauHospParPatient = '<table class="w3-table-all centrer-tableau"><tr><th> Code &eacute;tablissement</th><th>No. Dossier Patient</th><th>Date arrivée</th><th>Date sortie</th><th>Spécialités</th></tr>';
    tableauHospParPatient += "<tr>"; // ajouter une rangée
    for (hospPatient of tabHospitalisations) { // pour chaque hospitalisations dans le tableau tabHospitalisations
        if (hospPatient.Dossier == dossierPatient){
            compteurHospitalisations++;
            for (prop in hospPatient) { // pour chaque prop dans les hospitalisations
                tableauHospParPatient += "<td>" + hospPatient[prop] + "</td>"; // ajouter une cellule au tableau
            }
        }
        tableauHospParPatient += "</tr>"; // fermer la rangée
    }
    tableauHospParPatient += "</table>"; // fermer le tableau

    // déterminer de quel Sexe est le patient pour le nommer correctement
    if (patientChoisi.Sexe == "F"){
        nominParGenre = "La patiente";
    } else {
        nominParGenre = "Le patient";
    }

    // afficher message et le tableau
    if (compteurHospitalisations == 0){
        document.getElementById("afficheTableau").innerHTML = tableauParPatient; // afficher le tableau dans l'espace prévu
        document.getElementById("champStatus").innerHTML = "<span class='rouge'>" + nominParGenre + " " + patientChoisi.Prénom + " " + patientChoisi.Nom + " n'a pas encore été hospitalisé</span>";
    } else {
        document.getElementById("afficheTableau").innerHTML = tableauParPatient + "<br><br>" + tableauHospParPatient; // afficher le tableau dans l'espace prévu
        document.getElementById("champStatus").innerHTML = nominParGenre + " " + patientChoisi.Prénom + " " + patientChoisi.Nom + " a été hospitalisé <span class='vert'>" + compteurHospitalisations + " fois</span>"
    }
}




/* ---------- Lister les hospitalisations par établissements et par spécialités ---------- */
function selHosParEtab(){
    var prop, etab;
    effacer();// vider le tableau
    
    //Entête du tableau
    divEntete='<i class="fas fa-clinic-medical"></i> Hospitalisation par &eacute;tablissement et par sp&eacute;cialit&eacute;';
    afficherEntete(divEntete);
    document.getElementById("champStatus").innerHTML = "Choisir le <span class='vert'>Code de l'établissement</span> pour débuter";

    // remplir le sélecteur d'établissements
    document.getElementById("selectEtabSpecialite").className="visible"; // rendre le conteneur div visible
    var selEtab=document.querySelector('#selectEtablissement');
    selEtab.options.length = 0; // pour vider la liste
    selEtab.options[selEtab.options.length]=new Option("Choisir un établissement");
	for (etab of tabEtablissements) {
        selEtab.options[selEtab.options.length]=new Option(etab.codeEtab);
    }
    
}

function remplirSpecialites(specialite) {
    document.getElementById("champStatus").innerHTML = "Choisir ensuite la <span class='vert'>Spécialité</span> à afficher";
    document.getElementById("selectSpecialite").className="visible"; // rendre le select visible
    var selSpecialite=document.querySelector('#selectSpecialite');
    selSpecialite.options.length = 0; // pour vider la liste
    selSpecialite.options[selSpecialite.options.length]=new Option("Choisir une spécialité");
	for (etab of tabEtablissements) {
        selEtab.options[selEtab.options.length]=new Option(etab.specialite);
    }
}




/* ---------- vider la section tableau ---------- */
function effacer(){
    document.getElementById("afficheTableau").innerHTML = ""; // vider l'espace d'affichage
    document.getElementById("entete").className="invisible"; // rendre l'entête invisible
    document.getElementById("selectionPatient").className="invisible"; // rendre le div du sélecteur invisible
    document.getElementById("selectEtabSpecialite").className="invisible"; // rendre le div du sélecteur invisible
}




/* ---------- afficher dans la section tableau ---------- */
function afficherEntete(contenu){
    document.getElementById("enteteTitre").innerHTML = contenu;
    document.getElementById("entete").className="visible";
}