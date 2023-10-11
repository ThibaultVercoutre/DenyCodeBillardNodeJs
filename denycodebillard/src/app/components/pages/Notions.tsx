import './css/languages.css';

import { useEffect, useState } from "react";
import axios from "axios";
import { NotionToLanguage } from "./souspages/NotionToLanguage";
import { NotionToLanguageToExercice } from "./souspages/NotionToLanguageToExercice";
import { Arbo } from "./souspages/ArboNotions";
import { Notion as NotionType } from "../types/Notion";

interface NotionProps {
    exercice: number;
    setExercice: (exercice: number) => void;
}

export const Notions = ({ exercice, setExercice }: NotionProps) => {

    const [varNotion, setVarNotion] = useState(0);
    const [varNotionToLanguage, setVarNotionToLanguage] = useState(0);
    const [nameNotionToLanguage, setNameNotionToLanguage] = useState("");
    const [nameNotionToLanguageToExercice, setNameNotionToLanguageToExercice] = useState("");

    const divElementsNotions = [];
    const divElementsNotions2 = [];
    const divElementsNotionsLanguages = [];

    const [notions, setNotions] = useState<NotionType[]>([]);

    useEffect(() => {
        (async () => {
          const notions = await fetchLanguages();
          setNotions(notions);
        })();
      }, []);

    const fetchLanguages = async () => {
        return (await axios.get(`http://localhost:5000/notions`)).data;
    };

    if(varNotion == 0) {
        for(let i = 0; i < notions.length; i++) {
            var key = "not" + i;
            divElementsNotions2.push(
                <div key={notions[i]._id} onClick={() => {setVarNotion(i+1), setVarNotionToLanguage(0), setNameNotionToLanguage(notions[i].name)}} id={notions[i].name} className="language box" data-language={notions[i].name}><span>{notions[i].name}</span></div>
            )
        }
        divElementsNotions.push(
            <div key="languages-container" className="languages-container">
                {divElementsNotions2}
            </div>
        );
    }

    if(varNotionToLanguage == 0){
        divElementsNotionsLanguages.push(
            <NotionToLanguage key="languages-container" exercice={exercice} setExercice={setExercice} nameNotionToLanguage = {nameNotionToLanguage} nameNotionToLanguageToExercice = {nameNotionToLanguageToExercice} setNameNotionToLanguageToExercice = {setNameNotionToLanguageToExercice} varNotion = {varNotion} varNotionToLanguage = {varNotionToLanguage} setVarNotionToLanguage = {setVarNotionToLanguage}/>
        )
    }

    return (
        <section id="languages" className="content-section">
            <div className="div_accueil"><a href="#" className="accueil" data-target="accueil">Accueil</a></div>
            <Arbo setVarNotionToLanguage = {setVarNotionToLanguage} setVarNotion = {setVarNotion} varNotion = {varNotion} nameNotionToLanguage = {nameNotionToLanguage} varNotionToLanguage = {varNotionToLanguage} nameNotionToLanguageToExercice = {nameNotionToLanguageToExercice}/>
            {divElementsNotions}
            {divElementsNotionsLanguages}
            <NotionToLanguageToExercice exercice={exercice} setExercice={setExercice} nameNotionToLanguageToExercice = {nameNotionToLanguageToExercice} nameNotionToLanguage = {nameNotionToLanguage} varNotionToLanguage = {varNotionToLanguage} setVarNotionToLanguage = {setVarNotionToLanguage}/>
        </section>
    );
};