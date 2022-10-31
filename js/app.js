const IconClickEl=document.getElementById("icon-click")
const selectWrapperEl=document.getElementById("Select__Wrapper")
const selectMainEl=document.getElementById("select_main")
const selectUlEl=document.getElementById("select__ul")
const textContent=document.getElementById("changeEl")
const Geolocatsiya =document.getElementById("Geolocatsiya")

const optionsEl=document.querySelectorAll(".options")

const icon=`
<i id="icon-click" class="fa-solid fa-circle-chevron-down"></i>
`
const StrongEl=document.getElementById("strong")

IconClickEl.addEventListener("click",Showul)
function Showul(){
    if(selectWrapperEl.style.overflow=="visible"){
        selectWrapperEl.style.overflow="hidden"   
    }else{
        selectWrapperEl.style.overflow="visible"
    }
}
selectUlEl.addEventListener('click',(e)=>{
    let result=e.target
    
    if(result.textContent == "Toshkent"){
        textContent.textContent='Toshkent'
    }else if(result.textContent == "Namangan"){
        textContent.textContent='Namangan'
    }else if(result.textContent == "Samarqand"){
        textContent.textContent='Samarqand'
    }else if(result.textContent == "Andijon"){
        textContent.textContent='Andijon'
    }else if(result.textContent == "Buhoro"){
        textContent.textContent='Buhoro'
    }else if(result.textContent == "Fargʻona"){
        textContent.textContent='Fargʻona'
    }else if(result.textContent == "Jizzax"){
        textContent.textContent='Jizzax'
    }else if(result.textContent == "Xorazm"){
        textContent.textContent='Xorazm'
    }else if(result.textContent == "Navoiy"){
        textContent.textContent='Navoiy'
    }else if(result.textContent == "Qashqadaryo"){
        textContent.textContent='Qashqadaryo'
    }else if(result.textContent == "Sirdaryo"){
        textContent.textContent='Sirdaryo'
    }else if(result.textContent == "Surxondaryo"){
        textContent.textContent='Surxondaryo'
    }
    let name=textContent.textContent
    StrongEl.innerHTML=name
    selectWrapperEl.style.overflow="hidden"  
    ;(()=>{
        const Base_Api="https://islomapi.uz/api";
        fetch(Base_Api+"/present/day"+"?region="+name)
        .then(res=>res.json())
        .then(data=>renderData(data))
        
    })()  
    function renderData(data){
        console.log(data.times);
        const Tong=document.getElementById("tong")
        const Quyosh=document.getElementById("quyosh")
        const Peshin=document.getElementById("peshin")
        const Asr=document.getElementById("asr")
        const Shom=document.getElementById("shom")
        const Xufton =document.getElementById("xufton")
        // asr: "15:53"
        // hufton: "18:49"
        // peshin: "12:16"
        // quyosh: "06:57"
        // shom_iftor: "17:39"
        // tong_saharlik: "05:37"
        Tong.innerText=data.times.tong_saharlik
        Quyosh.innerText=data.times.quyosh
        Peshin.innerText=data.times.peshin
        Asr.innerText=data.times.asr
        Shom.innerText=data.times.shom_iftor
        Xufton.innerText=data.times.hufton
    }
})
const calendarEl=document.getElementById("calendar")
const time=new Date()
let dateInfo=document.createElement("p")
dateInfo.className='dateinfo'
calendarEl.prepend(dateInfo)

let currentMonthName=time.getMonth()+1

if(currentMonthName == 1){
    currentMonth="Yanvar"
}else if(currentMonthName ==2){
    currentMonthName="Fevral"
}else if(currentMonthName ==3){
    currentMonthName="Mart"
}else if(currentMonthName ==4){
    currentMonthName="Aprel"
}else if(currentMonthName ==5){
    currentMonthName="May"
}else if(currentMonthName ==6){
    currentMonthName="Iyun"
}else if(currentMonthName ==7){
    currentMonthName="Iyul"
}else if(currentMonthName ==8){
    currentMonthName="Avgust"
}else if(currentMonthName ==9){
    currentMonthName="Sentiyabr"
}else if(currentMonthName ==10){
    currentMonthName="Oktyabr"
}else if(currentMonthName ==11){
    currentMonthName="Noyabr"
}else if(currentMonthName ==12){
    currentMonthName="Dekabr"
}

dateInfo.innerText=time.getDate()+' - '+ currentMonthName+" "+time.getFullYear()+"-yil"

setInterval(()=>{
    let clock=new Date()
    let h=clock.getHours()
    let m=clock.getMinutes()
    let s=clock.getSeconds()
    let timeinfo=document.getElementById("timeinfo")
    timeinfo.innerHTML=`${h.toString().padStart(2,'0')} : ${m.toString().padStart(2,'0')} : ${s.toString().padStart(2,'0')}`
},(1000))

// Api
