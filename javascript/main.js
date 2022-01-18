console.log('Hello World!');
function showTime(){
  var date = new Date();
  var hora = date.getHours();
  var minu = date.getMinutes();
  var seg = date.getSeconds();
  var sem = "AM";
  if(hora==0){
    hora=12;
  }
  if(hora>12){
    hora = hora -12;
    sem="PM";
    
  }
  hora=(hora<10)?"0"+ hora : hora;
  minu=(minu<10)? "0" + minu :minu;
  seg=(seg<10)?"0" + seg : seg;
  
  var tempo = hora + ":" +  minu + ":" + seg+"."+sem;
  document.getElementById("My").innerHTML = tempo;
  document.getElementById("My").textContent + tempo;
  setTimeout(showTime,1000);

}

showTime();

