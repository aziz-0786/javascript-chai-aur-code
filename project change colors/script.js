 //generate a random color
 const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
 };
 const startChange = function(){
  startHere = setInterval(changeBgColor, 1000);
  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }  
 };

 const stopChange = function(){
    clearInterval(startHere);
 };
 document.getElementById('start').addEventListener('click',startChange);
document.getElementById('stop').addEventListener('click', stopChange);