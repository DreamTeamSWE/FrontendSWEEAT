import React from "react";
import "./css/details.css";
import Rating from "@mui/material/Rating";
import CheckImg from "./Check/ControlloImmagine";
import CheckTag from "./Check/ControlloTags";
import { useStore } from "../../Context";
import { observer } from "mobx-react";
import DettagliLocaleVM from "./DetailsVM";
import StarIcon from "@mui/icons-material/Star";
import emoji from "../../images/happy.png";
import image from "../../images/image-gallery.png";
import text from "../../images/note.png";
import telefono from "../../images/phone-call.png";
import SimpleImageSlider from "react-simple-image-slider";
function DettagliLocale() {
  const { place, postSocial } = DettagliLocaleVM(useStore());

  return (
    <>
      <div className="dettagliLocale">
        <div>
          <h1 className="localePost">{place.name}</h1>
          <div className={!place.phone ? "hidden" : "telDettagli"}>
            <img src={telefono} alt="Chiama" />
            <p>{place.phone}</p>
          </div>
          <div className="post_link">
            <a
              className={place.site ? "post_location" : "post_location_full"}
              href={
                "https://www.google.com/maps/?q=" +
                place.latitude +
                "," +
                place.longitude
              }
              target="_blank"
            >
              <span>Apri su GMaps</span>
            </a>
            <a
              className={place.site ? "post_website" : "hidden"}
              href={place.site}
              target="_blank"
            >
              <span>Vai al sito</span>
            </a>
          </div>
        </div>
        <div className="ratingDetails">
          <p>Valutazioni</p>
          <>
            <Rating
              emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
              className="valutazionePost"
              name="half-rating-read"
              value={Number(place.totalValue)}
              precision={0.1}
              readOnly
            />
          </>
          <div className={!Number(place.photo_score) ? "hidden" : "rank-label"}>
            <img src={image} alt="valutazione foto" />
            <Rating
              emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
              className="valutazionePost"
              name="half-rating-read"
              value={Number(place.photo_score)}
              precision={0.1}
              readOnly
            />
          </div>
          <div className={!Number(place.text_score) ? "hidden" : "rank-label"}>
            <img src={text} alt="valutazione testi" />
            <Rating
              emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
              className="valutazionePost"
              name="half-rating-read"
              value={Number(place.text_score)}
              precision={0.1}
              readOnly
            />
          </div>
          <div className={!Number(place.emoji_score) ? "hidden" : "rank-label"}>
            <img src={emoji} alt="valutazione emoji" />
            <Rating
              emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
              className="valutazionePost"
              name="half-rating-read"
              value={Number(place.emoji_score)}
              precision={0.1}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="post">
        {postSocial &&
          postSocial.map((post, index) => (
            <div className="postcard" key={index}>
              <SimpleImageSlider
                className="immagineHome"
                images={post.url_image}
                width={350}
                height={300}
                showBullets={true}
                autoPlay={true}
                showNavs={true}
              />
              {/* <CheckImg image={post.url_image} /> */}
              <div className="postinfo">
                <p className={post.text === "null" ? "hidden" : "post"}>
                  {post.text}
                </p>
                <CheckTag tags={post.labels.length > 0 ? post.labels : null} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default observer(DettagliLocale);
