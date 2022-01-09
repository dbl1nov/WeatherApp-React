import React from "react";
import { Card } from '../Card/index';
import '../../App.css';

export const CardList = ({citiesList}) => (
    <div className='Cardlist'>
        { 
        citiesList.map(city => <Card key={city} city={city}/>)
        }
      </div>   
) 