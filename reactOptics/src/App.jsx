import { MainHeader, List } from './App';
import { useEffect, useState } from 'react';
import { getApi } from './API/api';
const App = () => {
  
const [paints, setpaints] = useState([]);

useEffect(() => {
  getApi()
    .then(res => {
      return res.json();
    })
    .then(data => setpaints(data.paints))
    .catch(error => console.error('Error fetching data:', error));
}, []);

  return (
    <>
    <h1>Каталог</h1>
      <List>
        {paints.map(({url, id, name}) => (
          <li key={id}>
            <h2>{name}</h2>
            <img src={url} alt={name} />
          </li>
        ))}
    </List>
    </>
  )
}

export default App
