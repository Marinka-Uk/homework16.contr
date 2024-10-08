import fetchCountries from './fetchCountries'
import debounce from 'lodash.debounce'
import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});
const searchQuery = document.querySelector('.search')
const resultsContainer = document.querySelector('.result')
const counryList = document.querySelector('.country-list')


searchQuery.addEventListener('input', debounce(() => {
    resultsContainer.innerHTML = '';
    counryList.innerHTML = '';
    fetchCountries(searchQuery.value).then(countries => {
        if (countries.length === 1) {
            createCounryCard(countries)
        } else if(countries.length > 1 && countries.length >= 10){
            createCounryList(countries)
        }
    }
    )
    e.target.value = ''
}, 3000))

function createCounryList(counryList) {
    const listMarkup = counryList.map(country => {
        return `<li>${country.name.official}</li>`
    }).join('')
counryList.innerHTML = listMarkup
}

function createCounryCard(country) {
    const languages = country[0].languages;
    const languageKeys = Object.keys(languages);
    const language = languageKeys.map(lang => `<li>${languages[lang]}</li>`).join(' ')
const cardMarkup = `<h1></h1>
<p>Capital: ${country.capital}</p>
<p>Population: ${country.population}</p>
<ul>Languages: ${language}</ul>
<img src="${country[0].flags.png}" alt="Flag of ${country[0].flags.alt}">
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
