// // document.getElementById('ok').addEventListener('click',function(e){
    
// //     alert("OK");
// //     console.log(e)
// // })
// document.getElementById("cancel").addEventListener( 'mousemove',function(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     var coor = "(X : " + x + ", Y : " + y + ")";
//     if(e.shiftKey)
//     console.log(coor)
//   })
// document.getElementById('cancel').addEventListener('click',function(e){
//     alert("Cancel");
//     console.log(e)
// })
// document.getElementById('no').addEventListener('click',function(e){
//     alert("No");
//     console.log(e)
// })
// document.getElementById('ok').addEventListener('click',function (e){
//     // document.getElementById('no').classList.add('toggleOn')
//     // console.log(document.getElementById('no'))
//     let noElement =document.getElementById('no')
//     if (noElement.classList.contains('toggleOn')){
//         noElement.classList.replace('toggleOn','toggleOff')
//     }else if(noElement.classList.contains('toggleOff')){
//         noElement.classList.replace('toggleOff','toggleOn')
//     }else{
//         noElement.classList.add('toggleOn')
//     }

// })
// var borderTick = 20
// document.getElementById('cancel').style.border = `${borderTick}px solid white`

// var cancelElement=document.getElementById('cancel')
// cancelElement.addEventListener('mouseover',function (e){
//     cancelElement.innerHTML=`
//     <div class="container-col">
//         <div class="flex-item">
//             no1
//         </div>
//         <div class="flex-item">
//             no2
//         </div>
//     </div>`
// })
// cancelElement.addEventListener('mouseleave',function (e){
//     cancelElement.innerHTML=`cancel`
// })
// var mar=0
// document.getElementById('ok').addEventListener('click',function (e){
//     document.getElementById('cancel').style.margin = `0px ${mar}px 0px ${mar}px`
//     mar=mar+5
// })
//     var n0 = 1
//     var n=''
// document.getElementById('no').addEventListener('dblclick',function (e){
//     var n1 ='วิชานี้'
//     var n2 = 'ง่าย'
//     var n3 = 'จริงๆ นะ'
    
//     if(n0==1){
//         n=n1
//         n0++
//     }else if(n0==2){
//         n=n2
//         n0++
//     }else if(n0==3){
//         n=n3
//         n0=1
//     }
//     document.getElementById('ok').innerHTML= n
// })
function onOkClicked(e){
    alert('Ok clicked')
}

function onCancelClicked(e){
    alert('Cancel clicked')
}
function onNoClicked(e){
    alert('No clicked')
}
document.getElementById('cancel').addEventListener('click',onCancelClicked)
document.getElementById('no').onclick=onNoClicked
document.getElementById('ok').onclick=onOkClicked
document.getElementById('container').onclick=function(e){
    alert('container clicked')
}


