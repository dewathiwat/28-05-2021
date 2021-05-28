document.getElementById('ok').addEventListener('click',function(e){
    alert("OK");
    console.log(e)
})
document.getElementById("cancel").addEventListener( 'mousemove',function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "(X : " + x + ", Y : " + y + ")";
    console.log(coor)
  })
document.getElementById('cancel').addEventListener('click',function(e){
    alert("Cancel");
    console.log(e)
})
document.getElementById('no').addEventListener('click',function(e){
    alert("No");
    console.log(e)
})