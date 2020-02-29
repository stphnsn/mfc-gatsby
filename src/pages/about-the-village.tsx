import React from 'react'

import { Template } from '../components/Template'

const Page = () => (
  <Template
    title="About the village | Manor Farm Cottage, Goodmanham, East Yorkshire"
    desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
    id="about-the-village">
    <section className="intro">
      <h1>About the village</h1>
      <p>
        Manor Farm Cottages sit in the middle of the sleepy village of Goodmanham. The history of the village dates back
        to the stone age, and although things have certainly changed over the years, it remains as tranquil and unspoilt
        as it has for centuries.
      </p>
    </section>

    <section className="gallery">
      <figure>
        <picture>
          <source srcSet="/assets/images/street-1660x1104@75.jpg" media="(min-width: 1100px)" />
          <source srcSet="/assets/images/street-1000x665@75.jpg" media="(min-width: 830px)" />
          <source srcSet="/assets/images/street-600x399@75.jpg" />
          <img srcSet="/assets/images/street-600x399@40.jpg" alt="Houses in the village of Goodmanham" />
        </picture>
      </figure>
      <figure>
        <picture>
          <source srcSet="/assets/images/goodmanham-arms-1660x1104@75.jpg" media="(min-width: 1100px)" />
          <source srcSet="/assets/images/goodmanham-arms-1000x665@75.jpg" media="(min-width: 830px)" />
          <source srcSet="/assets/images/goodmanham-arms-600x399@75.jpg" />
          <img srcSet="/assets/images/goodmanham-arms-600x399@40.jpg" alt="The Goodmanham Arms pub" />
        </picture>
      </figure>
      <figure>
        <picture>
          <source srcSet="/assets/images/church-1660x1104@75.jpg" media="(min-width: 1100px)" />
          <source srcSet="/assets/images/church-1000x665@75.jpg" media="(min-width: 830px)" />
          <source srcSet="/assets/images/church-600x399@75.jpg" />
          <img srcSet="/assets/images/church-600x399@40.jpg" alt="Goodmanham Church" />
        </picture>
      </figure>
      <figure>
        <picture>
          <source srcSet="/assets/images/wolds-way-1660x1104@75.jpg" media="(min-width: 1100px)" />
          <source srcSet="/assets/images/wolds-way-1000x665@75.jpg" media="(min-width: 830px)" />
          <source srcSet="/assets/images/wolds-way-600x399@75.jpg" />
          <img srcSet="/assets/images/wolds-way-600x399@40.jpg" alt="Sign post for the Wolds Way" />
        </picture>
      </figure>
    </section>

    <section className="text">
      <p>
        The heart of the village is the Goodmanham Arms, which is a friendly, traditional pub offering local beers as
        well as food and live music. It’s also a great place to meet the locals and sample a taste of village life.
      </p>
      <p>
        One of the things you’ll notice about Goodmanham is its lack of shops, and this helps give it a peaceful and
        untouched feel. But that doesn’t mean that you’re in the middle of nowhere.
      </p>
      <p>
        The town of Market Weighton is just over a mile away, and here you’ll find all the amenities you could possibly
        need, including supermarkets, shops, restaurants, takeaways, bars and pubs.
      </p>
    </section>
  </Template>
)

export default Page
