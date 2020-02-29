import React, { FC } from 'react'

import { Helmet } from 'react-helmet'

import '../../../static/assets/css/styles.css'

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Nav } from '../Nav'

interface TemplateProps {
  id: string
  title: string
  desc: string
}

const Template: FC<TemplateProps> = ({ id, title, desc, children }) => (
  <div className={id}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="icon" type="image/ico" sizes="32x32" href="/assets/favicon.ico" />
    </Helmet>
    <div className="container">
      <Header />
      <Nav />
      <main className="main" data-page={id}>
        <div className="content" id="content">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  </div>
)

export { Template }
