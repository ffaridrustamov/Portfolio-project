let myBtn=document.querySelector('#contactbtn')
let myBox=document.querySelector('#box')
let closeBtn=document.querySelector('#closebtn')
myBtn.addEventListener('click',function(){
    myBox.style.display='block'
})
closeBtn.addEventListener('click',function(){
    myBox.style.display='none'
})