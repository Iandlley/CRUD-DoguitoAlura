"use strict";

import {clientService} from "../service/client-service.js";

const createNewHtmlElement = (name, email, id) => {
    const newClientEl = document.createElement("tr");
    
    const htmlContent = `
    <td class="td" data-td>${name}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}"  class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`;

    newClientEl.innerHTML = htmlContent;
    newClientEl.dataset.id = id;

    return newClientEl;
};

const table = document.querySelector('[data-table]');

table.addEventListener("click", async function(e) 
{
    let deleteBtn = e.target.className === "botao-simples botao-simples--excluir";
    try{
        if (deleteBtn) {
            const clientEl= e.target.closest('[data-id]');
            let id = clientEl.dataset.id;
            await clientService.removeClient(id);
            clientEl.remove();
        };  
    } catch(err) {
        console.error(err);
        window.location.href = "../telas/erro.html";
    };
});


const render = async ()=> 
{
    try {
        const clientSvc = await clientService.clientsList();
    
        clientSvc.forEach(el => {
            table.appendChild(createNewHtmlElement(el.nome, el.email, el.id));  
        });
    } catch(err) {
        console.error(err);
        window.location.href = "../telas/erro.html";
    };
};
render();
