<?php 

function envoiJSON($tab){
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    //print_r($tab);
    $json = json_encode($tab, JSON_UNESCAPED_UNICODE);
    echo $json;
}

function recupNotes($texte) {
    $host = 'localhost';		
    $dbname = 'bdd_notes';
    $username = 'root';
    $password = '';
    
    try {
        $bdd = new PDO('mysql:host='. $host .';dbname='. $dbname .';charset=utf8',
        $username, $password);
    
    } catch(Exception $e) {
        die('Erreur : '. $e->getMessage());
    }
    
    $requete = "SELECT note, matiere FROM `notes` JOIN `etudiants` ON notes.id_Etu = etudiants.id_Etu WHERE etudiants.nom_Etu LIKE \"$texte%\" ;";
    
    $resultat = $bdd->query($requete);
    
    $tableau = $resultat->fetchall();  
    
    return($tableau);     
}


if (empty($_GET)) {     //connexion sans paramètre
    header("Content-Type: text/html; charset=UTF-8");
    print_r($_GET);
}
else {
    $donnees = recupNotes($_GET['nom']);
    envoiJSON($donnees);
}

?>

