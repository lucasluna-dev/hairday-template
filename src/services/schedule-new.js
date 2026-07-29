// area de novos agendamentos

import { apiConfig } from "./api-config.js";

export async function schedulerNew({id, name, when}){


    try {
        // faz requisiçào para enviar dados ao agendamento
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id,name,when}),//serializando os dados
        })

        alert("Agendamento realizado com sucesso")
        
    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar. Tente novamente mais tarde.")
    }
}