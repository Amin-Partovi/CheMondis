import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchAlbums } from "../../redux/albums";
import { AlbumData, FetchAlbumsParams } from "../../utils/types";
import Album from "../album/Album";
import { fetchUsers } from "../../redux/users";
import generateRandomColor from "../../utils/randomeGeneratorColor";

import styles from "./album-list.module.scss";
import Pagination from "../pagination/Pagination";

const AlbumList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.albums);
  const userMap = new Map();

  const { data: users, loading: usersLoading } = useAppSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(
      fetchAlbums({ params: { _start: 0, _limit: 40 } } as FetchAlbumsParams)
    ).catch((err) => console.log(err));

    dispatch(fetchUsers({})).catch((err) => console.log(err));
  }, []);

  function findUser(userId: number) {
    if (userMap.has(userId)) {
      return userMap.get(userId);
    }
    const user = users.find((user) => user.id === userId);
    userMap.set(userId, { userData: user, color: generateRandomColor() });

    return userMap.get(userId);
  }

  return (
    <div>
      {loading === "pending" || usersLoading === "pending" ? (
        <CircularProgress />
      ) : (
        <>
          <div className={styles["grid-box"]}>
            {data.map((item: AlbumData) => (
              <Album data={item} user={findUser(item.userId)} key={item.id} />
            ))}
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
};

export default AlbumList;
