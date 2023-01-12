import React from "react";

import styles from "./photo-detail.module.scss";

import Close from "../../assets/images/close.svg";
import { PhotoData } from "../../utils/types";
import { texts } from "../../texts/text";

interface Props {
  photo: PhotoData;
  albumTitle: string;
  owner: string;
}

const PhotoDetail: React.FC<Props> = ({ photo, albumTitle, owner }) => {
  return (
    <div className={styles["photo-box"]}>
      <img src={photo.url} alt={photo.title} className={styles.photo} />
      <div className={styles.details}>
        <div>
          {texts.OWNER}: <strong>{owner}</strong>
        </div>
        <div>
          {texts.ALBUM}: <strong>{albumTitle}</strong>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
