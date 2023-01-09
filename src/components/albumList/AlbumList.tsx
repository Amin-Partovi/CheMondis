import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchAlbums } from "../../redux/albums";
import { FetchAlbumsParams } from "../../utils/types";

import styles from "./album-list.module.scss";

const AlbumList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.albums);

  useEffect(() => {
    dispatch(
      fetchAlbums({ params: { _start: 0, _limit: 5 } } as FetchAlbumsParams)
    ).catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles["grid-box"]}>
      {loading === "pending" ? <CircularProgress /> : <div></div>}
    </div>
  );
};

export default AlbumList;
