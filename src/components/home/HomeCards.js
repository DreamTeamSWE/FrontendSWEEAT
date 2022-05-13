import React from "react";
import Valutazione from "../results/Check/Valutazione";
import MobileLink from "../results/Check/ControlloLinkMobileH";
import CheckPhone from "../results/Check/ControlloTelefonoH";
import "../../components/results/css/cards.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import emptyheart from "./../../images/heart.png";
import heart from "./../../images/heart-f.png";
import emoji from "./../../images/happy.png";
import image from "./../../images/image-gallery.png";
import text from "./../../images/note.png";
import StarIcon from "@mui/icons-material/Star";

import HomeCardsVM from "./HomeCardsVM";
import { useStore } from "../../Context";
import { observer } from "mobx-react";

function HomeCards() {
  const { topHome, isLike, setLike, setDislike, fetchtopHome } = HomeCardsVM(
    useStore()
  );
  return (
    <div id="bestLocals">
      <h1>I migliori locali di Sweeat</h1>
      {topHome &&
        topHome.map((locale) => (
          <div className="cardHome" key={locale.id}>
            <div className="immagineHome">
              <img
                src={locale.url_image}
                className={
                  locale.url_image === "" ? "hidden" : "cardHome_image"
                }
                alt={locale.name}
              />
              <p
                className={locale.category === "" ? "hidden" : "categoriaHome"}
              >
                <span>{locale.category}</span>
              </p>
            </div>
            <div className="infoHome">
              <Rating
                emptyIcon={
                  <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                }
                className="ratingMobileHome"
                name="half-rating-read"
                value={locale.totalValue}
                precision={0.1}
                readOnly
              />
              <Valutazione val={locale.totalValue} />
              <div className="contenitoreNome">
                <Link
                  to="/dettagliLocale"
                  className="nomeLocaleHome"
                  state={{ id_rist: locale.id }}
                >
                  {/*<Link to={{ pathname: "/Post", state: { nome_locale: locale.nome_ristorante }}}>*/}
                  {/*to="/Post" className={locale.nome_ristorante == "null" ? 'hidden' : 'nome_locale_home'}>*/}
                  {locale.name}
                </Link>
                <input
                  type="image"
                  id="img"
                  className="heartHome"
                  src={emptyheart}
                  onClick={isLike ? setDislike : setLike}
                />
              </div>
              <CheckPhone phone={locale.phone === "" ? "" : locale.phone} />
              <div className="ratingHome">
                <p>Valutazioni</p>
                {locale.photo_score > 0 ? (
                  <div>
                    <img
                      src={image}
                      alt="valutazione immagini"
                      className="imgValutazioneHome"
                    />
                    <Rating
                      emptyIcon={
                        <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                      }
                      name="half-rating-read"
                      className="stars"
                      value={locale.photo_score === 0 ? 0 : locale.photo_score}
                      precision={0.1}
                      readOnly
                    />
                    <div>{Number(locale.photo_score).toFixed(2)}</div>
                  </div>
                ) : null}
                {locale.text_score > 0 ? (
                  <div>
                    <img
                      src={text}
                      alt="valutazione testi"
                      className="imgValutazioneHome"
                    />
                    <Rating
                      emptyIcon={
                        <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                      }
                      name="half-rating-read"
                      className="stars"
                      value={locale.text_score === 0 ? 0 : locale.text_score}
                      precision={0.1}
                      readOnly
                    />
                    <div>{Number(locale.text_score).toFixed(2)}</div>
                  </div>
                ) : null}
                {locale.emoji_score > 0 ? (
                  <div>
                    <img
                      src={emoji}
                      alt="valutazione emoji"
                      className="imgValutazioneHome"
                    />
                    <Rating
                      emptyIcon={
                        <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                      }
                      name="half-rating-read"
                      className="stars"
                      value={locale.emoji_score === 0 ? 0 : locale.emoji_score}
                      precision={0.1}
                      readOnly
                    />
                    <div>{Number(locale.emoji_score).toFixed(2)}</div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="resultHome">
              <MobileLink
                sitoweb={locale.site === "" ? null : locale.site}
                latitudine={locale.latitude}
                longitudine={locale.longitude}
              />
            </div>
          </div>
        ))}
      {!topHome && <h2>Non ci sono locali?!?!?!</h2>}
      <div className="contenitorePager">
        <button onClick={() => fetchtopHome(0)}>1</button>
        <button onClick={() => fetchtopHome(1)}>2</button>
        <button onClick={() => fetchtopHome(2)}>3</button>
        <button onClick={() => fetchtopHome(3)}>4</button>
        <button onClick={() => fetchtopHome(4)}>5</button>
      </div>
    </div>
  );
}

export default observer(HomeCards);
