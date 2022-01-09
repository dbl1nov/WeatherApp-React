import React from 'react';
import './App.css';
import { CardList } from './components/CardList/index';
import { Input } from './components/Input/index';
import { useCitiesList } from './hooks/useCitiesList';


function App() {
  const [citiesList, setCitiesList] = useCitiesList();
  return (
    <div className="Main">   
      <h1 className='Main-h1'>Узнайте погоду в своём городе</h1>
      <Input setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList} />
    </div>
  );
}

export default App;
  