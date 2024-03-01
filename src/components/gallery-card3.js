import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card3.css'

const GalleryCard3 = (props) => {
  return (
    <div className={`gallery-card3-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="gallery-card3-image"
      />
    </div>
  )
}

GalleryCard3.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&ixlib=rb-1.2.1&w=1500',
  rootClassName: '',
  imageAlt: 'image',
}

GalleryCard3.propTypes = {
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default GalleryCard3
