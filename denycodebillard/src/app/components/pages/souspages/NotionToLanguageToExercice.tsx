import '../css/languages.css';

import { useEffect, useState } from "react";

interface AccueilProps {
    varNotionToLanguage: number;
    setVarNotionToLanguage: (npage: number) => void;
  }

export const NotionToLanguageToExercice = ({ varNotionToLanguage, setVarNotionToLanguage }: AccueilProps) => {


    const divElements = [];

    for (let i = 0; i < varNotionToLanguage; i++) {
        divElements.push(
          <div id="exercice" className="exercice box" data-language="exercice" key={i}>
            <span>Exercice</span>
          </div>
        );
      }

    return (
        <div className="exercises-container">
            {divElements}
        </div>
    );
};