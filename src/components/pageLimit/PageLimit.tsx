import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import { texts } from "../../texts/text";

import styles from "./page-limit.module.scss";

const pageLimits = [20, 30, 50];

const PageLimit: React.FC = () => {
  const navigate = useNavigate();

  function handleClick(limit: number) {
    navigate({
      search: createSearchParams({
        limit: limit.toString(),
      }).toString(),
    });
  }

  return (
    <div className={styles["limit-box"]}>
      {pageLimits.map((item: number, index: number) => (
        <>
          <span onClick={() => handleClick(item)} className={styles.limit}>
            {item}
          </span>
          {index !== pageLimits.length - 1 && "|"}
        </>
      ))}

      <span>{texts.PER_PAGE}</span>
    </div>
  );
};

export default PageLimit;
