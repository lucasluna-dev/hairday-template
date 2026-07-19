import {openingHours} from "../../utils/opening-hours.js"

export function hoursLoad(){
    const opening = openingHours.map((hour)=>{
        console.log(hour)
    })
}