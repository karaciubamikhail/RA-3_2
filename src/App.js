import { Listing } from './Listing';
import './App.css';
import data from './etsy.json'

function App() {
  return (
    < Listing items = {data}/>
  );
}

export default App;
