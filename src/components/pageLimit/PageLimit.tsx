import React from "react";
import { useSearchParams } from "react-router-dom";

import { texts } from "../../texts/text";

import styles from "./page-limit.module.scss";

const pageLimits = [20, 30, 50];

const PageLimit: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get("limit") ?? 20;

  function handleClick(limit: number) {
    searchParams.set("limit", limit.toString());

    setSearchParams(searchParams);
  }

  return (
    <div className={styles["limit-box"]}>
      {pageLimits.map((item: number, index: number) => (
        <div key={item} className={styles["flex-box"]}>
          <div
            className={`${styles.limit} ${+limit === item && styles.active}`}
          >
            <span onClick={() => handleClick(item)}>{item}</span>
          </div>
          {index !== pageLimits.length - 1 && "|"}
        </div>
      ))}

      <span>{texts.PER_PAGE}</span>
    </div>
  );
};

export default PageLimit;
