import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchAlbums } from "../../redux/albums";
import { AlbumData, FetchAlbumsParams } from "../../utils/types";
import Album from "../album/Album";

import styles from "./album-list.module.scss";

const AlbumList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.albums);

  useEffect(() => {
    dispatch(
      fetchAlbums({ params: { _start: 0, _limit: 40 } } as FetchAlbumsParams)
    ).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {loading === "pending" ? (
        <CircularProgress />
      ) : (
        <div className={styles["grid-box"]}>
          {data.map((item: AlbumData) => (
            <Album data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AlbumList;
