import React from "react";

import { UserData } from "../../utils/types";

import styles from "./avatar.module.scss";

interface Props {
  username: string;
  color: string;
}

const Avatar: React.FC<Props> = ({ username, color }) => {
  return (
    <div className={styles["avatar-box"]} data-testid="avatar">
      <div
        data-testid="placeholder"
        className={styles.avatar}
        style={{ backgroundColor: color }}
      />
      <span>{username}</span>
    </div>
  );
};

export default Avatar;
