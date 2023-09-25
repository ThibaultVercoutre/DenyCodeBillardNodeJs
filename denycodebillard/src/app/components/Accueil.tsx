import { useEffect, useState } from "react";

interface AccueilProps {
    npage: number;
    setVarPage: (npage: number) => void;
  }

export const Accueil = ({ npage, setVarPage }: AccueilProps) => {
    
    return (
        <div className="Accueil">
          <header>
            <h1>DenyCodeBillard</h1>
          </header>
          <nav>
            <ul>
              <button onClick={() => setVarPage(1)}>Actualités</button>
              <button onClick={() => setVarPage(2)}>Languages</button>
              <button onClick={() => setVarPage(3)}>Notions</button>
              <button onClick={() => setVarPage(4)}>Classements</button>
              <button onClick={() => setVarPage(5)}>LeaderBoard</button>
              <button onClick={() => setVarPage(6)}>Exercice de la semaine</button>
            </ul>
          </nav>
        </div>
    );

    
};