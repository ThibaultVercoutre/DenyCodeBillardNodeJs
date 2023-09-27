import './css/languages.css';

import { useEffect, useState } from "react";

import { NotionToLanguage } from "./souspages/NotionToLanguage";
import { NotionToLanguageToExercice } from "./souspages/NotionToLanguageToExercice";
import { Arbo } from "./souspages/ArboNotions";

export const Notions = () => {

    const [varNotion, setVarNotion] = useState(0);
    const [varNotionToLanguage, setVarNotionToLanguage] = useState(0);
    const [nameNotionToLanguage, setNameNotionToLanguage] = useState("");
    const [nameNotionToLanguageToExercice, setNameNotionToLanguageToExercice] = useState("");

    const divElementsNotion = [];
    const divElementsNotionLanguages = [];

    if(varNotion == 0) {
        divElementsNotion.push(
            <div className="languages-container">
                <div onClick={() => {setVarNotion(1), setVarNotionToLanguage(0), setNameNotionToLanguage("APIs")}} id="APIs" className="notion box" data-language="APIs"><span>APIs</span></div>
                <div onClick={() => {setVarNotion(2), setVarNotionToLanguage(0), setNameNotionToLanguage("boucles")}} id="boucles" className="notion box" data-language="boucles"><span>boucles</span></div>
                <div onClick={() => {setVarNotion(3), setVarNotionToLanguage(0), setNameNotionToLanguage("dictionnaires")}} id="dictionnaires" className="notion box" data-language="dictionnaires"><span>dictionnaires</span></div>
                <div onClick={() => {setVarNotion(4), setVarNotionToLanguage(0), setNameNotionToLanguage("graphes")}} id="graphes" className="notion box" data-language="graphes"><span>graphes</span></div>
                <div onClick={() => {setVarNotion(5), setVarNotionToLanguage(0), setNameNotionToLanguage("listes")}} id="listes" className="notion box" data-language="listes"><span>listes</span></div>
                <div onClick={() => {setVarNotion(6), setVarNotionToLanguage(0), setNameNotionToLanguage("objets")}} id="objets" className="notion box" data-language="objets"><span>objets</span></div>
            </div>
        );
    }

    if(varNotionToLanguage == 0){
        divElementsNotionLanguages.push(
            <NotionToLanguage nameNotionToLanguageToExercice = {nameNotionToLanguageToExercice} setNameNotionToLanguageToExercice = {setNameNotionToLanguageToExercice} varNotion = {varNotion} varNotionToLanguage = {varNotionToLanguage} setVarNotionToLanguage = {setVarNotionToLanguage}/>
        )
    }

    return (
        <section id="languages" className="content-section">
            <div className="div_accueil"><a href="#" className="accueil" data-target="accueil">Accueil</a></div>
            <Arbo setVarNotionToLanguage = {setVarNotionToLanguage} setVarNotion = {setVarNotion} varNotion = {varNotion} nameNotionToLanguage = {nameNotionToLanguage} varNotionToLanguage = {varNotionToLanguage} nameNotionToLanguageToExercice = {nameNotionToLanguageToExercice}/>
            {divElementsNotion}
            {divElementsNotionLanguages}
            <NotionToLanguageToExercice varNotionToLanguage = {varNotionToLanguage} setVarNotionToLanguage = {setVarNotionToLanguage}/>
        </section>
    );
};