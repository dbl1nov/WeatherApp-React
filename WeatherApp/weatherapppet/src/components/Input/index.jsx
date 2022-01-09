import React, {useState} from "react";
import '../../App.css';

export const Input = ({setCitiesList}) => {
    const [inputValue, setInputValue] = useState('');

    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue])
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    return( 
    <div className="InputWrap">
        <input className='Input' placeholder="Введите город..." onChange={handleOnChange} value={inputValue}/>
        <button className="btn" onClick={handleOnClick}>Добавить</button>
    </div>
    )
}