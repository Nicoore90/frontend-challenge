import image from "./assets/newsletter.png"

export function Newsletter() {
    return(
        <div className="newsletter">
            <img className="newsletter__image" src={image} alt="" />
            <input className="newsletter__input" type="email" placeholder="Ingresa tu correo"/>
            <button className="newsletter__send">Enviar</button>
        </div>
    )
}