const answer = document.querySelectorAll('h3.answer');
console.log(answer);
const ansBtn = document.querySelector(".Ansbtn")
ansBtn.addEventListener('click',(show)=>{
  answer.forEach((val)=>{
    if(val.style.display=="none"){
        val.style.display="block"
    }
    else{
        val.style.display="none"
    }
  })
})
