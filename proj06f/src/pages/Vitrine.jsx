import React from "react";

import Principal from "../components/Principal.jsx";
import ProdutosExemplo from "../datas/ProdutosExemplo.js";

export default function Vitrine() {
    return (
        <>
            <Principal produtos={ProdutosExemplo} />
        </>
    )
}