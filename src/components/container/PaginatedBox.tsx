import React, { PropsWithChildren } from "react";

import EmptyState from "../emptyState/EmptyState";
import PageLimit from "../pageLimit/PageLimit";
import Pagination from "../pagination/Pagination";
import Loading from "../loading/Loading";

import styles from "./paginated-box.module.scss";

interface Props extends PropsWithChildren<any> {
  data: any[];
  loading: boolean;
}

const PaginatedBox: React.FC<Props> = ({ children, data, loading }) => {
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          {data.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              <PageLimit />
              <div className={styles["grid-box"]}>{children}</div>
            </>
          )}

          <Pagination />
        </main>
      )}
    </>
  );
};

export default PaginatedBox;
