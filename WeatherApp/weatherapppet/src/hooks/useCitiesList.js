import { useState, useEffect } from "react";

export const useCitiesList = () => {
    const [сitiesList, setCitiesList] = useState(JSON.parse(localStorage.getItem('сitiesList')) || []);
    useEffect(() => {
      localStorage.setItem('citiesList', JSON.stringify(сitiesList));
    }, [сitiesList])
    return[сitiesList, setCitiesList];
}   