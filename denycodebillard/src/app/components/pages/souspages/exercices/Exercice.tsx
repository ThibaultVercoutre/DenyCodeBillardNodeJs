import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import '../../css/exercice.css'

import AceEditor from 'react-ace';
import Console from './Console';

import { Terminal } from 'xterm';

import { Exercice as ExerciceType } from "../../../types/ExerciceInfo";
import 'ace-builds/src-noconflict/theme-monokai.js';
import 'ace-builds/src-noconflict/mode-python.js';
import 'ace-builds/src-noconflict/mode-c_cpp.js';

interface ExerciceProps {
    infoExercice: ExerciceType | undefined;
}

export const Exercice = ({infoExercice} : ExerciceProps) => {
    if(infoExercice == undefined){
        return <div></div>;
    }  

    const [mode, setMode] = useState('');
    const [code, setCode] = useState('');
    
    useEffect(() => {
        switch(infoExercice.language){
            case 'Python': setMode('python'); break;
            case 'C': setMode('c_cpp'); break;
            case 'C++': setMode('c_cpp'); break;
        }
    }, [infoExercice]);

    const terminalRef = useRef(null);

    return (
        <section id="exercice" className='content-section'>
            <div className="exercice">
                <div className="exercice-title">
                    <h1>{infoExercice.name}</h1>
                </div>
                <div className="exercice-info">
                    <h2>
                        <span>{infoExercice.language}</span>
                        <span> - </span>
                        <span>{infoExercice.notion}</span>
                    </h2>
                </div>
                <div className='exercice-enonce'>
                    <p>{infoExercice.enonce}</p>
                </div>
            </div>
            <div className="title_language" data-name={infoExercice.language}>{infoExercice.language}</div>
            <div id="code">
                <AceEditor
                    mode={mode}
                    theme="monokai"
                    fontSize={14}
                    width="100%"
                    editorProps={{ $blockScrolling: true }}
                    onChange={(newCode) => setCode(newCode)}
                />
            </div>

            <div id="console">
                <Console />
            </div>
        </section>);
};

function setConsoleLog(arg0: any[]) {
    throw new Error('Function not implemented.');
}
