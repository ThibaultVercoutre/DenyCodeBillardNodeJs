import '../css/languages.css';

import { useEffect, useState } from "react";

interface AccueilProps {
    nLanguage: number;
    varLanguageToNotion: number;
    nameLanguageToNotionToExercice: string;
    setNameLanguageToNotionToExercice: (nameLanguageToNotionToExercice: string) => void;
    setVarLanguageToNotion: (npage: number) => void;
  }

export const LanguageToNotion = ({ nLanguage, varLanguageToNotion, setVarLanguageToNotion, setNameLanguageToNotionToExercice}: AccueilProps) => {

    const divElements = [];

    for (let i = 0; i < nLanguage; i++) {
        divElements.push(
          <div onClick={() => {setVarLanguageToNotion(i + 1), setNameLanguageToNotionToExercice("C")}} id="C" className="language box" data-language="C" key={i}>
            <span>{i + 1}</span>
          </div>
        );
      }

    return (
        <div className="notions-container">
            {divElements}
        </div>
    );
};
