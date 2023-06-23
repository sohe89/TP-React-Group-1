import React from 'react';
import { Carousel } from 'react-bootstrap';


function HomeStore(props) {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6238209/pexels-photo-6238209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Store group one"
                />
                <Carousel.Caption>
                <h2>Smile</h2>
                <p>Todo lo que buscás en un solo lugar</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6348105/pexels-photo-6348105.jpeg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h2>Pickup in Store & Delivery Options</h2>
                <p>Elige como recibir tu pedido.</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
        </>
    )
}

export default HomeStore;