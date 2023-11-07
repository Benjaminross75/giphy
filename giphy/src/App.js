
import './App.css';
import data from './data';
import GiffForm from './GiffForm';
import GifList from './GifList';
//QZKbnfxvKRmHMETEiXLvoyRSy86lUYhD
function App(props) {
const giffs = data;
const loading = false;
const error = "";
  return (
    <div className="App">
     <h1>Search for Giffs</h1>
     <GiffForm/>

     {
      loading ? <h3>We are loading</h3> : <GifList giffs={giffs}/>
     }
    </div>
  );
}

export default App;
