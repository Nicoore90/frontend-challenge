import Slider from "infinite-react-carousel"

export function Carousel({images}) {
    return(
        <div className="hero">
            <section className="slider">
                <Slider className="slider__content">
                    {images.map(image => <div className="slider__content--item" key={image.id}> <img src={image.image} alt="" /></div>)}
                </Slider>
            </section>
        </div>
    )
}