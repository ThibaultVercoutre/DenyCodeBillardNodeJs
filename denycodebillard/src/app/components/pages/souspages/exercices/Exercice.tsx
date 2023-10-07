import React from 'react';

import { Exercice as ExerciceType } from "../../../types/ExerciceInfo";

interface ExerciceProps {
    infoExercice: ExerciceType;
}

export const Exercice = ({infoExercice} : ExerciceProps) => {
    return <div>{infoExercice.language}</div>;
};