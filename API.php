<?php 

function envoiJSON($tab){
    header('Content-Type: application/json');
    //print_r($tab);
    $json = json_encode($tab, JSON_UNESCAPED_UNICODE);
    echo $json;
}

function recupNotes($texte) {
    $host = 'localhost';		//a changer
    $dbname = 'notes';
    $username = 'root';
    $password = '';
    
    try {
        $bdd = new PDO('mysql:host='. $host .';dbname='. $dbname .';charset=utf8',
        $username, $password);
        echo 'connexion établie ' ; 
    
    } catch(Exception $e) {
        die('Erreur : '. $e->getMessage());
    }
    
    $requete = "select from like \"$texte%\";";
    
    $resultat = $bdd->query($requete);
    
    $tableau = $resultat->fetchall();  
    
    print_r($tableau);     
}


if (empty($_GET)) {     //connexion sans paramètre
    header("Content-Type: text/html; charset=UTF-8");
    echo "page d'accueil";
    print_r($_GET);
}
else {
    $donnees = recupNotes($_GET['nom']);
    envoiJSON($donnees);
}

?>

