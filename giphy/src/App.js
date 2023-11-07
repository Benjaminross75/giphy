
import './App.css';
//import data from './data';
import GiffForm from './GiffForm';
import GifList from './GifList';
import {connect} from 'react-redux'
import React from 'react';
import reducer from './reducer';
//QZKbnfxvKRmHMETEiXLvoyRSy86lUYhD
function App(props) {

  const {loading, error} = props



  return (
    <div className="App">
     <h1>Search for Giffs</h1>
     <GiffForm/>
     {
      (error !== "") && <h3>{error}</h3>
     }
     {
      loading ? <h3>We are loading</h3> : <GifList/>
     }
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error

  };
}

export default connect(mapStateToProps) (App);
