let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

let next2 = document.querySelector('.next2')
let prev2 = document.querySelector('.prev2')

next2.addEventListener('click', function(){
    let items2 = document.querySelectorAll('.item2')
    document.querySelector('.slide2').appendChild(items2[0])
})

prev2.addEventListener('click', function(){
    let items2 = document.querySelectorAll('.item2')
    document.querySelector('.slide2').prepend(items2[items2.length - 1])
})
