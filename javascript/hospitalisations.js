// Tableau d'objets pour les patients  
var tabPatients = [
    {"Dossier":1,"Nom":"Léger","Prénom":"Émile","Naissance":"26 mars 1917","Sexe":"M"},
    {"Dossier":2,"Nom":"Bernard","Prénom":"Marie","Naissance":"3 fécrier 1946","Sexe":"F"},
    {"Dossier":3,"Nom":"Chartrand","Prénom":"ÉGuy","Naissance":"5 avril 1959","Sexe":"M"},
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
    {"noEtab":1234,"nomEtab":"Centre hospitalier Sud","adresseEtab":"1234, Boul. Sud, Montréal, Qc","postalEtab":"H2M 2Y6","telEtab":"(514) 123-1234"},
    {"noEtab":2346,"nomEtab":"Hôpital Nord","adresseEtab":"7562, rue du Souvenir, Nordville, Qc","postalEtab":"J4R 2Z5","telEtab":"(514) 222-3333"},
    {"noEtab":3980,"nomEtab":"Hôpital Centre","adresseEtab":"4637 Boul. de l'Église, Montréal, Qc","postalEtab":"H4J 1C5","telEtab":"(514) 338-2222"},
    {"noEtab":4177,"nomEtab":"Centre hospitalier Est","adresseEtab":"12, rue Bernard, Repentigny, Qc","postalEtab":"H4J 1C5","telEtab":"(514) 338-2222"},
    {"noEtab":7306,"nomEtab":"Hôpital du Salut","adresseEtab":"11, rue de la Rédemption, St-Basile, Qc","postalEtab":"H4J 1C5","telEtab":"(514) 338-2222"},
    {"noEtab":8895,"nomEtab":"Dernier recours","adresseEtab":"999, rue St-Pierre, Longueuil, Qc","postalEtab":"H4J 1C5","telEtab":"(514) 338-2222"}
]

// Tableau d'objets pour hospitalisations
var tabHospitalisations = [
    {"codeEtab":1234,"noDossierPatient":5,"dateAdmission":"14-août-00","dateSortie":"14-août-01","specialite":"médecine"},
    {"codeEtab":1234,"noDossierPatient":10,"dateAdmission":"12-déc.-92","dateSortie":"12-déc.-92","specialite":"chirurgie"},
    {"codeEtab":2346,"noDossierPatient":8,"dateAdmission":"03-mars-03","dateSortie":"05-mars-03","specialite":"médecine"},
    {"codeEtab":2346,"noDossierPatient":1,"dateAdmission":"11-nov.-97","dateSortie":"12-nov.-97","specialite":"orthopédie"},
    {"codeEtab":2346,"noDossierPatient":3,"dateAdmission":"12-avr.-95","dateSortie":"30-avr.-95","specialite":"médecine"},
    {"codeEtab":3980,"noDossierPatient":5,"dateAdmission":"14-fév.-00","dateSortie":"14-mars-00","specialite":"médecine"},
    {"codeEtab":3980,"noDossierPatient":5,"dateAdmission":"01-jan.-01","dateSortie":"01-fév.-01","specialite":"médecine"},
    {"codeEtab":3980,"noDossierPatient":9,"dateAdmission":"03-avr.-95","dateSortie":"08-avr.-95","specialite":"orthopédie"},
    {"codeEtab":3980,"noDossierPatient":7,"dateAdmission":"27-nov.-99","dateSortie":"04-déc.-99","specialite":"chirurgie"},
    {"codeEtab":3980,"noDossierPatient":10,"dateAdmission":"28-avr.-97","dateSortie":"05-mai-97","specialite":"chirurgie"},
    {"codeEtab":4177,"noDossierPatient":3,"dateAdmission":"03-août-01","dateSortie":"05-déc.-01","specialite":"médecine"},
    {"codeEtab":4177,"noDossierPatient":3,"dateAdmission":"02-fév.-02","dateSortie":"23-fév.-02","specialite":"orthopédie"},
    {"codeEtab":7306,"noDossierPatient":2,"dateAdmission":"23-mai-98","dateSortie":"27-mai-98","specialite":"orthopédie"}
]
/* variables globales */
var divEntete;



