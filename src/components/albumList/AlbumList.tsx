import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchAlbums } from "../../redux/albums";
import { AlbumData, FetchAlbumsParams } from "../../utils/types";
import Album from "../album/Album";
import { fetchUsers } from "../../redux/users";
import generateRandomColor from "../../utils/randomeGeneratorColor";
import Pagination from "../pagination/Pagination";
import PageLimit from "../pageLimit/PageLimit";
import Loading from "../loading/Loading";

import styles from "./album-list.module.scss";

const AlbumList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.albums);
  const userMap = new Map();
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit") ?? 20;
  const start = searchParams.get("start") ?? 0;

  const { data: users, loading: usersLoading } = useAppSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(
      fetchAlbums({
        params: { _limit: +limit, _start: +start },
      } as FetchAlbumsParams)
    ).catch((err) => console.log(err));

    dispatch(fetchUsers({})).catch((err) => console.log(err));
  }, [limit, start]);

  function findUser(userId: number) {
    if (userMap.has(userId)) {
      return userMap.get(userId);
    }
    const user = users.find((user) => user.id === userId);
    userMap.set(userId, { userData: user, color: generateRandomColor() });

    return userMap.get(userId);
  }

  return (
    <div className={styles["album-list"]}>
      {loading === "pending" || usersLoading === "pending" ? (
        <Loading />
      ) : (
        <>
          <PageLimit />
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
