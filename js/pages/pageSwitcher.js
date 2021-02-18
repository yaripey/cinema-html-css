import pageInit from './pageInit.js'


export default function pageSwitcher(destination) {
  window.history.pushState(null, null, destination)
  pageInit();
}
