import '../css/languages.css';

import { useEffect, useState } from "react";

interface AccueilProps {
    varLanguageToNotion: number;
    setVarLanguageToNotion: (npage: number) => void;
  }

export const LanguageToNotionToExercice = ({ varLanguageToNotion, setVarLanguageToNotion }: AccueilProps) => {


    const divElements = [];

    for (let i = 0; i < varLanguageToNotion; i++) {
        divElements.push(
          <div id="C++" className="language box" data-language="C" key={i}>
            <span>{i + 1}</span>
          </div>
        );
      }

    return (
        <div className="exercises-container">
            {divElements}
        </div>
    );
};