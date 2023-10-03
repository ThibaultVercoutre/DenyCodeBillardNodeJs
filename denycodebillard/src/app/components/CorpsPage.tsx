import { useEffect, useState } from "react";

import { Actualites } from "./pages/Actualites";
import { Classements } from "./pages/Classements";
import { Languages } from "./pages/Languages";
import { Notions } from "./pages/Notions";
import { LeaderBoard } from "./pages/LeaderBoard";
import { WeekExercice } from "./pages/WeekExercice";
import { UserAccount } from "./pages/UserAccount";

interface AccueilProps {
    npage: number;
  }

export const CorpsPage = ({ npage }: AccueilProps) => {
    switch (npage) {
        case 0: return <></>;
        case 1: return <Actualites />;
        case 2: return <Languages />;
        case 3: return <Notions />;
        case 4: return <Classements />;
        case 5: return <LeaderBoard />;
        case 6: return <WeekExercice />;
        case 7: return <UserAccount />;
    }
};