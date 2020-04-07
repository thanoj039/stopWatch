var minutes;
var seconds;
var intervalHnadler;

function starttimer(){
    seconds--;
    var sec = seconds%60;
    if(sec==59)
    minutes--;
    var timeMessage = document.getElementById("timer");
    if(sec<10){
        timeMessage.innerHTML = minutes + ":0" + sec;
    }else{
        timeMessage.innerHTML = minutes +  ":" + sec;
    }
    if(seconds==0){
        clearInterval(intervalHnadler);
        alert("Done");
        var elementDiv = document.getElementById("div");
        elementDiv.style.display="block";

    }
    
}

function startCountDown(){
    minutes=document.getElementById("time").value;
    document.getElementById("time").value = "";
    if(isNaN(minutes)){
        alert("please Enter a number");
        return false;
    }else{
        if(minutes<1){
            alert("Please Enter a number greater than 0");
            return false;
        }
    }

    seconds = minutes * 60;
    var elementDiv=document.getElementById("div");
    elementDiv.style.display="none";

    var timeElement = document.getElementById("timer");
    timeElement.innerHTML= minutes + ":00";
    intervalHnadler = setInterval(starttimer,1000);
}

window.onload = function(){

    var divElement = document.getElementById("div");

    var newElement = document.createElement("input");
    newElement.id="time";
    newElement.name="timeInput";
    newElement.value="";

    var newElement2 = document.createElement("label");
    newElement2.for="time";
    newElement2.innerHTML="Enter Time in minutes : "
    
    var newElement3 = document.createElement("input");
    newElement3.type = "submit";
    newElement3.value = "start";
    newElement3.id = "submit";

    divElement.appendChild(newElement2);
    divElement.appendChild(newElement);
    divElement.appendChild(newElement3);
    
    var elementDiv2 = document.getElementById("div2");
    var timeElement = document.createElement("h1");
    timeElement.innerHTML= "0:00";
    timeElement.id="timer";
    elementDiv2.appendChild(timeElement);
    newElement3.onclick = function(){
        startCountDown();
    }


}