import React, { PropTypes } from 'react'

const Service = ({ offers }) => (
    <div id="service__offers_conatiner">
        <ul>
            {offers.map((offer, idx) => <li key={idx}>{offer.address}</li>)}    
        </ul>
    </div>
  )

export default Service
