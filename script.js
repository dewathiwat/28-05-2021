document.getElementById('ok').addEventListener('click',function(e){
    
    alert("OK");
    console.log(e)
})
document.getElementById("cancel").addEventListener( 'mousemove',function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "(X : " + x + ", Y : " + y + ")";
    if(e.shiftKey)
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
document.getElementById('ok').addEventListener('click',function (e){
    // document.getElementById('no').classList.add('toggleOn')
    // console.log(document.getElementById('no'))
    let noElement =document.getElementById('no')
    if (noElement.classList.contains('toggleOn')){
        noElement.classList.replace('toggleOn','toggleOff')
    }else if(noElement.classList.contains('toggleOff')){
        noElement.classList.replace('toggleOff','toggleOn')
    }else{
        noElement.classList.add('toggleOn')
    }

})
var borderTick = 20
document.getElementById('cancel').style.border = `${borderTick}px solid white`

var cancelElement=document.getElementById('cancel')
cancelElement.addEventListener('mouseover',function (e){
    cancelElement.innerHTML=`
    <div class="container-col">
        <div class="flex-item">
            no1
        </div>
        <div class="flex-item">
            no2
        </div>
    </div>`
})
cancelElement.addEventListener('mouseleave',function (e){
    cancelElement.innerHTML=`cancel`
})
