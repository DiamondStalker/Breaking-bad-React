import React, {
  useState,
  useEffect
} from 'react'
import axios from 'axios'
import Quotes from './Quotes'


var frase = "";
var nombre = "";

const CharacterItem = ({item}) => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  var divisiones = item.name.split(" ");
  nombre = "";
  nombre += divisiones[0] + "+" + divisiones[1];

//console.log(nombre);
  useEffect(() => {
    frase = "";
    const fetchItems = async () => {

  try {
        const result = await axios(`https://www.breakingbadapi.com/api/quote?author=` + nombre)
        //console.log(result.data)
        var qu = result.data;
        console.log(qu);
        var cantidad = result.data.length;
        /*for (var i = 0; i < cantidad; i++) {
          frase += i + "-" + qu[i].quote + "\n";
        }*/

        frase=qu[0].quote;
        var datos = result.data;
      } catch (e) {
        frase='No tiene frase'
      }
    }

    fetchItems()

  }, [query])

  return (
    <
    div className = 'card' >
    <
    div className = 'card-inner' >
    <
    div className = 'card-front' >
    <
    img src = {
      item.img
    }
    alt = '' / >
    <
    /div> <
    div className = 'card-back' >
    <
    h1 > {
      item.name
    } < /h1> <
    ul >
    <
    li >
    <
    strong > Nombre: < /strong> {item.nickname} < /
    li > <
    li >
    <
    strong > Frase: < /strong><h3 id="Quote"></h3 >{frase}<Quotes/>
    <
    /li> < /
    ul > <
    /div> < /
    div > <
    /div>
  )
}

export default CharacterItem
