import React from "react";

import { PhotoData } from "../../utils/types";
import { texts } from "../../texts/text";

import styles from "./photo-detail.module.scss";

interface Props {
  photo: PhotoData;
  albumTitle: string;
  owner: string;
}

const PhotoDetail: React.FC<Props> = ({ photo, albumTitle, owner }) => {
  return (
    <div className={styles["photo-box"]}>
      <img src={photo.url} alt={photo.title} className={styles.photo} />
      <div className={styles.details} role="meta-data">
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
