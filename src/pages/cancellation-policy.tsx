import React from 'react'

import { Template } from '../components/Template'

const Page = () => (
  <Template
    title="Cancellation policy | Manor Farm Cottage, Goodmanham, East Yorkshire"
    desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
    id="cancellation-policy">
    <section className="intro">
      <h1>Cancellation policy</h1>
    </section>

    <section className="text">
      <p>On booking – you will pay the full cost of your holiday to secure the dates you require.</p>
      <p>On cancellation more than 30 days before your booking you will receive a refund of 80% of the amount paid.</p>

      <p>
        On cancellation less than 30 days before your arrival date you will be charged the full cost of your stay with
        no refund, unless we are able to re-let the accommodation. We will make every attempt to re-let the
        accommodation.
      </p>

      <p>
        If you need to change the date of your holiday we may be able to offer you alternative dates. However, if the
        price of the alternative dates differ from your original booking, you will be liable for the cost of whichever
        rate is higher.
      </p>

      <p>
        Please email <a href="mailto:info@manorfarmcottages.co.uk">info@manorfarm-cottages.co.uk</a> of your intention
        to cancel. We will respond as soon as possible to confirm receipt of your cancellation request.
      </p>
    </section>
  </Template>
)

export default Page
