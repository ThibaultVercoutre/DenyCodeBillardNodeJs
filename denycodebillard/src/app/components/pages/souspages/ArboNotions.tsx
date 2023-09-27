import '../css/languages.css';

import { useEffect, useState } from "react";

interface AccueilProps {
    varNotion: number;
    nameNotionToLanguage: string;
    varNotionToLanguage: number;
    nameNotionToLanguageToExercice: string;
    setVarNotionToLanguage: (npage: number) => void;
    setVarNotion: (nameLanguage: number) => void;
  }

export const Arbo = ({ varNotion, nameNotionToLanguage, varNotionToLanguage, nameNotionToLanguageToExercice, setVarNotionToLanguage, setVarNotion }: AccueilProps) => {

    const divElements = [];

    if(varNotion > 0){
        divElements.push(
            <span type-name="slash" className="arbo">/</span>
        );
        divElements.push(
            <span onClick={() => {setVarNotionToLanguage(0), setVarNotion(0)}} className="lang arbo" data-name="HTML">{nameNotionToLanguage}</span>
        );
    }

    if(varNotionToLanguage > 0){
        divElements.push(
            <span type-name="slash" className="arbo">/</span>
        );
        divElements.push(
            <span onClick={() => {setVarNotionToLanguage(0)}} className="not arbo" data-name="HTML">{nameNotionToLanguageToExercice}</span>
        );
    }

    return (
        <div id='arbo_lang'>
            {divElements}
        </div>
    );
};