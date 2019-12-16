import React from "react";
import ModalImage from "react-modal-image";
import LazyLoad from 'react-lazyload';
import noImage from "../img/icon.png"

const ListRender = ({ data }) => {
  return Object.keys(data).map(function (obj) {

    const showStatus = (obj) => {
      if (data[obj].show.status === "Ended") {
        return data[obj].show.premiered.split('-')[0]
      } else {
        return data[obj].show.premiered.split('-')[0] + " – ..."
      }
    }

    const episodeStatus = (obj) => {
      if (data[obj].number == null) {
        return "Special"
      } else {
        return data[obj].number
      }
    }

    return (
      <li className="episodes__list__item" key={data[obj].id} >
        <LazyLoad height={200} offset={100}>
          <ModalImage
            className="episodes__list__item__img"
            small={data[obj].show.image ? data[obj].show.image.medium : noImage}
            large={data[obj].show.image ? data[obj].show.image.original : noImage}
            alt=""
            hideDownload="true"
            hideZoom="true"
            showRotate="false"
          />
        </LazyLoad>
        <a href={data[obj].url} className="episodes__list__item__text">
          <p className="episodes__list__item__text__title">{data[obj].show.name}</p>
          <p className="episodes__list__item__text__year">{showStatus(obj)}</p>
          <p className="episodes__list__item__text__season">Сезон: {JSON.stringify(data[obj].season)} Эпизод: {episodeStatus(obj)}</p>
        </a>
      </li>
    )
  })
};

export default ListRender;