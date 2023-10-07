import { useState, useEffect } from "react";

export const Titre = () => {
    const mots = [ "DenyCodeBillard", "Apprenez avec Deny", "Codez avec envie", "Un billard comme ami"];
    
    
    const [Ntexte, setNTexte] = useState(0);
    const [texte, setTexte] = useState(mots[Ntexte]);

    useEffect(() => {
    //     const afficher = () => {
    //         setTexte(mots[Ntexte]);
    //     };

    //     const ecrireTexte = () => {
    //         if(texte.length == 0){
    //             setNTexte((Ntexte + 1)%4);
    //             afficher();
    //         }else{
    //             setTexte(texte.substring(0, texte.length - 1));
    //             setTimeout(() =>{
    //                 ecrireTexte();
    //             }, 100);
    //         }
    //     }
    });

    return (
        <h1>{texte}</h1>
    );
};