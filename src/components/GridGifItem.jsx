import React from 'react'
import PropTypes from 'prop-types'

const GridGifItem = props => {
    return (
        <div className="card" style={{ maxWidth: '18rem' }}>
            <img src={img.url} className="card-img-top" alt={img.title} />
            <div className="card-body">
                <h5 className="card-title">{img.title}</h5>
            </div>
        </div>
    )
}

GridGifItem.propTypes = {

}

export default GridGifItem



