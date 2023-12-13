//GMAIL CHECKER
const gmailInput= document.querySelector('#gmail_input')
const gmailButton= document.querySelector('#gmail_button')
const gmailSpan= document.querySelector('#gmail_result')

const regExp = /[A-Z-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

gmailButton.addEventListener('click',()=>{
    if(regExp.test(gmailInput.value)){
        gmailSpan.innerHTML='Thank you'
        gmailSpan.style.color='green'
    }else{
        gmailSpan.innerHTML='Please write right'
        gmailSpan.style.color='red'
    }
})
const childBlock=document.querySelector('.child_block')

let positionX=0
let positionY=0

const moveChildBlock=()=>{
        if(positionX<449  && positionY === 0){
            positionX++
            childBlock.style.left=`${positionX}px`
            setTimeout(moveChildBlock,10)
        }else if ( positionX >= 449 && positionY < 449){
            positionY++
            childBlock.style.top=`${positionY}px`
            setTimeout(moveChildBlock,10)
        }else if ( positionX > 0 && positionY > 0) {
            positionX--
            childBlock.style.left =` ${positionX}px`
            setTimeout(moveChildBlock, 10)
        }else if (positionX === 0 && positionY > 0){
               positionY--
               childBlock.style.top=`${positionY}px`
              setTimeout(moveChildBlock,10)
    }}
    
moveChildBlock()



const starBtn= document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let displayValue=0
let interval;
starBtn.addEventListener('click', ()=>{
    toIncrease()
})
stopBtn.addEventListener('click', ()=>{
    toStop()
})
resetBtn.addEventListener('click', ()=>{
    toReset()
})


function toIncrease() {
    interval=setInterval(()=>{
        displayValue++
        document.querySelector('.interval').innerHTML=displayValue;
        setTimeout(interval,1000)
    })
}
function toStop(){
    clearInterval(interval)
}
function toReset(){
    clearInterval(interval)
    displayValue=0
    document.querySelector('.interval').innerHTML=displayValue
}