/* ---------- Lister les patients ---------- */
function listerPatients(){
    var prop, patient, tableauPatient;
    divEntete='<i class="fas fa-hospital-user"></i> Liste des patients';
    tableauPatient = '<table class="w3-table-all w3-hoverable centrer-tableau"><tr><th>No. dossier</th><th>Nom</th><th>Prenom</th><th>Date de naissance</th><th>Sexe</th></tr>';
    for (patient of tabPatients) {//pour chaque objet du tableau
        tableauPatient = tableauPatient + "<tr>"; //ajouter <tr> pour commencer une ligne de tableau
        for (prop in patient) { // pour chaque élément dans l'objet patient
            tableauPatient = tableauPatient + "<td>" + patient[prop] + "</td>"; //ajouter une cellule avec
        }
        tableauPatient = tableauPatient + "</tr>";
    }
    tableauPatient = tableauPatient + "</table>";
    document.getElementById("entete").className="visible";
    document.getElementById("enteteTitre").innerHTML = divEntete;
    document.getElementById("afficheTableau").innerHTML = tableauPatient;
    document.getElementById("champStatus").innerHTML = "Liste de tous les patients enregistr&eacute;s";
}


/* ---------- Lister les établissements ---------- */
function listerEtablissements(){
    var prop, etab, tableauEtablissement;
    divEntete='<i class="far fa-hospital"></i> Liste des &eacute;tablissements';
    tableauEtablissement = '<table class="w3-table-all w3-hoverable centrer-tableau"><tr><th> No. &eacute;tablissement</th><th>Nom</th><th>Adresse</th><th>Code Postal</th><th>Téléphone</th></tr>';
    for (etab of tabEtablissements) {
        tableauEtablissement = tableauEtablissement + "<tr>";
        for (prop in etab) {
            tableauEtablissement = tableauEtablissement + "<td>" + etab[prop] + "</td>";
        }
        tableauEtablissement = tableauEtablissement + "</tr>";
    }
    tableauEtablissement = tableauEtablissement + "</table>";
    document.getElementById("entete").className="visible";
    document.getElementById("enteteTitre").innerHTML = divEntete;
    document.getElementById("afficheTableau").innerHTML = tableauEtablissement;
    document.getElementById("champStatus").innerHTML = "Liste de tous nos &eacute;tablissements";
}


/* ---------- Lister les hospitalisations ---------- */
function listerHospitalisations(){
    var prop, hospitalisations, tableauHospitalisations;
    divEntete='<i class="fas fa-ambulance"></i> Liste des hospitalisations';
    tableauHospitalisations = '<table class="w3-table-all w3-hoverable centrer-tableau"><tr><th> No. &eacute;tablissement</th><th>Nom</th><th>Adresse</th><th>Code Postal</th><th>Téléphone</th></tr>';
    for (hospitalisations of tabHospitalisations) {
        tableauHospitalisations = tableauHospitalisations + "<tr>";
        for (prop in hospitalisations) {
            tableauHospitalisations = tableauHospitalisations + "<td>" + hospitalisations[prop] + "</td>";
        }
        tableauHospitalisations = tableauHospitalisations + "</tr>";
    }
    tableauHospitalisations = tableauHospitalisations + "</table>";
    document.getElementById("entete").className="visible";
    document.getElementById("enteteTitre").innerHTML = divEntete;
    document.getElementById("afficheTableau").innerHTML = tableauHospitalisations;
    document.getElementById("champStatus").innerHTML = "Liste de tous nos &eacute;tablissements";
    //{"noEtab":1234,"nomEtab":"Centre hospitalier Sud","adresseEtab":"1234, Boul. Sud, Montréal, Qc","postalEtab":"H2M 2Y6","telEtab":"(514) 123-1234"},
}

function selHosParPatients(){
    divEntete='<i class="fas fa-ambulance"></i> Hospitalisatons par patients';
    document.getElementById("entete").className="visible";
    document.getElementById("enteteTitre").innerHTML = divEntete;
    
}

function selHosParEtab(){
    divEntete='<i class="fas fa-ambulance"></i> Hospitalisation par &eacute;tablissement et par sp&eacute;cialité&eacute;';
    document.getElementById("entete").className="visible";
    document.getElementById("enteteTitre").innerHTML = divEntete;
    
}

function effacer(){
    document.getElementById("afficheTableau").innerHTML = "";
    document.getElementById("entete").className="invisible";
}
