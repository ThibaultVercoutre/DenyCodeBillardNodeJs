import React from "react";
import { GraphComponent } from "./graphique/graph";

export const Classements = () => {
    return (
        <div id="rankings">
            <div className="div_accueil"><a href="#" className="accueil" data-target="accueil">Accueil</a></div>
            <p>Dans cette section, vous allez pouvoir découvrir un classement général des notions, des exercices et même des langages de programmation les plus populaires sur notre plateforme. Ce sera un top qui sera présenté mensuellement et all time.</p>
            <GraphComponent type = {"languages"}/>
            <GraphComponent type = {"notions"}/>
            <GraphComponent type = {"exercices"}/>
        </div>
    );
};