"use strict";

import { clientService } from "../service/client-service.js";


const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (e)=> 
{
    e.preventDefault();

    const name = e.target.querySelector("[data-nome]").value;
    const email = e.target.querySelector("[data-email]").value;

    try {
        await clientService.createClient(name, email);
        window.location.href = "../telas/cadastro_concluido.html";

    } catch(err) {
        console.error(err);
        window.location.href = "../telas/erro.html";
    };  
});
