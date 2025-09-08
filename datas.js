var agora = new Date()
var horas = agora.getHours()
console.log(`agora é  ${horas} horas`)

if (horas < 12){
    console.log ("Bom dia!")
} else if(horas < 18){///falso ou verdadeiro
    console.log ("Boa tarde")
}else { console.log ("Boa noite!")
}

