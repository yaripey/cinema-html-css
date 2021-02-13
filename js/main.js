import films from '../mocked-data.js'

import { renderFilm } from './helpers.js'

const mainFilm = films[0]

document.addEventListener('DOMContentLoaded', () => {
  const hallAnchor = document.querySelector('.hall')
  
  renderFilm(mainFilm, hallAnchor)
})
