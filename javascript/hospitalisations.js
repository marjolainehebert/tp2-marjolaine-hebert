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
    {"codeEtab":1234,"Dossier":5,"dateAdmission":"14-août-00","dateSortie":"14-août-01","specialite":"médecine"},
    {"codeEtab":1234,"Dossier":10,"dateAdmission":"12-déc.-92","dateSortie":"12-déc.-92","specialite":"chirurgie"},
    {"codeEtab":2346,"Dossier":8,"dateAdmission":"03-mars-03","dateSortie":"05-mars-03","specialite":"médecine"},
    {"codeEtab":2346,"Dossier":1,"dateAdmission":"11-nov.-97","dateSortie":"12-nov.-97","specialite":"orthopédie"},
    {"codeEtab":2346,"Dossier":3,"dateAdmission":"12-avr.-95","dateSortie":"30-avr.-95","specialite":"médecine"},
    {"codeEtab":3980,"Dossier":5,"dateAdmission":"14-fév.-00","dateSortie":"14-mars-00","specialite":"médecine"},
    {"codeEtab":3980,"Dossier":5,"dateAdmission":"01-jan.-01","dateSortie":"01-fév.-01","specialite":"médecine"},
    {"codeEtab":3980,"Dossier":9,"dateAdmission":"03-avr.-95","dateSortie":"08-avr.-95","specialite":"orthopédie"},
    {"codeEtab":3980,"Dossier":7,"dateAdmission":"27-nov.-99","dateSortie":"04-déc.-99","specialite":"chirurgie"},
    {"codeEtab":3980,"Dossier":10,"dateAdmission":"28-avr.-97","dateSortie":"05-mai-97","specialite":"chirurgie"},
    {"codeEtab":4177,"Dossier":3,"dateAdmission":"03-août-01","dateSortie":"05-déc.-01","specialite":"médecine"},
    {"codeEtab":4177,"Dossier":3,"dateAdmission":"02-fév.-02","dateSortie":"23-fév.-02","specialite":"orthopédie"},
    {"codeEtab":7306,"Dossier":2,"dateAdmission":"23-mai-98","dateSortie":"27-mai-98","specialite":"orthopédie"}
]
/* variables globales */
var divEntete;



/* ---------- Lister les patients ---------- */
function listerPatients(){
    var prop, patient, tableauPatient;
    effacer();
    divEntete='<i class="fas fa-hospital-user"></i> Liste des patients';
    tableauPatient = '<table class="w3-table-all centrer-tableau"><tr><th>No. dossier</th><th>Nom</th><th>Prenom</th><th>Date de naissance</th><th>Sexe</th></tr>';
    for (patient of tabPatients) {//pour chaque objet du tableau
        tableauPatient += "<tr>"; //ajouter <tr> pour commencer une ligne de tableau
        for (prop in patient) { // pour chaque élément dans l'objet patient
            tableauPatient += "<td>" + patient[prop] + "</td>"; //ajouter une cellule avec
        }
        tableauPatient += "</tr>";
    }
    tableauPatient += "</table>";
    document.getElementById("afficheTableau").innerHTML = tableauPatient;
    document.getElementById("champStatus").innerHTML = "Liste de tous les patients enregistr&eacute;s";
    afficherEntete();
}


/* ---------- Lister les établissements ---------- */
function listerEtablissements(){
    var prop, etab, tableauEtablissement;
    effacer();
    divEntete='<i class="far fa-hospital"></i> Liste des &eacute;tablissements';
    tableauEtablissement = '<table class="w3-table-all centrer-tableau"><tr><th> No. &eacute;tablissement</th><th>Nom</th><th>Adresse</th><th>Code Postal</th><th>Téléphone</th></tr>';
    for (etab of tabEtablissements) {
        tableauEtablissement += "<tr>";
        for (prop in etab) {
            tableauEtablissement += "<td>" + etab[prop] + "</td>";
        }
        tableauEtablissement += "</tr>";
    }
    tableauEtablissement += "</table>";
    document.getElementById("afficheTableau").innerHTML = tableauEtablissement;
    document.getElementById("champStatus").innerHTML = "Liste de tous nos &eacute;tablissements";
    afficherEntete();
}


/* ---------- Lister les hospitalisations ---------- */
function listerHospitalisations(){
    var prop, hospitalisations, tableauHospitalisations;
    effacer();
    divEntete='<i class="fas fa-ambulance"></i> Liste des hospitalisations';
    tableauHospitalisations = '<table class="w3-table-all centrer-tableau"><tr><th> Code &eacute;tablissement</th><th>No. Dossier Patient</th><th>Date arrivée</th><th>Date sortie</th><th>Spécialités</th></tr>';
    for (hospitalisations of tabHospitalisations) {
        tableauHospitalisations += "<tr>";
        for (prop in hospitalisations) {
            tableauHospitalisations += "<td>" + hospitalisations[prop] + "</td>";
        }
        tableauHospitalisations += "</tr>";
    }
    tableauHospitalisations += "</table>";
    document.getElementById("afficheTableau").innerHTML = tableauHospitalisations;
    document.getElementById("champStatus").innerHTML = "Liste de toutes les hospitalisations en cours";
    afficherEntete();
}//{"codeEtab":1234,"Dossier":5,"dateAdmission":"14-août-00","dateSortie":"14-août-01","specialite":"médecine"},


/* ---------- Lister les hospitalisations par patient ---------- */
function selHosParPatients(){
    effacer();
    divEntete='<i class="fas fa-procedures"></i> Hospitalisatons par patients';
    afficherEntete();
}


/* ---------- Lister les hospitalisations par établissements et par spécialités ---------- */
function selHosParEtab(){
    effacer();
    divEntete='<i class="fas fa-clinic-medical"></i> Hospitalisation par &eacute;tablissement et par sp&eacute;cialit&eacute;';
    afficherEntete();
    
}


/* ---------- vider la section tableau ---------- */
function effacer(){
    document.getElementById("afficheTableau").innerHTML = "";
    document.getElementById("entete").className="invisible";
}


/* ---------- afficher dans la section tableau ---------- */
function afficherEntete(){
    document.getElementById("enteteTitre").innerHTML = divEntete;
    document.getElementById("entete").className="visible";
}