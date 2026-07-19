import {hoursLoad} from "../form/hours-load.js"

//Selectiona o input de data.
const selectedDate = document.getElementById("date")

export function scheduleDay(){
    //Obtém a data do input
    const date = selectedDate.value

    // Renderiza as horas disponiveis.
    hoursLoad({date})
}

// Recarrega os horários quando a data mudar.
selectedDate.onchange = () => {
    scheduleDay()
}