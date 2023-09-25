import '../css/languages.css';

import { useEffect, useState } from "react";

interface AccueilProps {
    nbLanguage: number;
    nameLanguageToNotion: string;
    varLanguageToNotion: number;
    nameLanguageToNotionToExercice: string;
    setVarLanguageToNotion: (npage: number) => void;
    setVarLanguage: (nameLanguage: number) => void;
  }

export const Arbo = ({ nbLanguage, nameLanguageToNotion, varLanguageToNotion, nameLanguageToNotionToExercice, setVarLanguageToNotion, setVarLanguage }: AccueilProps) => {

    const divElements = [];

    if(nbLanguage > 0){
        divElements.push(
            <span type-name="slash" className="arbo">/</span>
        );
        divElements.push(
            <span onClick={() => {setVarLanguageToNotion(0), setVarLanguage(0)}} className="lang arbo" data-name="HTML">{nameLanguageToNotion}</span>
        );
    }

    if(varLanguageToNotion > 0){
        divElements.push(
            <span type-name="slash" className="arbo">/</span>
        );
        divElements.push(
            <span onClick={() => {setVarLanguageToNotion(0)}} className="not arbo" data-name="HTML">{nameLanguageToNotionToExercice}</span>
        );
    }

    return (
        <div id='arbo_lang'>
            {divElements}
        </div>
    );
};