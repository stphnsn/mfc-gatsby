import React from 'react'

import { Template } from '../components/Template'

const Page = () => (
  <Template
    title="Manor Farm Cottage, Goodmanham, East Yorkshire"
    desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
    id="home">
    <section className="intro">
      <h1>Manor Farm Cottage</h1>
      <p className="intro">
        Deep in the heart of rural East Yorkshire, Manor Farm Cottage is a beautiful retreat nestled in Goodmanham
        village at the foot of the rolling Yorkshire Wolds.
      </p>
    </section>
    <section className="gallery">
      <figure>
        <img
          src="/assets/images/2022/cottage-exterior-rear.jpg"
          alt="External view of Manor Farm Cottage a 2 bed holiday let near York"
        />
      </figure>
      <figure>
        <img
          src="/assets/images/2022/cottage-lounge.jpg"
          alt="View of the well appointed and comfortable interior of Manor Farm cottage"
        />
      </figure>
      <figure>
        <img src="/assets/images/2022/cottage-exterior-front.jpg" alt="Exterior view of Manor Farm Cottage" />
      </figure>
      <figure>
        <img src="/assets/images/field-1660x1104@75.jpg" alt="The wonderful view from the cottage" />
      </figure>
    </section>

    <section className="text">
      <p>
        <a href="/the-cottage/">The Cottage</a> re-opens for guests from 16th July and is available for bookings from
        23rd July until the end of the year.
      </p>

      <p>
        The property has been extended with a large master bedroom. It has an ensuite with a walk-in shower, sliding
        doors to the patio, and superb views.
      </p>
      <p>
        We’ve added new windows and doors thoughout the cottage to make the most of the outside space and the amazing
        countryside.
      </p>

      <p>
        Set in 23 acres of private rural countryside, and within easy reach of the very best that the region has to
        offer, you’ll find awe-inspiring scenery, quaint market towns, picture-postcard seaside resorts and must-see
        tourist spots all on your doorstep.
      </p>
      <p>
        If you want to discover for yourself just why Yorkshire is known as ‘God’s Own County’, Manor Farm Cottage is
        the perfect base.
      </p>
      <p>
        Book your stay by ringing Liz on <a href="tel:+441430873510">+44 1430 873510</a> or email{' '}
        <a href="mailto:info@manorfarm-cottages.co.uk">info@manorfarm-cottages.co.uk</a>.
      </p>
    </section>
  </Template>
)

export default Page
