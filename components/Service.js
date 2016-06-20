import React, { PropTypes } from 'react'

const Service = ({ offers, imagesPath }) => (
    <div id="service__offers_conatiner">
        <ul className="service__offers_list">
        {offers.map((offer, idx) => <li className="service__offers_item" key={idx}>
            <img className="service__offers_image" src={"/static/images/" + offer.image} />
            <div className="service__offers_address">{offer.address}</div>
          </li>)
        }
        </ul>
    </div>
  )

export default Service
