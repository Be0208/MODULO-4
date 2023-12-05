//________________listagem______________________

const planetsContainer = document.querySelector('#planetsContainer')
const buttonStart = document.querySelector('#buttonStart')
const divSpin = document.querySelector('#spin')

function calcularMassa(name, massValue, massExponent) {
    const massa = massValue * Math.pow(10, massExponent)
    console.log(`A massa de ${name} Ã© ${massa}`);
}



async function getBodies() {
    divSpin.innerHTML = `<div class="loader"></div>`
    const result = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
    divSpin.innerHTML = ``
    const stars = result.data.bodies
    const planets = stars.filter(p => p.isPlanet)

    planets.forEach(planet => {
        planetsContainer.innerHTML += `

    <div onclick='calcularMassa("${planet.englishName}", ${planet.mass.massValue}, ${planet.mass.massExponent})' class="planetCard">
        <h2>${planet.englishName}</h2>
        <p>${planet.moons ? planet.moons.length : 0} Luas</p>
    </div>
        
        `
    });
}


buttonStart.addEventListener('click', () => {
    buttonStart.style.display = "none"
    getBodies()
})



//___________ ________imput _______________
const nome = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");

document.querySelector("#buttonStart2").addEventListener('click', () => {
    console.log(nome.value);
    console.log(telefone.value);
});



nome.addEventListener('input', (evento) => {
    console.log(evento.target.value);
});

telefone.addEventListener('input', (evento) => {
    console.log(evento.target.value);
});


