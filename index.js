let  count=0;
let countEl=document.getElementById('count-el')
let saveCount=document.getElementById('save-count')
const add=()=>{
    count++;
    countEl.innerText=count
}

const save=()=>{
    let countStr=count+" - "
    saveCount.textContent+=countStr
}
const reset=()=>{
    count=0;
    countEl.textContent=count
    
}

