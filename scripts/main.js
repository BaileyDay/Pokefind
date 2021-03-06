

const apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=964`
let information = document.querySelector(".information")
let pokeSearchList = []
let pokeSprites = document.querySelector('.pokeimg')




function updateArrayCallback(pokeList) {
    pokeList.map(function (pokemon) {
        pokeSearchList.push(pokemon.name)
    });
}

async function getPokemon() {
    await fetch(apiurl, {
        "method": "GET"
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let pokeList = data.results;

            updateArrayCallback(pokeList);
            return pokeList
        })
};


function display() {
    let pokemonSelected = document.querySelector("#searchbar").value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`, {
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let sprites = data.sprites.front_default

            let abilitiesHeading = document.createElement('p')
            abilitiesHeading.value = 'Abilities'
            abilitiesHeading.textContent = 'Abilities:'
            information.append(abilitiesHeading)
            let abilities = data.abilities
            abilities.map(function (abilities) {
                const pokeAbilities = document.createElement("li")
                pokeAbilities.value = (abilities.ability.name)
                pokeAbilities.textContent = (abilities.ability.name)
                information.append(pokeAbilities)
            })
            
            let typesHeading = document.createElement('p')
            typesHeading.value = 'Types'
            typesHeading.textContent = 'Type(s):'
            information.append(typesHeading)
            let type = data.types
            type.map(type => {
                const pokeType = document.createElement('li')
                pokeType.value = type.type.name
                pokeType.textContent = type.type.name
                information.append(pokeType)
            })

            
            let statsHeading = document.createElement('p')
            statsHeading.value = 'Stats'
            statsHeading.textContent = 'Stats:'
            information.append(statsHeading)
            let stats = data.stats
            stats.map(stat => {
                const pokeStat = document.createElement('li')
                pokeStat.value = stat.stat.name
                pokeStat.textContent = stat.stat.name + ": " + stat.base_stat
                information.append(pokeStat)
            })



            let pokeSprite = document.createElement('img')
            pokeSprite.src = sprites
            pokeSprites.append(pokeSprite)

        })
};

document.getElementById("primarybtn").addEventListener("click", function () {
    let name = document.querySelector("#searchbar").value
    let capitalName = name.charAt(0).toUpperCase() + name.slice(1)
    document.querySelector(".information").innerHTML = ""
    document.querySelector(".pokeimg").innerHTML = ""
    document.querySelector("#pokename").innerHTML = capitalName
    display()
    document.querySelector(".pokeSprite").style.visibility = "visible";
    document.querySelector(".information").style.visibility = "visible";
})

function displayrandom(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
        "method": "GET"
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let sprites = data.sprites.front_default

            let abilitiesHeading = document.createElement('p')
            abilitiesHeading.value = 'Abilities'
            abilitiesHeading.textContent = 'Abilities:'
            information.append(abilitiesHeading)
            let abilities = data.abilities
            abilities.map(function (abilities) {
                const pokeAbilities = document.createElement("li")
                pokeAbilities.value = (abilities.ability.name)
                pokeAbilities.textContent = (abilities.ability.name)
                information.append(pokeAbilities)
            })
            
            let typesHeading = document.createElement('p')
            typesHeading.value = 'Types'
            typesHeading.textContent = 'Type(s):'
            information.append(typesHeading)
            let type = data.types
            type.map(type => {
                const pokeType = document.createElement('li')
                pokeType.value = type.type.name
                pokeType.textContent = type.type.name
                information.append(pokeType)
            })

            
            let statsHeading = document.createElement('p')
            statsHeading.value = 'Stats'
            statsHeading.textContent = 'Stats:'
            information.append(statsHeading)
            let stats = data.stats
            stats.map(stat => {
                const pokeStat = document.createElement('li')
                pokeStat.value = stat.stat.name
                pokeStat.textContent = stat.stat.name + ": " + stat.base_stat
                information.append(pokeStat)
            })



            let pokeSprite = document.createElement('img')
            pokeSprite.src = sprites
            pokeSprites.append(pokeSprite)

            document.querySelector("#searchbar").value = pokemon
            let name = document.querySelector("#searchbar").value
            let capitalName = name.charAt(0).toUpperCase() + name.slice(1)
            document.querySelector("#pokename").innerHTML = capitalName

          



            

        })
};

function randomPokes() {
    
        let RNG = (Math.floor(Math.random() * Math.floor(964)));
        let pokemongrandom = pokeSearchList[RNG]
        displayrandom(pokemongrandom);
    }


document.querySelector('.ball').addEventListener('click', function () {
    document.querySelector(".information").innerHTML = ""
    document.querySelector(".pokeimg").innerHTML = ""
    document.querySelector(".pokeSprite").style.visibility = "visible";
    document.querySelector(".information").style.visibility = "visible";
    randomPokes();
    
    
});

function setName(){
    
}

getPokemon()

$("#searchbar").autocomplete({
    source: pokeSearchList
});
