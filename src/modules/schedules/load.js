import {hoursLoad} from "../form/hours-load.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

//Selectiona o input de data.
const selectedDate = document.getElementById("date")

export async function scheduleDay(){
    //Obtém a data do input
    const date = selectedDate.value

    // Busca na api os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})
    console.log(dailySchedules)

    // Renderiza as horas disponiveis.
    hoursLoad({date})
}

// Recarrega os horários quando a data mudar.
selectedDate.onchange = () => {
    scheduleDay()
}