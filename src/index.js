import fetchCountries from './fetchCountries'
import debounce from 'lodash.debounce'
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});
const searchQuery = document.querySelector('.search')

const resultsContainer = document.querySelector('.result')

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
    const listMarkup = counryList.map(country => {
        return `<li>${country.name.official}</li>`
    }).join('')
resultsContainer.innerHTML = `<ul>${listMarkup}</ul>`
}

function createCounryCard(country) {
    return `<h1></h1>
<p>Capital: ${country.capital}</p>
<p>Population: ${country.population}</p>
<ul>Languages: ${country.languages.map(lang => `<li>${lang.name}</li>`).join(',')}</ul>
<img src="${country.flag}" alt="Flag of ${country.name}">
`
resultsContainer.innerHTML = cardMarkup
}

function createNotification(message) {
    alert({
        text: '',
            type: 'info',
        delay: 2000,
    })
}
