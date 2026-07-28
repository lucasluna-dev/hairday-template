import {scheduleDay} from "../schedules/load"

const selectedDate = document.getElementById('date')

//Recarrega a lista de horários quando o input de data mudar.
selectedDate.onchange = () => scheduleDay()
