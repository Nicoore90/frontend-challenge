import { Fragment } from "react"
import { Header } from "./header/Header"
import { Footer } from "./footer/footer"

export function ContactForm() {
    return (
        <Fragment>
            <Header />
            <form className="form">
                <input className="form__nombre" type="text" placeholder="Ingresa tu nombre"/>
                <input className="form__email" type="email" placeholder="Ingresa tu correo electronico" />
                <input type="checkbox" />
                <label htmlFor="">Acepto suscribirme al newsletter</label>
                <select name="" id="" className="form__dropdown">
                    <option value="">Quiero ser madre</option>
                    <option value="">Voy a ser madre</option>
                    <option value="">Soy Madre</option>
                </select>
                <input className="form__textarea" type="textarea" placeholder="Tu mensaje"/>
                <input type="submit" />
            </form>
            <Footer />
        </Fragment>
    )
}