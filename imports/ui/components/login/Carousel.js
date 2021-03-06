import React from "react";
import { Carousel  } from 'react-bootstrap';

export default class CarouselBar extends React.Component{

    render(){
        return (
            <Carousel slide={true} controls= {false} pauseOnHover= {false} interval = {1500}>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <img width={900} height={250} className="img-responsive center-block" src="/images/rsz_bitcoin.jpg" />
                    <Carousel.Caption>
                        <h3>Buy and sell digital currency</h3>
                        <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <img width={900} height={250} className="img-responsive center-block" src="/images/rsz_bitcoinother.jpg"  />
                    <Carousel.Caption>
                        <h3>Create your digital currency portfolio today</h3>
                        <p>For added security, set limits to your funds to prevent excessive spending.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <img width={900} height={250} className="img-responsive center-block" src="/images/homepage.png" />
                    {/*<Carousel.Caption>
                        <h3 className="carouselcolor">Third slide label</h3>
                        <p className="carouselcolor">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item animateIn={true} animateOut={true}>
                    <img width={900} height={250} className="img-responsive center-block" src="/images/D3.png" />
                    {/*<Carousel.Caption>
                        <h3 className="carouselcolor">Interactive Graphs</h3>
                        <p className="carouselcolor">You can compare different crypto currencies using brushing feature</p>
                    </Carousel.Caption>*/}
                </Carousel.Item>
            </Carousel>
        );
    }
}