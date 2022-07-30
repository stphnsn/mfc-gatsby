import React, { FC } from 'react'

import '../../static/assets/css/styles.css'

import { Calendar } from '../components/Calendar'
import { Template } from '../components/Template'

interface Booking {
  startDate: string
  price: string
}

interface Bookings {
  [key: string]: Booking
}

interface PageContext {
  bookings: Bookings
}

interface PageProps {
  pageContext: PageContext
}

const Page: FC<PageProps> = ({ pageContext: { bookings } }) => {
  return (
    <Template
      title="The Cottage | Manor Farm Cottage, Goodmanham, East Yorkshire"
      desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
      id="the-cottage">
      <section className="intro" id="introduction">
        <h1>The Cottage</h1>
        <p>
          With Manor Farm Cottage being your home away from home, we’ve gone to great lengths to make your stay as
          comfortable and relaxing as possible.
        </p>
      </section>

      <section className="room" id="the-lounge">
        <h2>The Lounge</h2>
        <figure>
          <img src="/assets/images/2022/cottage-lounge.jpg" alt="Manor Farm Cottage’s generous lounge" />
        </figure>
        <div className="description">
          <p>
            Once inside, you’ll notice that Manor Farm Cottage been finished to a high standard, and has all the space
            and character you could wish for in a holiday retreat.
          </p>
          <p>
            Two large leather sofas provide plenty of room for relaxing, and the exposed brickwork, wooden beams and oak
            flooring that runs throughout the cottage, remind you you’re in a special place.
          </p>
          <p>
            There’s also a {`32"`} High Definition TV, Blu-Ray player and Wi-Fi to keep you entertained, if and when you
            can drag yourself away from the stunning views out of the window.
          </p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>2 large leather sofas</li>
            <li>{`32"`} Sharp HDTV with Freeview and Netflix</li>
            <li>Blu-ray / DVD player</li>
            <li>DAB Radio / iPod dock</li>
          </ul>
        </div>
      </section>

      <section className="room" id="the-kitchen">
        <h2>The Kitchen</h2>
        <figure>
          <img src="/assets/images/2022/cottage-kitchen-2.jpg" alt="The well equipped kitchen in Manor Farm Cottage" />
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
            <li>Washing machine</li>
            <li>Tumble dryer</li>
            <li>Nespresso coffee machine</li>
          </ul>
        </div>
      </section>

      <section className="room" id="master-bedroom">
        <h2>Master bedroom</h2>
        <figure>
          <img src="/assets/images/2022/cottage-master-bedroom.jpg" alt="Manor Farm Cottage’s master bedroom" />
        </figure>
        <figure>
          <img src="/assets/images/2022/cottage-master-bedroom-view.jpg" alt="Manor Farm Cottage’s master bedroom" />
        </figure>
        <div className="description">
          <p>
            The cottage has three bedrooms all of which feature full length windows providing plenty of light. The
            larger of the rooms features an en-suite bathroom with walk-in shower, a king size bed, a wardrobe, chest of
            drawers and a dressing table.
          </p>
          <p>There’s also plenty of room for a travel cot.</p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>King size bed {`(5'0")`}</li>
            <li>2 beside tables with lamps</li>
            <li>Clock radio</li>
            <li>Hair dryer</li>
            <li>Spare towels</li>
          </ul>
        </div>
      </section>

      <section className="room" id="second-bedroom">
        <h2>Second bedroom</h2>
        <figure>
          <img src="/assets/images/cottage-master-alt-1660x1104@75.jpg" alt="Manor Farm Cottage’s second bedroom" />
        </figure>
        <div className="description">
          <p>The second bedroom features a king size bed, a wardrobe, chest of drawers and a dressing table.</p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>King size bed {`(5'0")`}</li>
            <li>2 beside tables with lamps</li>
            <li>Hair dryer</li>
            <li>Spare towels</li>
          </ul>
        </div>
      </section>

      <section className="room" id="third-bedroom">
        <h2>Third bedroom</h2>
        <figure>
          <img
            src="/assets/images/2022/cottage-third-bedroom.jpg"
            alt="Manor Farm Cottage’s third bedroom shown with single bed"
          />
        </figure>
        <div className="description">
          <p>The smaller bedroom has a single bed, a wardrobe with drawers, and a bedside table.</p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Hair dryer</li>
            <li>Spare towels</li>
          </ul>
        </div>
      </section>

      <section className="room" id="the-bathroom">
        <h2>The Bathroom</h2>
        <figure>
          <img srcSet="/assets/images/2022/cottage-bathroom.jpg" alt="Manor Farm Cottage’s bathroom" />
        </figure>
        <div className="description">
          <p>
            As well as a toilet and wash basin, the bathroom has a shower-over-bath – perfect for a long soak at the end
            of a hard day exploring.
          </p>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Large shower-over-bath</li>
            <li>Heated towel rail</li>
          </ul>
        </div>
      </section>

      <section className="room" id="outside-area">
        <h2>Outside area</h2>
        <div className="description extra">
          <p>
            As much as we can guarantee a relaxing, quiet stay inside, sadly we can’t guarantee the weather outside.
            However, if the sun is shining you’ll enjoy making great use of your own private outdoor area, which has a
            patio table &amp; chairs and a BBQ, perfect for al-fresco dining.
          </p>
        </div>
      </section>

      <section className="room" id="parking">
        <h2>Parking</h2>
        <div className="description extra">
          <p>One thing that Manor Farm Cottage is not short of is space. Parking is never an issue.</p>
        </div>
      </section>

      <section className="room" id="accessibility">
        <h2>Accessibility</h2>
        <div className="description extra">
          <p>
            Manor Farm Cottage has been designed with accessibility in mind. With everything on one level and wide
            doorways visitors with disabilities will have a relaxing and enjoyable stay. For more detailed information
            you can read our <a href="/access-statement/">access statement</a>.
          </p>
        </div>
      </section>

      <section className="calendar text" id="booking-your-stay">
        <h2>Booking your stay</h2>
        <p>
          To make your booking check the availability calendar below and ring Liz on{' '}
          <a href="tel:+441430873510">+44 1430 873510</a> or <a href="mailto:info@manorfarm-cottages.co.uk">email us</a>{' '}
          with your questions.
        </p>
        <p>
          Bookings start and end on a Saturday and the price displayed is for 7 nights. Check in from 3pm. Check out by
          10am. Shorter stays (min 3 nights) may be available November to March. Unfortunately we are unable to
          accommodate pets except assistance dogs.
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
