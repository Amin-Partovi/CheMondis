import React, { useEffect, useState } from "react";
import MuPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams } from "react-router-dom";

import styles from "./pagination.module.scss";

const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(0);

  const limit = searchParams.get("limit") ?? 20;
  const start = searchParams.get("start") ?? 0;

  useEffect(() => {
    setPage(Math.floor(+start / +limit + 1));
  }, [start]);

  function handleChange(event: React.ChangeEvent<unknown>, page: number) {
    const newParamValue = (+limit * (page - 1)).toString();
    searchParams.has("start")
      ? searchParams.set("start", newParamValue)
      : searchParams.append("start", newParamValue);
    setSearchParams(searchParams);
  }
  return (
    <div className={styles["pagination-box"]} data-testid="pagination">
      <Stack spacing={1}>
        <MuPagination
          count={10}
          className={styles.pagination}
          color="primary"
          onChange={handleChange}
          page={page}
          size="small"
        />
      </Stack>
    </div>
  );
};

export default Pagination;
