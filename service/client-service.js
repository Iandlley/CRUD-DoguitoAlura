"use strict";

// Fetch OF CLIENTS DATA
const clientsList = () => {
    return fetch(`http://localhost:3000/profile`)
    .then((res) => {
        if (res.ok) {return res.json()};

        throw newError("Não foi possivel listas os clientes");
    });
};

// CREATE CLIENT FUNCTION 
const createClient = (name, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({nome: name, email: email})
    }).then(res => {
        if (res.ok) {return res.body};
        
        throw newError("Não foi possivel criar o cliente");
    })
};  

// REMOVE CLIENT FUNCTION
const removeClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method:"DELETE"
    }).then( res => {
        if (!res.ok) {throw newError("Não foi possivel remover o cliente")};
    });
};

// DETAIL CLIENT
const detailClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(res => {
        if(res.ok){return res.json()};

        throw new Error("Não foi possivel detalhar o cliente");
    });
};

// UPDATE DATA OF CLIENTS
const updateDataClient = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({
            nome: name, 
            email: email
        })
    }).then(res => {
        if(res.ok){return res.json()};

        throw new Error("Não foi possivel atualizar os dados do cliente");
    });
};

// EXPORTING FUNCTIONS
export const clientService = {
    clientsList,
    createClient,
    removeClient,
    detailClient,
    updateDataClient
};


