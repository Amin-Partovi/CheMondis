import React, { PropsWithChildren } from "react";

import styles from "./container.module.scss";

const Container: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Container;
