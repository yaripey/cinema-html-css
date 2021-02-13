export function renderFilm(
  {
    poster, 
    name, 
    description, 
    times, 
    dates,
    seats
  }, anchor) {
  const filmBlock = `
    <article class="about-film">
      <div class="film-poster">
        <img src="${poster}" alt="${name}" />
      </div>
      <div class="information">
        <h1>${name}</h1>
        <p class="description">
          ${description}
        </p>
        <form class="film-info">
          <div class="time-block">
            ${createTimesBlock(times)}
          </div>
          <div class="date-block">
            ${createDatesBlock(dates)}
          </div>
        </form>
      </div>
    </article>
    <div class="sits">
      <div class="screen">
        <div class="first-half"></div>
        <div class="second-half"></div>
        <div class="screen-label">Екран</div>
      </div>
    </div>
    <form name="seats-buttons class="seats-buttons">
      ${createSeats(seats)}
    </form>
    `

  anchor.innerHTML = filmBlock
}

function createTimesBlock(times) {
  return times.map(time => `
    <label>
      <input
        class="radio-box"
        type="radio"
        name="time"
        id="time1"
        value="${time}"
      />
      <div class="input-label"><time>${time}</time></div>
    </label>
  `).join('')
}

function createDatesBlock(dates) {
  return dates.map(date => `
  <label>
    <input
      class="radio-box"
      type="radio"
      name="date"
      value="${date}"
    />
    <div class="input-label">
      <time datetime="${date}">${transformDate(date)}</time>
    </div>
  </label>
  `).join('')
}

function transformDate(rawDate) {
  const months = {
    '01': 'січ',
    '02': 'лют',
    '03': 'бер',
    '04': 'квіт',
    '05': 'трав',
    '06': 'чер',
    '07': 'лип',
    '08': 'сер',
    '09': 'вер',
    '10': 'жов',
    '11': 'лис',
    '12': 'груд'
  }
  const rawDateValues = rawDate.split('-')
  return `${rawDateValues[2]} ${months[rawDateValues[1]]}`
}

function createSeats(seatsData) {
  return seatsData.map((row, rowNumber) => `
      <div class="hall-row">
      <div class="row-number">${rowNumber + 1}</div>
        ${row.map((seat, seatNumber) => `
          <label>
            <input 
              type="checkbox" 
              value="${rowNumber + 1}-${seatNumber + 1}" 
              class="seat-check" 
              ${seat === "u" ? 'disabled' : ''}  
            />
            <div class="seat-text">${seatNumber + 1}</div>
          </label>
        `).join('')}
      </div>
    `
  ).join('')
}
