
import image from "./assets/photo-article.png"
import adv from "./assets/adv2.png"

export function Articles() {
    return(
        <div className="article-container">
            <div className="article">
                <img className="article__image" src={image} alt="" />
                <div className="article__content">
                    <h1>Colapso mental: cuando siento el peso del mundo sobre mí.</h1>
                    <p>A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…</p>
                </div>
            </div>
            <div className="article">
                <img  className="article__image" src={image} alt="" />
                <div className="article__content">
                    <h1>Colapso mental: cuando siento el peso del mundo sobre mí.</h1>
                    <p>A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…</p>
                </div>
            </div>
            <div className="article__adv">
                <img src={adv} alt="" />
            </div>
        </div>
    )
}