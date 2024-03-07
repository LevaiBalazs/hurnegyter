/*
* File: app.js
* Author: Lévai Balázs István
* Copyright: 2024, Lévai Balázs István
* Group: Szoft I/1/N
* Date: 2024-03-07
* Github: https://github.com/levaibalazs/
* Licenc: GNU GPL
*/


const sideAInput = document.querySelector("#sideA")
const sideBInput = document.querySelector("#sideB")
const sideCInput = document.querySelector("#sideC")
const sideDInput = document.querySelector("#sideD")
const areaInput = document.querySelector("#area")
const calcButton = document.querySelector("#calcButton")

calcButton.addEventListener('click', ()=>{
    calcStart()
})

function calcStart(){
    const a = Number(sideAInput.value)
    const b = Number(sideBInput.value)
    const c = Number(sideCInput.value)
    const d = Number(sideDInput.value)
    const area = calcArea(a,b,c,d)
    console.log("Terület=",area)
    areaInput.value=area
    
}

function calcArea(a,b,c,d){
    const s = halfpariCalc(a,b,c,d)
    let area = Math.sqrt((s-a)*(s-b)*(s-c)*(s-d))
    return area
}
function halfpariCalc(a,b,c,d){
    
    return (a+b+c+d)/2
    
}

