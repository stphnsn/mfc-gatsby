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
        <picture>
          <source srcSet="/assets/images/cottage-exterior-1660x1104@75.jpg" media="(min-width: 1100px)" />
          <source srcSet="/assets/images/cottage-exterior-1000x665@75.jpg" media="(min-width: 830px)" />
          <source srcSet="/assets/images/cottage-exterior-600x399@75.jpg" />
          <img
            srcSet="/assets/images/cottage-exterior-600x399@40.jpg"
            alt="External view of Manor Farm Cottage a 2 bed holiday let near York"
          />
        </picture>
      </figure>
      <figure>
        <picture>
          <source srcSet="/assets/images/cottage-lounge-1660x1104@75.jpg" media="(min-width: 1100px)" />
          <source srcSet="/assets/images/cottage-lounge-1000x665@75.jpg" media="(min-width: 830px)" />
          <source srcSet="/assets/images/cottage-lounge-600x399@75.jpg" />
          <img
            srcSet="/assets/images/cottage-lounge-600x399@40.jpg"
            alt="View of the well appointed and comfortable interior of Manor Farm cottage"
          />
        </picture>
      </figure>
      <figure>
        <picture>
          <source srcSet="/assets/images/field-1660x1104@75.jpg" media="(min-width: 1100px)" />
          <source srcSet="/assets/images/field-1000x665@75.jpg" media="(min-width: 830px)" />
          <source srcSet="/assets/images/field-600x399@75.jpg" />
          <img srcSet="/assets/images/field-600x399@40.jpg" alt="The wonderful view from the cottage" />
        </picture>
      </figure>
      <figure>
        <picture>
          <source srcSet="/assets/images/cottage-exterior-panels-1660x1104@75.jpg" media="(min-width: 1100px)" />
          <source srcSet="/assets/images/cottage-exterior-panels-1000x665@75.jpg" media="(min-width: 830px)" />
          <source srcSet="/assets/images/cottage-exterior-panels-600x399@75.jpg" />
          <img
            srcSet="/assets/images/cottage-exterior-panels-600x399@40.jpg"
            alt="Exterior view of Manor Farm Cottage"
          />
        </picture>
      </figure>
    </section>

    <section className="text">
      <p>
        Set in 23 acres of private rural countryside, and within easy reach of the very best that the region has to
        offer, you’ll find awe-inspiring scenery, quaint market towns, picture-postcard seaside resorts and must-see
        tourist spots all on your doorstep.
      </p>
      <p>
        <a href="/the-cottage/" rel="internal">
          Manor Farm Cottage
        </a>{' '}
        offers modern high-quality accommodation in a wonderfully quiet location with superb views.
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
