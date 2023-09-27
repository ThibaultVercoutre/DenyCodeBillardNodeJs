import '../css/languages.css';

import { useEffect, useState } from "react";

interface AccueilProps {
    varNotion: number;
    varNotionToLanguage: number;
    nameNotionToLanguageToExercice: string;
    setNameNotionToLanguageToExercice: (nameLanguageToNotionToExercice: string) => void;
    setVarNotionToLanguage: (npage: number) => void;
  }

export const NotionToLanguage = ({ varNotion, setVarNotionToLanguage, setNameNotionToLanguageToExercice}: AccueilProps) => {

    const divElements = [];

    for (let i = 0; i < varNotion; i++) {
        divElements.push(
          <div onClick={() => {setVarNotionToLanguage(i + 1), setNameNotionToLanguageToExercice("Language")}} id="Language" className="language box" data-language="Language" key={i}>
            <span>Language</span>
          </div>
        );
      }

    return (
        <div className="notions-container">
            {divElements}
        </div>
    );
};
