import React from 'react'

import '../styles.css'

import { Calendar } from '../components/Calendar'
import { Template } from '../components/Template'

const Page = ({ pageContext: { bookings } }) => {
  return (
    <Template
      title="The Cottage | Manor Farm Cottage, Goodmanham, East Yorkshire"
      desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
      id="the-cottage">
      <section className="intro">
        <h1>The Cottage</h1>
        <p>
          With Manor Farm Cottage being your home away from home, we’ve gone to great lengths to make your stay as
          comfortable as possible. After all, just because you’re in the countryside, it doesn’t mean you have to miss
          out on those touches of luxury.
        </p>
      </section>

      <section className="room">
        <h2>The Lounge</h2>
        <figure>
          <picture>
            <source srcSet="/assets/images/new/cottage-lounge-alt-1660x1104@75.jpg" media="(min-width: 1100px)" />
            <source srcSet="/assets/images/new/cottage-lounge-alt-1000x665@75.jpg" media="(min-width: 830px)" />
            <source srcSet="/assets/images/new/cottage-lounge-alt-600x399@75.jpg" />
            <img
              srcSet="/assets/images/new/cottage-lounge-alt-600x399@40.jpg"
              alt="Manor Farm Cottage’s generous lounge"
            />
          </picture>
        </figure>
        <div className="description">
          <p>
            Once inside, you’ll notice that Manor Farm Cottage been finished to a spectacularly high standard, and has
            all the space and character you could wish for in a holiday retreat.
          </p>
          <p>
            Two large 3-seater sofas provide plenty of room for relaxing, and the exposed brickwork, wooden beams and
            oak flooring that runs throughout the cottage, remind you you’re in a special place.
          </p>
          <p>
            There’s also a {`32"`} High Definition TV, Blu-Ray player and Wi-Fi to keep you entertained, if and when you
            can drag yourself away from the stunning views out of the window.
          </p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>2 full length leather sofas</li>
            <li>{`32"`} Freeview Sony HDTV</li>
            <li>Blu-ray / DVD player</li>
            <li>DAB Radio / iPod dock</li>
          </ul>
        </div>
      </section>

      <section className="room">
        <h2>The Kitchen</h2>
        <figure>
          <picture>
            <source srcSet="/assets/images/new/cottage-kitchen-1660x1104@75.jpg" media="(min-width: 1100px)" />
            <source srcSet="/assets/images/new/cottage-kitchen-1000x665@75.jpg" media="(min-width: 830px)" />
            <source srcSet="/assets/images/new/cottage-kitchen-600x399@75.jpg" />

            <img
              srcSet="/assets/images/new/cottage-kitchen-600x399@40.jpg"
              alt="The well equipped kitchen in Manor Farm Cottage"
            />
          </picture>
        </figure>
        <div className="description">
          <p>
            If you plan on eating in during your stay, our kitchen is fully equipped with everything you could need,
            including an oven and hob, microwave, fridge, freezer, dishwasher, as well as cutlery, crockery and a range
            of cooking utensils.
          </p>
          <p>There’s also a washing machine should you need to use it.</p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Oven, hob &amp; microwave</li>
            <li>Fridgefreezer</li>
            <li>Dishwasher</li>
            <li>Washer dryer</li>
          </ul>
        </div>
      </section>

      <section className="room">
        <h2>Master bedroom</h2>
        <figure>
          <picture>
            <source srcSet="/assets/images/new/cottage-master-alt-1660x1104@75.jpg" media="(min-width: 1100px)" />
            <source srcSet="/assets/images/new/cottage-master-alt-1000x665@75.jpg" media="(min-width: 830px)" />
            <source srcSet="/assets/images/new/cottage-master-alt-600x399@75.jpg" />

            <img
              srcSet="/assets/images/new/cottage-master-alt-600x399@40.jpg"
              alt="Manor Farm Cottage’s mater bedroom"
            />
          </picture>
        </figure>
        <div className="description">
          <p>
            The cottage has two comfortable-sized bedrooms, both of which feature full length windows providing plenty
            of light. The larger of the rooms features a double bed, a gent’s wardrobe, chest of drawers and a dressing
            table.
          </p>
          <p>There’s also plenty of room for a cot, which we can provide if you need one.</p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Double bed {`(4'6")`}</li>
            <li>2 beside tables with touch lamps</li>
            <li>Clock radio</li>
            <li>Hair dryer</li>
          </ul>
        </div>
      </section>

      <section className="room">
        <h2>Second bedroom</h2>
        <figure>
          <picture>
            <source srcSet="/assets/images/new/cottage-bedroom-alt-1660x1104@75.jpg" media="(min-width: 1100px)" />
            <source srcSet="/assets/images/new/cottage-bedroom-alt-1000x665@75.jpg" media="(min-width: 830px)" />
            <source srcSet="/assets/images/new/cottage-bedroom-alt-600x399@75.jpg" />
            <img
              srcSet="/assets/images/new/cottage-bedroom-alt-600x399@40.jpg"
              alt="Manor Farm Cottage’s second bedroom shown with twin beds"
            />
          </picture>
        </figure>
        <div className="description">
          <p>
            The smaller bedroom has twin beds (which can be pushed together to make a double) a gent’s wardrobe and 2
            bedside tables with touch lamps.
          </p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>2 beds {`(2'6")`}</li>
          </ul>
        </div>
      </section>

      <section className="room">
        <h2>The Bathroom</h2>
        <figure>
          <picture>
            <source srcSet="/assets/images/new/cottage-bathroom-1660x1104@75.jpg" media="(min-width: 1100px)" />
            <source srcSet="/assets/images/new/cottage-bathroom-1000x665@75.jpg" media="(min-width: 830px)" />
            <source srcSet="/assets/images/new/cottage-bathroom-600x399@75.jpg" />
            <img srcSet="/assets/images/new/cottage-bathroom-600x399@40.jpg" alt="Manor Farm Cottage’s bathroom" />
          </picture>
        </figure>
        <div className="description">
          <p>
            As well as a toilet, wash basin and shower, the bathroom has a separate bathtub – perfect for a long soak at
            the end of a hard day exploring.
          </p>
          <p>Two sets of bath towels are provided on your arrival.</p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Walk-in shower</li>
            <li>Large bathtub</li>
            <li>Heated towel rail</li>
          </ul>
        </div>
      </section>

      <section className="room">
        <h2>Outside area</h2>
        <div className="description extra">
          <p>
            As much as we can guarantee a relaxing, quiet stay inside, sadly we can’t guarantee the weather outside.
            However, if the sun is shining you’ll enjoy making great use of your own private outdoor area, which has a
            patio table &amp; chairs and a BBQ, perfect for al-fresco dining.
          </p>
        </div>
      </section>

      <section className="room">
        <h2>Parking</h2>
        <div className="description extra">
          <p>One thing that Manor Farm Cottage is not short of is space. Parking is never an issue.</p>
        </div>
      </section>

      <section className="room">
        <h2>Accessibility</h2>
        <div className="description extra">
          <p>
            Manor Farm Cottage has been designed with accessibility in mind. With everything on one level and wide
            doorways visitors with disabilities will have a relaxing and enjoyable stay. For more detailed information
            you can read our <a href="/access-statement/">access statement</a>.
          </p>
        </div>
      </section>

      <section className="calendar">
        <h2>Booking your stay</h2>
        <p>
          To make your booking check the availability calendar below and ring Liz on{' '}
          <a href="tel:+441430873510">+44 1430 873510</a> or <a href="mailto:info@manorfarm-cottages.co.uk">email us</a>{' '}
          with your questions.
        </p>
        <p>
          Bookings start and end on a Saturday and the price displayed is for 7 nights. Shorter stays (min 3 nights) may
          be available November to March. Unfortunately we are unable to accommodate pets.
        </p>

        <div className="key">
          <p className="available">
            <span></span>Available
          </p>
          <p className="unavailable">
            <span></span>Unavailable
          </p>
        </div>

        <Calendar bookings={bookings} />
      </section>
    </Template>
  )
}

export default Page
