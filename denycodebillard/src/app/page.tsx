"use client";

import { useEffect, useState } from "react";

import { Accueil } from "./components/Accueil";
import { CorpsPage } from "./components/CorpsPage";

export default function Home() {
    const [varPage, setVarPage] = useState(0);

    useEffect(() => {
      console.log(varPage);
    }, [varPage]);

    return (<>
        <Accueil npage = {varPage} setVarPage = {setVarPage}/>
        <CorpsPage npage = {varPage}/>
    </>);


}
  