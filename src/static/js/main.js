const time_el =document.querySelector('.watch .time');
const start_btn= document.querySelectorAll(" #popbtn, #start");
const stop_btn= document.getElementById('stop');
const reset_btn= document.getElementById('reset');

let seconds = 0;
let interval = null;
let hours=0;
let minutes =0;

//EVENT LISTENERs
// start_btn.addEventListener('click',start);
// stop_btn.addEventListener('click',stop);
// reset_btn.addEventListener('click',reset);
//Update Timer
function timer(){
    seconds++;
    //Format our time
    
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600))/ 60);
    let secs = seconds % 60;

    if(secs<10) secs='0'+secs;
    if(mins<10) mins='0'+secs;
    if(hrs<10) hrs='0'+secs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}



function start(){
    
     interval =setInterval(function(){

                    seconds++;
                    if(seconds == 60){
                        seconds = 0;
                        minutes++;
                        if(minutes == 60){
                            minutes = 0;
                            hours++;
                        }
                    }
        
                let h = hours < 10 ? "0" + hours : hours;
                let m = minutes < 10 ? "0" + minutes : minutes;
                let s = seconds < 10 ? "0" + seconds : seconds;
        
                time_el.innerHTML =  `${h} : ${m} : ${s}`;
            }, 1000);
            console.log(start_btn)
            start_btn[1].textContent = "Resume"
            start_btn[1].style.pointerEvents = "none"
            stop_btn.style.pointerEvents = "all"
        }
function stop(){
    start_btn[1].style.pointerEvents = "all"
    stop_btn.style.pointerEvents = "none"
    console.log("Stop Btn")
    clearInterval(interval);
    interval= null;
}
function reset(){
    start_btn[1].textContent = "Start"
    start_btn[1].style.pointerEvents = "all"
    stop_btn.style.pointerEvents = "none"
    stop();
    seconds = 0;
    time_el.textContent =`00:00:00`;
}