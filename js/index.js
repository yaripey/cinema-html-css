import pageSwitcher from './pages/pageSwitcher.js'
import pageInit from './pages/pageInit.js'

const headerLink = document.querySelector('.logo')
headerLink.addEventListener('click', (e) => {
  e.preventDefault()
  pageSwitcher('/')
})

pageInit()

// document.querySelector("#testbutton").addEventListener('click', (e) => {
//   e.preventDefault()
//   const search = window.location.search
//   const urlParams = new URLSearchParams(search)
//   const test = urlParams.get('test')
//   console.log('super duper', test)
// })
