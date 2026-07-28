// area de novos agendamentos

import { apiConfig } from "../../services/api-config.js";

export async function SchedulerNew({id, name, when}){


    try {
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id,name,when}),//sealizando os dados
        })

        alert("Agendamento realizado com sucesso")
        
    } catch (error) {
        console.log(error)
        alert("Não foi possível agendar. Tente novamente mais tarde.")
    }
}