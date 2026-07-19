import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {

        //recupera somento a hora
        const [scheduleHour] = hour.split(":")

        // Adicionar a hora na data e verificar se está no passado.
        const isHourPast = dayjs(date).add(Number(scheduleHour), "hour").isAfter(dayjs())

        return {
            hour,
            isHourPast: isHourPast
        }

        /* console.log({
             hour,
             isHourPast: isHourPast
         })*/


    })
}