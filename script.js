let count = 0
function increase(){
count++;
document.getElementById("label").textContent = count
}
function reset(){
    count =0;
    document.getElementById("label").textContent = count
    }
    function decrease(){
  count--;
 document.getElementById("label").textContent = count
     }