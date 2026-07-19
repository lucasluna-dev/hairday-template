import dayjs from "dayjs"
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Data atual para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// carrega a data atual
selectedDate.min = inputToday

// Define a data atual.
selectedDate.min = inputToday

form,onsubmit = (event)=>{
    event.preventDefault()

    console.log("enviadoddd")
}