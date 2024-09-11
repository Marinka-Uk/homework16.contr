import fetchCountries from './fetchCountries'
import debounce from 'lodash.debounce'
const searchQuery = document.querySelector('.search')


searchQuery.addEventListener('input', debounce( () => {
    fetchCountries(searchQuery.value).then(countries => {
        if (countries.length === 1) {
            createCounryCard(countries)
        } else if(countries.length > 1 && countries.length >= 10){
            createCounryList(countries)
        }
    }
     )
}, 3000))

function createCounryList(counryList) {
    return counryList.map((country) => {
        return  `<li>
    <p>
${country.name.official}
</p>
</li>
    `
    }) 

    
}
function createCounryCard(country) {
    return `<h1></h1>
<p>Capital: ${}</p>
<p>Population: ${}</p>
<p>Languages: ${}</p>
<ul></ul>
<img src="${}">
`

}

function createNotification() {
    
}
