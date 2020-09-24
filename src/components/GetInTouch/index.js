import React from 'react'
import { GetInTouchForm } from '../forms'

const GetInTouch = () => (
  <div className='columns is-multiline'>
    <div className='column is-6' style={{ borderRadius: '5px' }}>
      <section className='section'>
        <p className='has-text-centered'>
          <img alt='' src='/img/coffee.png' />
        </p>
        <p>This is a test</p>
      </section>
    </div>
    <div className='column is-6' style={{ borderRadius: '5px' }}>
      <section className='section'>
        <div className='container'>
          <GetInTouchForm />
        </div>
      </section>
    </div>
  </div>
)

export default GetInTouch

