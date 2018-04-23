import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../../assets/images/home-page', false, /\.(png|jpe?g|svg)$/));

const items = [
    {
        src: images['benh-vien.jpg'],
        altText: 'Slide 1',
    },
    {
        src: images['chu-noi.jpg'],
        altText: 'Slide 2',
    },
    {
        src: images['chu-noi.jpg'],
        altText: 'Slide 3',
    }
];

class CarouselCustom extends Component {
    state = { activeIndex: 0 };
    
    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item, key) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={key}
                >   
                    <div style={{backgroundImage: `url(${item.src})`, width: "100%", paddingTop: "55%", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
                    </div>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                interval='2500'
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
            </Carousel>
        );
    }
}


export default CarouselCustom;
