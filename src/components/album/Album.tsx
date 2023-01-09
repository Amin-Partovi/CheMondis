import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AlbumData } from "../../utils/types";
import Show from "../../assets/images/show.svg";

import styles from "./album.module.scss";

const IMG_SRC = "https://via.placeholder.com/150/00ff";

interface Props {
  data: AlbumData;
}

const Album: React.FC<Props> = ({ data }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  const { title, id } = data;
  return (
    <Link to={`/${id}`}>
      <div
        className={styles["album-box"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles["image-box"]}>
          <img className={styles.cover} src={IMG_SRC} alt={title} />

          <div
            className={`${styles["icon-box"]} ${isHovered && styles.hovered}`}
          >
            <img src={Show} alt="show" />
          </div>
        </div>

        <h2 className={styles.title}>{title}</h2>
      </div>
    </Link>
  );
};

export default Album;
