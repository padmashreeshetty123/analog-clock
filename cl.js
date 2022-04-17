setInterval(hello,1000);
function hello(){
let
 x=new Date();
 h=x.getHours();
m=x.getMinutes();
s=x.getSeconds();
 hr=30*h+0.5*m;
 mr=6*m;
sr=6*s;

document.getElementById("p1").style.transform=`rotate(${sr}deg)`;
document.getElementById("p2").style.transform=`rotate(${mr}deg)`;
document.getElementById("p3").style.transform=`rotate(${hr}deg)`;
}