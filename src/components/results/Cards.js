import React from "react";
import { Link } from "react-router-dom";
import "./css/cards.css";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import emptyheart from "../../images/heart.png";
import heart from "../../images/heart-f.png";
import emoji from "../../images/happy.png";
import image from "../../images/image-gallery.png";
import text from "../../images/note.png";
import loader from "../../images/loader.gif";
import CardsVM from "./CardsVM";
import { useStore } from "../../Context";

import Valutazione from "./Check/Valutazione";
import CheckPhone from "./Check/ControlloTelefono";
import MobileLink from "./Check/ControlloLinkMobile";

import { observer } from "mobx-react";

function Fetch() {
  const {
    places,
    searched,
    isLoading,
    showMorePlaces,
    isLike,
    setLike,
    setDislike,
    addFavoriteClick,
  } = CardsVM(useStore());

  return (
    <div id="results">
      {places &&
        !isLoading &&
        places.map((locale, index) => (
          <div className="card" key={index}>
            <div className="immagine">
              <img
                src={locale.url_image}
                className={locale.url_image === "" ? "hidden" : "card_image"}
                alt={locale.name}
              />
              <p className={locale.category === "" ? "hidden" : "categoria"}>
                <span>{locale.category}</span>
              </p>
            </div>
            <div className="info">
              <div className="valutazioneMobile">
                <Rating
                  className="ratingMobile"
                  name="half-rating-read"
                  value={Number(locale.totalValue)}
                  precision={0.1}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                  }
                />
                <Valutazione val={locale.totalValue} />
              </div>
              <div className="backheart2">
                <Link
                  to="/DettagliLocale"
                  className={locale.name === "" ? "hidden" : "nome_locale"}
                  state={{
                    id_rist: locale.id,
                  }}
                >
                  {locale.name}
                </Link>
                <input
                  type="image"
                  id="img"
                  className="heart"
                  src={emptyheart}
                  // onClick={addFavoriteClick}
                  onClick={isLike ? setDislike : setLike}
                />
              </div>
              <CheckPhone phone={locale.phone === "" ? "" : locale.phone} />
              <div className="rating">
                <p>Valutazioni</p>
                {locale.photo_score > 0 ? (
                  <div>
                    <img
                      src={image}
                      alt="valutazione foto"
                      className="imgValutazione"
                    />
                    <Rating
                      emptyIcon={
                        <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                      }
                      name="half-rating-read"
                      className="stars"
                      value={locale.photo_score}
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
                      className="imgValutazione"
                    />
                    <Rating
                      name="half-rating-read"
                      className="stars"
                      value={locale.text_score}
                      precision={0.1}
                      readOnly
                      emptyIcon={
                        <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                      }
                    />
                    <div>{Number(locale.text_score).toFixed(2)}</div>
                  </div>
                ) : null}
                {locale.emoji_score > 0 ? (
                  <div>
                    <img
                      src={emoji}
                      alt="valutazione emoji"
                      className="imgValutazione"
                    />
                    <Rating
                      name="half-rating-read"
                      className="stars"
                      value={locale.emoji_score}
                      precision={0.1}
                      readOnly
                      emptyIcon={
                        <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                      }
                    />
                    <div>{Number(locale.emoji_score).toFixed(2)}</div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="result">
              <div className="valutazioneDesktop">
                <Rating
                  name="half-rating-read"
                  value={locale.totalValue}
                  precision={0.1}
                  readOnly
                />
                <Valutazione val={locale.totalValue} />
              </div>
              <a
                className={locale.site === "" ? "hidden" : "card_website"}
                href={locale.site}
                target="_blank"
              >
                <span>Vai al sito</span>
              </a>
              <a
                className="card_location"
                href={
                  "https://www.google.com/maps/?q=" +
                  locale.latitude +
                  "," +
                  locale.longitude
                }
                target="_blank"
              >
                <span>Apri su GMaps</span>
              </a>
              <MobileLink
                sitoweb={locale.site === "" ? null : locale.site}
                latitudine={locale.latitude}
                longitudine={locale.longitude}
              />
            </div>
          </div>
        ))}
      {places && !searched && (
        <button onClick={showMorePlaces}>Vedi altri</button>
      )}
      {!places && !isLoading && <h1>Non è stato trovato nessun risultato!?</h1>}
      {!places && isLoading && <h2>Caricamento in corso</h2>}
      {/* {!places && isLoading && (<div className="loader"> <img src={loader} /></div>)} */}
    </div>
  );
}
export default observer(Fetch);
