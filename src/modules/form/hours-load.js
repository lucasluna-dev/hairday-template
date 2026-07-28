import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
    //Limpa a lista de horário
    hours.innerHTML = ""

    const opening = openingHours.map((hour) => {

        //recupera somento a hora
        const [scheduleHour] = hour.split(":")

        // Adicionar a hora na data e verificar se está no passado.
        const isHourPast = dayjs(date).add(Number(scheduleHour), "hour").isAfter(dayjs())

        return {
            hour,
            avaliable: isHourPast,
        }

        /* console.log({
             hour,
            avaliable: isHourPast,
         })*/


    })


    opening.forEach(({hour, avaliable})=>{
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(avaliable ? "hour-avaliable" : "hour-unavailable")
        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)

    })

    // adiciona o evento de clique nos horarios disponiveis
    hoursClick()
    
}

// incluir divisao dos horarios no front-end por periodos. (maha,tarde,noite)
function hourHeaderAdd(title){
    const header = document.createElement("li") 

    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
    
}