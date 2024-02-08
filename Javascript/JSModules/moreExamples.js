function DateToString(date){
    if(!date)
        date = now()

        return `${date.getFullYear()}, ${date.getMonth()+1}, ${date.getDate()}, ${date.getHours()}, ${date.getMinutes()}, ${date.getSeconds()} `
        
    

}

export {DateToString}