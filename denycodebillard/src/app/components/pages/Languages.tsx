import './css/languages.css';

import { useEffect, useState } from "react";
import axios from "axios";
import { LanguageToNotion } from "./souspages/LanguageToNotion";
import { LanguageToNotionToExercice } from "./souspages/LanguageToNotionToExercice";
import { Arbo } from "./souspages/ArboLanguages";
import { Language as LanguageType } from "../types/Language";

export const Languages = () => {

    const [varLanguage, setVarLanguage] = useState(0);
    const [varLanguageToNotion, setVarLanguageToNotion] = useState(0);
    const [nameLanguageToNotion, setNameLanguageToNotion] = useState("");
    const [nameLanguageToNotionToExercice, setNameLanguageToNotionToExercice] = useState("");

    const divElementsLanguages = [];
    const divElementsLanguages2 = [];
    const divElementsLanguagesToNotion = [];

    const [languages, setLanguages] = useState<LanguageType[]>([]);

    useEffect(() => {
        (async () => {
          const languages = await fetchLanguages();
          setLanguages(languages);
        })();
      }, []);

    const fetchLanguages = async () => {
        return (await axios.get(`http://localhost:5000/languages`)).data;
    };

    if(varLanguage == 0) {
        for(let i = 0; i < languages.length; i++) {
            divElementsLanguages2.push(
                <div onClick={() => {setVarLanguage(i+1), setVarLanguageToNotion(0), setNameLanguageToNotion(languages[i].name)}} id={languages[i].name} className="language box" data-language={languages[i].name}><span>{languages[i].name}</span></div>
            )
        }
        divElementsLanguages.push(
            <div className="languages-container">
                {divElementsLanguages2}
            </div>
        );
    }

    if(varLanguageToNotion == 0){
        divElementsLanguagesToNotion.push(
            <LanguageToNotion nameLanguageToNotion = {nameLanguageToNotion} nameLanguageToNotionToExercice = {nameLanguageToNotionToExercice} setNameLanguageToNotionToExercice = {setNameLanguageToNotionToExercice} nLanguage = {varLanguage} varLanguageToNotion = {varLanguageToNotion} setVarLanguageToNotion = {setVarLanguageToNotion}/>
        )
    }

    return (
        <section id="languages" className="content-section">
            <div className="div_accueil"><a href="#" className="accueil" data-target="accueil">Accueil</a></div>
            <Arbo setVarLanguageToNotion = {setVarLanguageToNotion} setVarLanguage = {setVarLanguage} nbLanguage = {varLanguage} nameLanguageToNotion = {nameLanguageToNotion} varLanguageToNotion = {varLanguageToNotion} nameLanguageToNotionToExercice = {nameLanguageToNotionToExercice}/>
            {divElementsLanguages}
            {divElementsLanguagesToNotion}
            <LanguageToNotionToExercice varLanguageToNotion = {varLanguageToNotion} setVarLanguageToNotion = {setVarLanguageToNotion} nameLanguageToNotion = {nameLanguageToNotion} nameLanguageToNotionToExercice = {nameLanguageToNotionToExercice} />
        </section>
    );
};