import React from "react";
import "./css/details.css";
import Rating from "@mui/material/Rating";
import CheckImg from "./Check/ControlloImmagine";
import CheckTag from "./Check/ControlloTags";
import { useStore } from "../../Context";
import { observer } from "mobx-react";
import DettagliLocaleVM from "./DetailsVM";
import StarIcon from "@mui/icons-material/Star";

function DettagliLocale() {
  const { place, postSocial } = DettagliLocaleVM(useStore());

  return (
    <>
      <div className="dettagliLocale">
        <h1 className="localePost">{place.name}</h1>
        <p className="telefonoPost">{place.phone}</p>
        <Rating
          emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
          className="valutazionePost"
          name="half-rating-read"
          value={Number(place.totalValue)}
          precision={0.1}
          readOnly
        />
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
      <div className="post">
        {postSocial &&
          postSocial.map((post, index) => (
            <div className="postcard" key={index}>
              <CheckImg image={post.url_image} />
              <div className="postinfo">
                <p className={post.text === "null" ? "hidden" : "post"}>
                  {post.text}
                </p>
                <CheckTag tags={post.labels} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default observer(DettagliLocale);
