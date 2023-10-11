import '../css/languages.css';
import axios from "axios";
import { Exercice as ExerciceType } from "../../types/Exercice";

import { useEffect, useState } from "react";

interface AccueilProps {
    varLanguageToNotion: number;
    nameLanguageToNotion: string;
    nameLanguageToNotionToExercice: string;
    setVarLanguageToNotion: (npage: number) => void;
    exercice: number;
    setExercice: (exercice: number) => void;
  }

export const LanguageToNotionToExercice = ({ exercice, setExercice, nameLanguageToNotion, nameLanguageToNotionToExercice, varLanguageToNotion, setVarLanguageToNotion }: AccueilProps) => {

    const [exercices, setexercices] = useState<ExerciceType[]>([]);

    useEffect(() => {
        (async () => {
          if(varLanguageToNotion != 0){
            const exercices = await fetchLanguages();
            setexercices(exercices);
          }
        })();
      }, [varLanguageToNotion]);

    const fetchLanguages = async () => {
        return (await axios.get(`http://localhost:5000/language/${nameLanguageToNotion}/notion/${nameLanguageToNotionToExercice}`)).data;
    };


    const divElements = [];

    if(varLanguageToNotion != 0){
      for (let i = 0; i < exercices.length; i++) {
          divElements.push(
              <div className="exercice box" data-language={nameLanguageToNotion} onClick={() => setExercice(exercices[i].id)} key={i}>
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