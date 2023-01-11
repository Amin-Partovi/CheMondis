import React from "react";
import MuPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";

import styles from "./pagination.module.scss";

const Pagination: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit") ?? 20;
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<unknown>, page: number) {
    navigate({
      search: createSearchParams({
        start: (+limit * (page - 1)).toString(),
      }).toString(),
    });
  }
  return (
    <div className={styles["pagination-box"]}>
      <Stack spacing={1}>
        <MuPagination
          count={10}
          variant="outlined"
          className={styles.pagination}
          color="primary"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default Pagination;
