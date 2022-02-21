var bandeira = false;
var minutos 
var segundos

function start(){
    console.log(bandeira)
    if (bandeira == false){
        document.getElementById("min").innerHTML = "24 :";
         segundos = 59
         minutos  = 24
    }
    bandeira = false;

    const Segundos =  () => {
        document.getElementById('sec').innerHTML = (segundos) 
        segundos = segundos - 1

        if (segundos == 0){
            segundos = 59
            minutos -= 1
        }
    }
    const Minutos = () => {
        document.getElementById('min').innerHTML = (minutos) + " :"

        if(minutos == 0){
            setTimeout(interMin);
            setTimeout(intervSec);
        }
    }
    intervSec = setInterval(Segundos, 1000) 
    interMin = setInterval(Minutos, 60000)
}

function stop(){
    bandeira = true;
    clearInterval(intervSec);
    clearInterval(interMin);
    

}

function reset(){
    stop();
    document.getElementById("min").innerHTML = "25 :";
    segundos = 59
    minutos  = 24
    document.getElementById("sec").innerHTML = " 00"
    bandeira = false
    
}
    
