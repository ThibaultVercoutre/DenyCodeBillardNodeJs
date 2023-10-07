import '../css/languages.css';
import axios from "axios";

import { Notion as NotionType } from "../../types/Notion";
import { useEffect, useState } from "react";

interface AccueilProps {
    nLanguage: number;
    varLanguageToNotion: number;
    nameLanguageToNotion: string;
    nameLanguageToNotionToExercice: string;
    setNameLanguageToNotionToExercice: (nameLanguageToNotionToExercice: string) => void;
    setVarLanguageToNotion: (npage: number) => void;
    exercice: number;
    setExercice: (exercice: number) => void;
  }

export const LanguageToNotion = ({ nLanguage, nameLanguageToNotion, varLanguageToNotion, setVarLanguageToNotion, setNameLanguageToNotionToExercice}: AccueilProps) => {

    const divElements = [];
    
    const [notions, setNotions] = useState<NotionType[]>([]);

    useEffect(() => {
      (async () => {
        if(nLanguage != 0){
          const notions = await fetchLanguageToNotions();
          setNotions(notions);
        }
      })();
    }, [nLanguage]);

    const fetchLanguageToNotions = async () => {
        return (await axios.get(`http://localhost:5000/language/${nameLanguageToNotion}/notions`)).data;
    };

    if(nLanguage > 0){
      for (let i = 0; i < notions.length; i++) {
          divElements.push(
            <div onClick={() => {setVarLanguageToNotion(i + 1), setNameLanguageToNotionToExercice(notions[i].name)}} id={notions[i].name} className="notion box" data-language={varLanguageToNotion} key={i}>
              <span>{notions[i].name}</span>
            </div>
          );
      }
    }else{
      const divElements = [];
    }

    return (
        <div className="notions-container">
            {divElements}
        </div>
    );
};
