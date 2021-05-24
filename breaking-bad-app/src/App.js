import Header from './components/ui/Header'
import './index.css'
import axios from 'axios'
import React, {
  useState,
  useEffect
} from 'react'
import CharacterItem from './components/characters/CharacterItem'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import Quotes from './components/characters/Quotes'
var datos;
const App = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

console.log(CharacterItem);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      setItems(result.data)
      setIsLoading(false)
      datos = result.data;

}
    fetchItems()
  }, [query])

return ( <
  div className = 'container' >
  <Header/ >
  <Search getQuery = {(q) => setQuery(q)}/>
  <CharacterGrid isLoading = {isLoading}
  items = {items}/>
  </div>
)
}
export default App;
