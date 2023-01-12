import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AlbumData, UserData } from "../../utils/types";
import Show from "../../assets/images/show.svg";

import styles from "./album.module.scss";
import Avatar from "../avatar/Avatar";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setAlbumInfo } from "../../redux/albumInfo";

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

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleClick() {
    dispatch(setAlbumInfo({ user: userData, album: data }));
    navigate(`${id}`);
  }

  return (
    <div onClick={handleClick} className={styles.link}>
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
    </div>
  );
};

export default Album;
