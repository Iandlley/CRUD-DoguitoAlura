import { clientService } from "../service/client-service.js";

( async ()=> { 
    const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const nameInput = document.querySelector("[data-nome]");
const emailInput = document.querySelector("[data-email]");

try {
    const data = await clientService.detailClient(id);
    nameInput.value = data.nome;
    emailInput.value = data.email;
} catch(err) {
    console.error(err);
    window.location.href = "../telas/erro.html";
};


const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (e)=> 
{
    e.preventDefault();

    try { 
        const clientSvc = await clientService.updateDataClient(id, nameInput.value, emailInput.value);
        window.location.href = "../telas/edicao_concluida.html";
    } catch(err) {
        console.error(err);
        window.location.href = "../telas/erro.html";
    };   
});
})();
