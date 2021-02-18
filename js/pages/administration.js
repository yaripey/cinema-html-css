import { getAllFilms, newFilm, getHalls, newSession } from '../common/queries.js'


const adminPage = (anchor) => {
  const markUp = `
    <div>
      <select id="pageSelect">
        <option value="" disabled selected>Оберіть дію</option>
        <option value="newFilm">Добавить фильм</option>
        <option value="newSession">Добавить сеанс</option>
      <select>
      <form name="adminForm" id="action">

      </form>
    </div>
  `

  anchor.innerHTML = markUp
  document.querySelector('#pageSelect').addEventListener('change', selectAdminAction)
}

function selectAdminAction(e) {
  const selectedAction = e.target.value
  const actionAnchor = document.querySelector('#action')
  switch(selectedAction) {
    case "newFilm": 
      actionAnchor.innerHTML = `
        <label for="filmName">Назва фільму</label>
        <input name="filmName" type="text">
        
        <label for="filmDesc">Опис фільму</label>
        <input name="filmDesc" type="textarea">
        
        <label for="filmPosterLink">Посилання до постера фільму</label>
        <input type="text" name="filmPosterLink">

        <input type="submit" id="filmSubmit">
      `
      document.querySelector('#filmSubmit').addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.forms.adminForm
        const filmName = form.filmName.value
        const filmDesc = form.filmDesc.value
        const filmPosterLink = form.filmPosterLink.value
        newFilm(filmName, filmDesc, filmPosterLink)
          .then(res => res.json())
          .then(res => console.log(res))
      })
      break;

    case "newSession":
      actionAnchor.innerHTML = `Processing`
      getAllFilms()
        .then(res => res.json())
        .then(res => {
          const films = res.data.allFilms
          getHalls()
            .then(res => res.json())
            .then(res => {
              const halls = res.data.getHalls
              actionAnchor.innerHTML = `
                <select name="filmID">
                  <option selected disabled value="">Оберіть фільм</option>
                  ${films.map(film => `<option value="${film.id}">${film.name}</option>`)}
                </select>
                <select id="hall" name="hallID">
                  <option selected disabled value="">Оберіть зал</option>
                  ${halls.map(hall => `<option value="${hall.id}">${hall.name}</option>`)}
                </select>
                <input placeholder="Оберіть дату" type="date" name="date">
                <select id="time" name="time">
                  <option selected disabled value="">Оберіть час</option>
                  <option value="10:00">10:00</option>
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="16:00">16:00</option>
                  <option value="18:00">18:00</option>
                </select>
                <input type="submit" id="sessionSubmit" value="Створити">
              `

              document.querySelector('#sessionSubmit').addEventListener('click', (e) => {
                e.preventDefault()
                const form = document.forms.adminForm
                console.log(form)
                newSession(form.date.value, form.time.value, form.filmID.value, form.hallID.value)
                  .then(res => res.json())
                  .then(res => console.log(res))
              })
            })


          

        })
      break;
  }
  if (selectedAction === 'newFilm') {
    
  }
}


export default adminPage
