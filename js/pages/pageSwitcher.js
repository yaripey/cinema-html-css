import pageInit from './pageInit.js'

const url = 'cinema-html-css/'

export default function pageSwitcher(destination) {
  window.history.pushState(null, null, url + destination)
  pageInit();
}
