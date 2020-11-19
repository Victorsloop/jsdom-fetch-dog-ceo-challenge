console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImgs()
    fetchDogBreeds()
})

function fetchDogImgs() {
    return fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => renderDogs(dogs))
}

function renderDogs(dogs) {
    const dogImages = document.querySelector('#dog-image-container')
    dogs.message.forEach(dog => {
				const img = document.createElement("img")
				img.setAttribute("src", `${dog}`)
				dogImages.appendChild(img)
    })
}

function fetchDogBreeds(){
    return fetch(breedUrl)
        .then(res => res.json())
        .then(breeds => {
            innerBreeds = Object.keys(breeds.message)
            renderBreeds(innerBreeds)
        })
}

function renderBreeds(innerBreeds) {
    const dogBreeds = document.querySelector("#dog-breeds")
    innerBreeds.forEach(breed => {
        const li = document.createElement("li")
				li.textContent = breed
                dogBreeds.appendChild(li)
                
            li.addEventListener("click", function(){
                li.style.color = "red"
            })
            // filterDogs(li)
    })
}

function filterDogs(li){
    const filterBreeds = document.getElementById("#breed-dropdown")
    filterBreeds.addEventListener("change", function(){
    if (filterBreeds.value == "" || li.textContent.charAt(0) == filterBreeds.value )
    li.style.display = ""
    })
}
