import React, { useState } from "react";

import { AlbumData, PhotoData, UserData } from "../../utils/types";
import Show from "../../assets/images/show.svg";
import Avatar from "../avatar/Avatar";

import styles from "./card.module.scss";

const IMG_SRC = "https://via.placeholder.com/150/00ff";

interface Props {
  data: AlbumData | PhotoData;
  user: Partial<UserData>;
  color?: string;
  onClick: (data: AlbumData | PhotoData, userData: Partial<UserData>) => void;
  withAvatar?: boolean;
  imageSrc?: string;
}

const Card: React.FC<Props> = ({
  data,
  user,
  onClick,
  color,
  withAvatar = false,
  imageSrc = IMG_SRC,
}) => {
  const { title } = data;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div onClick={() => onClick(data, user)} className={styles.link}>
      <div
        className={styles["album-box"]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {user && withAvatar && <Avatar user={user} color={color} />}
        <div className={styles["image-box"]}>
          <img className={styles.cover} src={imageSrc} alt={title} />

          <div
            className={`${styles["icon-box"]} ${isHovered && styles.hovered}`}
          >
            <img src={Show} alt="show" />
          </div>
        </div>

        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
