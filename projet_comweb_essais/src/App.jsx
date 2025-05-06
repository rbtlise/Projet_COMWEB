import { useState } from 'react'
import { useEffect } from 'react'
//import './App.css'

function Bouton(Props){
  return (
    <p>
      <button onClick={Props.cliquer}>
            Changer
      </button>
    </p>
  )
}

function Texte(Props){
  return (
    <p>
      {Props.titre}
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
      let url = `http://localhost/Projet_essai/${nom}`;
      fetch(url)
          .then(r => r.json())
          .then(datas => {setData(datas)})
          //.catch(e => console.error("Erreur fetch:", e)); 
     }

  //useEffect(cliquer,[])

  return (
    <>
      <Saisie nom={nom} setNom={setNom}/> 
      <Bouton cliquer={cliquer}/>
      <Texte titre={data[0].note}/> {/* faire un foreach pour afficher plusieurs notes */}
    </>
  )
}


export default App
