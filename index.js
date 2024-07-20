let displayed_duration=document.getElementById('duration');
let lapsContainer=document.getElementById('laps')
let timer=null;
let stopbtn=document.getElementById('stop');

let elapsedTime=0;
let startTime=0;
let isRunning=false;

function start(){
    
    if(!isRunning){  
        startTime=Date.now()-elapsedTime;
        timer=setInterval(updatetime,10);
        isRunning=true;
        
        stopbtn.classList.add("red-btn")
    } 
}

function updatetime(){
    const currentTime=Date.now();
    elapsedTime=currentTime-startTime;
    let hour=Math.floor(elapsedTime/(1000*3600));
    let minutes=Math.floor(elapsedTime/(1000*60) %60);
    let seconds=Math.floor(elapsedTime/1000 % 60);
    let milliseconds=Math.floor((elapsedTime%1000)/10);
    let formattedTime=`${String(hour).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}:${String(milliseconds).padStart(2,"0")} `
    displayed_duration.textContent=formattedTime
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        isRunning=false
        stopbtn.classList.remove("red-btn")
        

    }
    
}
function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    displayed_duration.textContent="00:00:00:00"
    lapsContainer.textContent=""
    stopbtn.classList.add("black-btn")
}
function lap(){
    
    if(isRunning){
        if(lapsContainer.children.length===0){
            let lapTitle = document.createElement('li');
            lapTitle.textContent = "Lap Time";
            lapTitle.classList.add('lap-title'); 
            lapsContainer.appendChild(lapTitle);
        }
        let lapTime = Date.now() - startTime;
        let hours = Math.floor(lapTime / (1000 * 3600));
        let minutes = Math.floor(lapTime / (1000 * 60) % 60);
        let seconds = Math.floor(lapTime / 1000 % 60);
        let milliseconds = Math.floor((lapTime % 1000) / 10);
        let formattedLap = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;

        let lapItem=document.createElement('li');
        lapItem.classList.add("lapItem")
        lapItem.textContent=formattedLap;
        lapsContainer.append(lapItem)
    }
}
