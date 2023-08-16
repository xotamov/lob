let buttons = document.querySelectorAll(".button")
let bagroude = document.querySelector('.bagroude')
let color = document.querySelector(".color")

let allphotos = {
    gold:{
        title: "gold",
        img: "./img/gold.jpg"
    },
    grey:{
        title: "grey",
        img: "./img/grey.jpg",
    },
    black:{
        title: "black",
        img: "./img/black.jpg",
    },
    white:{
        title: "white",
        img: "./img/white.jpg",
    }
}
let defaultSelected = allphotos.black
color.innerHTML = `color - ${defaultSelected.title}` 

buttons.forEach(btn => {
    let text = btn.getAttribute('data-text')
    let iPhone = allphotos[text]

    btn.onmouseenter = () => {
        color.innerHTML = `color - ${iPhone.title}`
    }
    btn.onmouseleave = () => {
    color.innerHTML = `color - ${defaultSelected.title}`    
    }
    btn.onclick = () => {
        bagroude.style.backgroundImage = `url(${iPhone.img})`
        defaultSelected = iPhone
    }
})


let modal = document.querySelector('.modal')
let btnOpen = document.querySelectorAll('[data-open]')
let btnClose = document.querySelectorAll('[data-close]') 
let modal_bg = document.querySelector('.modal_bg')
btnOpen.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'block'
        modal_bg.style.display = 'block'
        
    }
})

btnClose.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'none'
        modal_bg.style.display = 'none'
    }
})