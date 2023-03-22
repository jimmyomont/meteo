// const boulbi = document.getElementById('boulbi')
// const btnBoulbi = document.getElementById('btnBoulbi')
// const bergerac = document.getElementById('berg')
// const btnBergerac = document.getElementById('btnBerg')

// fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,weathercode,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high&start_date=2023-03-21&end_date=2023-03-21')
// .then(teddie => teddie.json())
// .then(data => console.table(data.hourly.weathercode) )

// fetch('https://api.open-meteo.com/v1/forecast?latitude=44.85&longitude=0.48&currente_weather')
// .then(teddie => teddie.json())
// .then(data =>bergerac.textContent="a Bergerac il fait"+data.hourly.time +"°C")

// btnBoulbi.addEventListener('click', ()=>{
//     boulbi.classList.toggle('hidden')
// })
// btnBerg.addEventListener('click', ()=>{
//     bergerac.classList.toggle('hidden')
// })

const APIKEY = '5fac1396b6b73dd3698166721c6b708d';

// let url = `https://api.openweathermap.org/data/2.5/weather?q=Rouen&appid=${APIKEY}&units=metric&lang=fr`;


// fetch(url)
// .then((response) => response.json()
// .then((data) => {
//     console.log(data);
// document.querySelector('#city').innerHTML = data.name;
// document.querySelector('#temp').innerHTML = data.main.temp + '°C';
// document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
// document.querySelector('#wind').innerHTML = data.wind.speed;
// })
// )
// .catch((err) => console.log('erreur : ' + err))



let apiCall = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    //demande d aller chercher l'url de API
    fetch(url)
//renvois le code de l'api 
.then((response) => response.json()
//code recu et prêt a etre exploite
.then((data) => {
//envois les données au HTML
document.querySelector('#city').innerHTML = data.name;
document.querySelector('#temp').innerHTML = data.main.temp + '°C';
document.querySelector('#humidity').innerHTML = data.main.humidity + '%';
document.querySelector('#wind').innerHTML = data.wind.speed;
})
)
//création msg erreur pour un mauvais renseignement de la ville
.catch((err) => console.log('erreur : ' + err))
}
//ecoute du formulaire
document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault(); 
    //recupere la valeur ecrite de l'input
    let ville = document.querySelector('#inputCity').value;
//renseignement de la fonction par la ville submit dans le formulaire
    apiCall(ville)
})
//ville par défaut au démarage de la page
apiCall('Boulogne-Billancourt')



