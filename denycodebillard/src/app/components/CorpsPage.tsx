import { useEffect, useState } from "react";
import axios from "axios";

import { Actualites } from "./pages/Actualites";
import { Classements } from "./pages/Classements";
import { Languages } from "./pages/Languages";
import { Notions } from "./pages/Notions";
import { LeaderBoard } from "./pages/LeaderBoard";
import { WeekExercice } from "./pages/WeekExercice";
import { UserAccount } from "./pages/UserAccount";
import { Exercice } from "./pages/souspages/exercices/Exercice";

import { Exercice as ExerciceType } from "./types/ExerciceInfo";

interface AccueilProps {
    npage: number;
}

export const CorpsPage = ({ npage }: AccueilProps) => {

    const [exercice, setExercice] = useState(0);
    const [infoExercice, setInfoExercice] = useState<ExerciceType>();

    const components: {[key: number]: JSX.Element} = {
        0: <></>,
        1: <Actualites />,
        2: <Languages exercice={exercice} setExercice={setExercice} />,
        3: <Notions exercice={exercice} setExercice={setExercice} />,
        4: <Classements />,
        5: <LeaderBoard />,
        6: <WeekExercice />,
        7: <UserAccount />
    };

    const [page, setPage] = useState(components[npage]);
    
    const [pageExo, setPageExo] = useState(<></>);

    useEffect(() => {
        setPage(components[npage]);
    }, [npage]);

    useEffect(() => {
        console.log(exercice);
        (async () => {
            const exercices = await fetchExercices();
            setInfoExercice(exercices);
            if(infoExercice != undefined){
                console.log("Here")
                setPageExo(<Exercice infoExercice={infoExercice} />);
            }else{
                console.log("not here")
                setPageExo(<></>);
            }
        })();
    }, [exercice]);

    const fetchExercices = async () => {
        return (await axios.get(`http://localhost:5000/exercice/${exercice}`)).data;
    };

    return <>
            {page}
            {pageExo}
        </>;
};