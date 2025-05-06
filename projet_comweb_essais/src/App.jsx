import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

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

function App() {
let jsondata={name:"",sprites:{front_default:null}}
  const [data, setData] = useState([jsondata])
    
  const cliquer=function(){
      let url = `http://localhost/Projet_essai/Lea`;
      fetch(url)
          .then(r => r.json())
          .then(datas => {setData(datas)})
          //.catch(e => console.error("Erreur fetch:", e)); 
     }

  useEffect(cliquer,[])

  return (
    <>
      <Bouton cliquer={cliquer}/>
      <Texte titre={data[0].note}/> 

    </>
  )
}


export default App
