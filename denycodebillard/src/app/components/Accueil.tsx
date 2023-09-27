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
              <div className="nav-link" data-target="actualites" onClick={() => setVarPage(1)}>Actualités</div>
              <div className="nav-link" data-target="languages" onClick={() => setVarPage(2)}>Languages</div>
              <div className="nav-link" data-target="concepts" onClick={() => setVarPage(3)}>Notions</div>
              <div className="nav-link" data-target="rankings" onClick={() => setVarPage(4)}>Classements</div>
              <div className="nav-link" data-target="leaderboard" onClick={() => setVarPage(5)}>LeaderBoard</div>
              <div className="nav-link" data-target="exercise-of-the-week" onClick={() => setVarPage(6)}>Exercice de la semaine</div>
            </ul>
          </nav>
        </div>
    );

    
};