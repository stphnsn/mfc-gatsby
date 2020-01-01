import React from 'react'

import { Template } from '../components/Template'

const Page = () => (
  <Template
    title="Getting here | Manor Farm Cottage, Goodmanham, East Yorkshire"
    desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
    id="getting-here">
    <section className="intro">
      <h1>Getting here</h1>
      <p>
        You’ll find Manor Farm Cottage at the top of the village on the only road into Goodmanham, and just 5 minutes
        from the A1079.
      </p>
    </section>
    <section className="text">
      <p>
        As there are quite a few Manor Farms in the region it’s best to use our postcode YO43 3JA to find us in your
        sat-nav or you can{' '}
        <a
          href="http://maps.google.com/maps?daddr=Manor+Farm+Cottages%2C+Goodmanham%2C+York%2C+YO43+3JA"
          rel="external">
          get directions
        </a>
        .
      </p>
      <p>
        Our full address is:
        <br />
        Manor Farm,
        <br />
        Goodmanham,
        <br />
        York,
        <br />
        YO43 3JA
      </p>
    </section>

    <section className="room">
      <h2>East Yorkshire</h2>
      <figure>
        <img
          src="https://api.tiles.mapbox.com/v3/rpstephenson.ik7cmcb8/pin-l-village(-0.64605,53.87699,3)/-0.64605,53.87698,10/950x600.png"
          alt="Map showing the location of Manor Farm Cottages in Goodmanham near Market Weighton"
        />
      </figure>
      <p>
        Located in the heart of East Yorkshire Manor Farm Cottages are a short distance from the M62 motorway and only a
        couple of minutes from the town of Market Weighton.
      </p>
    </section>

    <section className="room">
      <h2>The Village</h2>
      <figure>
        <img
          src="https://api.tiles.mapbox.com/v3/rpstephenson.ik7cmcb8/pin-l-village(-0.64605,53.87699,3)/-0.64605,53.87698,14/950x600.png"
          alt="Map showing the location of Manor Farm Cottages in Goodmanham near Market Weighton"
        />
      </figure>
      <p>
        Once you reach Market Weighton turn off Londesborough Road and head up Goodmanham Road and into Goodmanham
        village. Continue on Main Street past the Goodmanham Arms. Manor Farm is the third building on the left after
        the church.
      </p>
    </section>
  </Template>
)

export default Page
