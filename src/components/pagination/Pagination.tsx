import React from "react";
import MuPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import styles from "./pagination.module.scss";

const Pagination: React.FC = () => {
  return (
    <div className={styles["pagination-box"]}>
      <Stack spacing={1}>
        <MuPagination
          count={10}
          variant="outlined"
          className={styles.pagination}
          color="primary"
          
        />
      </Stack>
    </div>
  );
};

export default Pagination;
