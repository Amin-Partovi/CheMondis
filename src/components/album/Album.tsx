import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AlbumData, UserData } from "../../utils/types";
import Show from "../../assets/images/show.svg";

import styles from "./album.module.scss";
import Avatar from "../avatar/Avatar";

const IMG_SRC = "https://via.placeholder.com/150/00ff";

interface Props {
  data: AlbumData;
  user: {
    userData: UserData;
    color: string;
  };
}

const Album: React.FC<Props> = ({ data, user }) => {
  const { title, id } = data;
  const { userData, color } = user;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <Link to={`/${id}`}>
      <div
        className={styles["album-box"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Avatar user={userData} color={color} />
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
