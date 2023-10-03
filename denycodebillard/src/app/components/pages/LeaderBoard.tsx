import './css/leaderboard.css';

import { useEffect, useState } from "react";
import axios from "axios";

import { LeaderBoard as LeaderBoardType } from "../types/LeaderBoard";

export const LeaderBoard = () => {

    const [leaderboard, setLeaderboard] = useState<LeaderBoardType[]>([]);

    const divElementLeaderBoard = [];
    const top1 = []
    const top2 = []
    const top3 = []

    useEffect(() => {
        (async () => {
          const leaderboard = await fetchLeaderboard();
          setLeaderboard(leaderboard);
        })();
      }, []);

    const fetchLeaderboard = async () => {
        return (await axios.get(`http://localhost:5000/usersleaderboard`)).data;
    };

    const calculXP = (xp: number) => {
        const a = 1; // Ajustez ce facteur selon vos besoins
        const b = 0.98; // Facteur de croissance (entre 0 et 1)
        const c = 10; // Facteur de normalisation

        return Math.floor(a * Math.log10(xp+1) * b/Math.pow(b, (xp+1)/c));
    }

    if(leaderboard && leaderboard.length > 0) {
        for(var i = 3; i < leaderboard.length; i++) {
            divElementLeaderBoard.push(
                <div className="leaderboard-container">
                    <div className="leaderboard-rank">{i+1}</div>
                    <div className="leaderboard-pseudo">{leaderboard[i].pseudo}</div>
                    <div className="leaderboard-lvl">{calculXP(leaderboard[i].xp)} LvL</div>
                    <div className="leaderboard-xp">{leaderboard[i].xp} XP</div>
                </div>
            )
        }

        top1.push(
            <div className="user carre_lead">
                <div className="leaderboard-rank">1</div>
                <div className="leaderboard-pseudo">{leaderboard[0].pseudo}</div>
                <div className="leaderboard-lvl">{calculXP(leaderboard[0].xp)} LvL</div>
                <div className="leaderboard-xp">{leaderboard[0].xp} XP</div>
            </div>
        );

        top2.push(
            <div className="user carre_lead">
                <div className="leaderboard-rank">2</div>
                <div className="leaderboard-pseudo">{leaderboard[1].pseudo}</div>
                <div className="leaderboard-lvl">{calculXP(leaderboard[1].xp)} LvL</div>
                <div className="leaderboard-xp">{leaderboard[1].xp} XP</div>
            </div>
        );

        top3.push(
            <div className="user carre_lead">
                <div className="leaderboard-rank">3</div>
                <div className="leaderboard-pseudo">{leaderboard[2].pseudo}</div>
                <div className="leaderboard-lvl">{calculXP(leaderboard[2].xp)} LvL</div>
                <div className="leaderboard-xp">{leaderboard[2].xp} XP</div>
            </div>
        );
    }
    return (
        <section id="leaderboard" className="content-section">
            <div className="div_accueil"><a href="#" className="accueil" data-target="accueil">Accueil</a></div>
            <div className='podium'>
                <div className="user carre_lead"></div>
                {top1}
                <div className="user carre_lead"></div>
                {top2}
                <div className="user carre_lead or"></div>
                {top3}
                <div className="user carre_lead argent"></div>
                <div className="user carre_lead"></div>
                <div className="user carre_lead bronze"></div>
            </div>
            {divElementLeaderBoard}
        </section>
    );
};