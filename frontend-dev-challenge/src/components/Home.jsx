import { Fragment } from "react"
import { Header } from "./header/Header"
import adv from "./assets/adv.png"
import { Carousel } from "./carousel/carousel"
import { Articles } from "./articles/articles"
import { Faq } from "./faq/faq"
import testimony from "./assets/testimonio-1.png"
import { Newsletter } from "./newsletter/Newsletter"
import { Footer } from "./footer/footer"
import { Dropdown } from "./dropdown/dropdown"
import hero1 from "./carousel/assets/hero1.png"
import hero2 from "./carousel/assets/hero2.png"
import hero3 from "./carousel/assets/hero3.png"
import hero4 from "./carousel/assets/hero4.png"
import hero5 from "./carousel/assets/hero5.png"



export function Home() {
    const images = [
        {
            id: 1,
            image: {hero1}
        },
        {
            id: 2,
            image: {hero2}
        },
        {
            id: 3,
            image: {hero3}
        },
        {
            id: 4,
            image: {hero4}
        },
        {
            id: 5,
            image: {hero5}
        }
    ]
    return (
        <Fragment>
            <Header><Dropdown /></Header> 
            <img className="adv" src={adv} alt="" />
            <Carousel images={images} />
            <Articles />
            <Faq />
            <img className="testimony" src={testimony} alt="" />
            <Newsletter />
            <Footer />
        </Fragment>
    )
}