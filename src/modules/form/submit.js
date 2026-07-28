import dayjs from "dayjs"
import { SchedulerNew } from "../../services/schedule-new.js" 
const form = document.querySelector("form")
const clienteName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// carrega a data atual
selectedDate.min = inputToday
selectedDate.value = inputToday

form.onsubmit = (event)=>{
    event.preventDefault()

   try {
    //recupera o nome do cliente
    const name = clienteName.value.trim()
    
    if(!name){
        return alert("Informe o nome do cliente")
    }

    //Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")
    
    //Recupera o horário selecionado e verificando se é nulo
    if(!hourSelected){
        return alert("Selecione a hora.")
    }
    
    // recuperar somente a hora
    const [hour] = hourSelected.innerText.split(":")
    
    // inserir a hora na data
    const when  = dayjs(selectedDate.value).add(hour, "hour")
    
    // Gera um ID
    const id = new Date().getTime()

    console.log({
        id,
        name,
        when,
    })

   } catch (error) {
        alert("Não foi possivel realizar o agendamento")
        console.log(error)
   }
}