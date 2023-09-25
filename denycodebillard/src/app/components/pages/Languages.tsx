import './css/languages.css';

import { useEffect, useState } from "react";

import { LanguageToNotion } from "./souspages/LanguageToNotion";
import { LanguageToNotionToExercice } from "./souspages/LanguageToNotionToExercice";
import { Arbo } from "./souspages/Arbo";

export const Languages = () => {

    const [varLanguage, setVarLanguage] = useState(0);
    const [varLanguageToNotion, setVarLanguageToNotion] = useState(0);
    const [nameLanguageToNotion, setNameLanguageToNotion] = useState("");
    const [nameLanguageToNotionToExercice, setNameLanguageToNotionToExercice] = useState("");

    const divElementsLanguages = [];
    const divElementsLanguagesToNotion = [];

    if(varLanguage == 0) {
        divElementsLanguages.push(
            <div className="languages-container">
                <div onClick={() => {setVarLanguage(1), setVarLanguageToNotion(0), setNameLanguageToNotion("C")}} id="C" className="language box" data-language="C"><span>C</span></div>
                <div onClick={() => {setVarLanguage(2), setVarLanguageToNotion(0), setNameLanguageToNotion("C++")}} id="C++" className="language box" data-language="C++"><span>C++</span></div>
                <div onClick={() => {setVarLanguage(3), setVarLanguageToNotion(0), setNameLanguageToNotion("CSS")}} id="CSS" className="language box" data-language="CSS"><span>CSS</span></div>
                <div onClick={() => {setVarLanguage(4), setVarLanguageToNotion(0), setNameLanguageToNotion("HTML")}} id="HTML" className="language box" data-language="HTML"><span>HTML</span></div>
                <div onClick={() => {setVarLanguage(5), setVarLanguageToNotion(0), setNameLanguageToNotion("Java")}} id="Java" className="language box" data-language="Java"><span>Java</span></div>
                <div onClick={() => {setVarLanguage(6), setVarLanguageToNotion(0), setNameLanguageToNotion("JavaScript")}} id="JavaScript" className="language box" data-language="JavaScript"><span>JavaScript</span></div>
                <div onClick={() => {setVarLanguage(7), setVarLanguageToNotion(0), setNameLanguageToNotion("Matlab")}} id="Matlab" className="language box" data-language="Matlab"><span>Matlab</span></div>
                <div onClick={() => {setVarLanguage(8), setVarLanguageToNotion(0), setNameLanguageToNotion("PHP")}} id="PHP" className="language box" data-language="PHP"><span>PHP</span></div>
                <div onClick={() => {setVarLanguage(9), setVarLanguageToNotion(0), setNameLanguageToNotion("Python")}} id="Python" className="language box" data-language="Python"><span>Python</span></div>
                <div onClick={() => {setVarLanguage(10), setVarLanguageToNotion(0), setNameLanguageToNotion("R")}} id="R" className="language box" data-language="R"><span>R</span></div>
            </div>
        );
    }

    if(varLanguageToNotion == 0){
        divElementsLanguagesToNotion.push(
            <LanguageToNotion nameLanguageToNotionToExercice = {nameLanguageToNotionToExercice} setNameLanguageToNotionToExercice = {setNameLanguageToNotionToExercice} nLanguage = {varLanguage} varLanguageToNotion = {varLanguageToNotion} setVarLanguageToNotion = {setVarLanguageToNotion}/>
        )
    }

    return (
        <section id="languages" className="content-section">
            <div className="div_accueil"><a href="#" className="accueil" data-target="accueil">Accueil</a></div>
            <Arbo setVarLanguageToNotion = {setVarLanguageToNotion} setVarLanguage = {setVarLanguage} nbLanguage = {varLanguage} nameLanguageToNotion = {nameLanguageToNotion} varLanguageToNotion = {varLanguageToNotion} nameLanguageToNotionToExercice = {nameLanguageToNotionToExercice}/>
            {divElementsLanguages}
            {divElementsLanguagesToNotion}
            <LanguageToNotionToExercice varLanguageToNotion = {varLanguageToNotion} setVarLanguageToNotion = {setVarLanguageToNotion}/>
        </section>
    );
};