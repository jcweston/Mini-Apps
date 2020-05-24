let taskArr = []
for (let i = 1; i < sessionStorage.length-1; i++) {
    taskArr.push(sessionStorage[i])
}
console.log(taskArr)
let listCount = 1

for (let i = 0; i < taskArr.length; i++) {
    let input = taskArr[i]
    console.log(input)
    let list = document.getElementById('list one')
    let newItem = document.createElement('li')
    
    newItem.innerText=(input)
    newItem.setAttribute('id',input)
    newItem.setAttribute('class','normal')
    newItem.style.order=listCount
    listCount++
    list.appendChild(newItem)
    newItem.addEventListener('click',()=>{
            if (newItem.className=='normal'){
                newItem.className='strike'
            }
            else {
                newItem.className='normal'
            }
        })
    
}


const inputButton = document.getElementById('input button')

inputButton.addEventListener('click',()=>{
    let input = document.getElementById('input one')
    let list = document.getElementById('list one')
    let newItem = document.createElement('li')
    
    newItem.innerText=(input.value)
    newItem.setAttribute('id',input.value)
    newItem.setAttribute('class','normal')
    newItem.style.order=listCount
    listCount++
    list.appendChild(newItem)
    newItem.addEventListener('click',()=>{
            if (newItem.className=='normal'){
                newItem.className='strike'
            }
            else {
                newItem.className='normal'
            }
        })
    taskArr.push(input.value)
    sessionStorage[listCount]=input.value
})

const sortAlpha = document.getElementById('sort alpha')

sortAlpha.addEventListener('click', ()=>{
    taskArr.sort()
    for (let i = 0; i < taskArr.length; i++) {
        let task=document.getElementById(taskArr[i])
        task.style.order=i
    }
    taskArr.sort(function(a, b){return a-b})
    for (let i = 0; i < taskArr.length; i++) {
        let task=document.getElementById(taskArr[i])
        task.style.order=i
    }
    
})

const sortFinished = document.getElementById('sort finished')

sortFinished.addEventListener('click', ()=>{
    for (let i = 0; i < taskArr.length; i++) {
        let task=document.getElementById(taskArr[i])
        if(task.hasAttribute('class','strike')) {
        task.style.order=i+100
        }
    }
    
})
