import React from 'react'
import { Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <Carousel autoplay>
            {
                props.images.map((el, idx) => {
                    return (
                        <div key={idx}>
                            <img style={{
                                width: '100%', maxHeight: '150px'
                            }}
                            src={`http://localhost:5000/${el}`}/>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

export default ImageSlider
