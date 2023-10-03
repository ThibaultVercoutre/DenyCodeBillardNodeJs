import '../css/languages.css';
import axios from "axios";
import { Exercice as ExerciceType } from "../../types/Exercice";

import { useEffect, useState } from "react";

interface AccueilProps {
    varNotionToLanguage: number;
    nameNotionToLanguage: string;
    nameNotionToLanguageToExercice: string;
    setVarNotionToLanguage: (npage: number) => void;
  }

export const NotionToLanguageToExercice = ({ nameNotionToLanguage, nameNotionToLanguageToExercice, varNotionToLanguage, setVarNotionToLanguage }: AccueilProps) => {
    
    const [exercices, setexercices] = useState<ExerciceType[]>([]);

    useEffect(() => {
        (async () => {
          if(varNotionToLanguage != 0){
            const exercices = await fetchLanguages();
            setexercices(exercices);
          }
        })();
      }, [varNotionToLanguage]);

    const fetchLanguages = async () => {
        return (await axios.get(`http://localhost:5000/notion/${nameNotionToLanguage}/language/${nameNotionToLanguageToExercice}`)).data;
    };


    const divElements = [];

    if(varNotionToLanguage != 0){
      for (let i = 0; i < exercices.length; i++) {
          divElements.push(
            <div className="exercice box" data-language={nameNotionToLanguage} key={i}>
              <span>{exercices[i].name}</span>
            </div>
          );
        }
    }else{
      const divElements = [];
    }

    return (
        <div className="exercises-container">
            {divElements}
        </div>
    );
};