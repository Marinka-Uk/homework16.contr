import fetchCountries from './fetchCountries'
const searchQuery = document.querySelector('.search')


searchQuery.addEventListener('input', () => {
    fetchCountries(searchQuery.value).then(console.log)
})