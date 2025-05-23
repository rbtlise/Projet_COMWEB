import { useState } from 'react'
import { useEffect } from 'react'

function Bouton(Props){
  return (
    <p>
      <button onClick={Props.cliquer}>
            Afficher les notes
      </button>
    </p>
  )
}

function Texte(Props){
  return (
    <p>
      {Props.matiere} : {Props.note}
    </p>
  )
}

function Saisie(Props){
  return (
    <p>
      <input type="text"
      value={Props.nom}
      placeholder = "Entrez le nom de l'élève"
      onChange={(e) => Props.setNom(e.target.value)}
      />
    </p>
  )
}

function App() {

  let jsondata={name:"",sprites:{front_default:null}}
  const [nom, setNom] = useState("") // état pour stocker le nom saisi
  const [data, setData] = useState([jsondata])
    
  const cliquer=function(){
      let url = `https://lamaire.zzz.bordeaux-inp.fr/API.php?nom=${nom}`;
      fetch(url)
          .then(r => r.json())
          .then(datas => {setData(datas)})
          //.catch(e => console.error("Erreur fetch:", e)); 
     }

  return (
    <>
      <Saisie nom={nom} setNom={setNom}/> 
      <Bouton cliquer={cliquer}/>
      {data.length > 0 && data.map((item, index) => (
      <Texte key={index} matiere={item.matiere} note={item.note}/>
       ))}
    </>
  )
  
}

export default App
