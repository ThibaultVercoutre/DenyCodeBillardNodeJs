"use client";

import { useEffect, useState, useCallback, SyntheticEvent } from "react";

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

import { Accueil } from "./components/Accueil";
import { CorpsPage } from "./components/CorpsPage";
import { Engine } from "tsparticles-engine";

export default function Home() {
    const [varPage, setVarPage] = useState(0);

    useEffect(() => {
      setVarPage(varPage);
    }, [varPage]);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        // await console.log(container);
    }, []);

    return (<>
        <Accueil npage = {varPage} setVarPage = {setVarPage}/>
        <CorpsPage npage = {varPage}/>
    </>);
}