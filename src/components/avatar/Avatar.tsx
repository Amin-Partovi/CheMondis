import React from "react";

import { UserData } from "../../utils/types";

import styles from "./avatar.module.scss";

interface Props {
  user: UserData;
  color: string;
}

const Avatar: React.FC<Props> = ({ user, color }) => {
  const { username } = user;

  return (
    <div className={styles["avatar-box"]}>
      <div className={styles.avatar} style={{ backgroundColor: color }} />
      <span>{username}</span>
    </div>
  );
};

export default Avatar;
