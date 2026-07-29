import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay({date}){

    try {

        //fazendo requisiçào para obter os dados da pi
        const response = await fetch(`${apiConfig.baseURL}/schedules`,)

        //converte para JSON
        const data =  await response.json()

        //filtra os agendamento pelo dia selcionado
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamento nos dias selecionados")
    }
}