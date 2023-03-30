import { Venues } from "./Venue.js"
// import { Bands} from "./band.js"
// import { Bookings} from "./bookings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__venue">
        <h2>Venue</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__band">
        <h2>Band</h2>
        ${Bands()}
    </section>
</article>

<article class="Bookings">
    <h2>Bookings</h2>
    ${Bookings()}
</article>
`

mainContainer.innerHTML = applicationHTML