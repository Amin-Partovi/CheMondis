import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchAlbums } from "../../redux/albums";
import { AlbumData, FetchAlbumsParams, UserData } from "../../utils/types";
import { fetchUsers } from "../../redux/users";
import generateRandomColor from "../../utils/randomeGeneratorColor";
import { setAlbumInfo } from "../../redux/albumInfo";

import styles from "./album-list.module.scss";
import PaginatedBox from "../container/PaginatedBox";
import Card from "../card/Card";

const AlbumList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  console.log(userMap);

  function handleClick(data: AlbumData, userData: Partial<UserData>) {
    dispatch(setAlbumInfo({ user: userData, album: data }));
    navigate(`${data.id}`);
  }

  return (
    <div className={styles["album-list"]}>
      <PaginatedBox
        data={data}
        loading={loading === "pending" || usersLoading === "pending"}
      >
        {data.map((item: AlbumData) => (
          <Card
            data={item}
            user={findUser(item.userId).userData}
            color={findUser(item.userId).color}
            key={item.id}
            onClick={handleClick}
            withAvatar={true}
          />
        ))}
      </PaginatedBox>
    </div>
  );
};

export default AlbumList;
