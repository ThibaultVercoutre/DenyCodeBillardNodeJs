import '../css/languages.css';
import axios from "axios";

import { Language as LanguageType } from "../../types/Language";
import { useEffect, useState } from "react";

interface AccueilProps {
    varNotion: number;
    varNotionToLanguage: number;
    nameNotionToLanguage: string;
    nameNotionToLanguageToExercice: string;
    setNameNotionToLanguageToExercice: (nameLanguageToNotionToExercice: string) => void;
    setVarNotionToLanguage: (npage: number) => void;
  }

export const NotionToLanguage = ({ nameNotionToLanguage, varNotion, setVarNotionToLanguage, setNameNotionToLanguageToExercice}: AccueilProps) => {

    const divElements = [];

    const [languages, setLanguages] = useState<LanguageType[]>([]);

    useEffect(() => {
      (async () => {
        if(varNotion != 0){
          const languages = await fetchNotionToLanguages();
          setLanguages(languages);
        }
      })();
    }, [varNotion]);

    const fetchNotionToLanguages = async () => {
        return (await axios.get(`http://localhost:5000/notion/${nameNotionToLanguage}/languages`)).data;
    };

    if(varNotion > 0){
      for (let i = 0; i < languages.length; i++) {
          divElements.push(
            <div onClick={() => {setVarNotionToLanguage(i + 1), setNameNotionToLanguageToExercice(languages[i].name)}} id={languages[i].name} className="notion box" data-language={nameNotionToLanguage} key={i}>
              <span>{languages[i].name}</span>
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
