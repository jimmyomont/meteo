let e=function(e){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=5fac1396b6b73dd3698166721c6b708d&units=metric&lang=fr`).then((e=>e.json().then((e=>{document.querySelector("#city").innerHTML=e.name,document.querySelector("#temp").innerHTML=e.main.temp+"°C",document.querySelector("#humidity").innerHTML=e.main.humidity+"%",document.querySelector("#wind").innerHTML=e.wind.speed})))).catch((e=>console.log("erreur : "+e)))};document.querySelector("form").addEventListener("submit",(t=>{t.preventDefault();let n=document.querySelector("#inputCity").value;e(n)})),e("Boulogne-Billancourt");
//# sourceMappingURL=index.ca694406.js.map
