import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchAlbums } from "../../redux/albums";
import {
  AlbumData,
  AvatarInfo,
  FetchAlbumsParams,
  UserData,
} from "../../utils/types";
import { fetchUsers } from "../../redux/users";
import generateRandomColor from "../../utils/randomeGeneratorColor";
import { setAlbumInfo } from "../../redux/albumInfo";
import PaginatedBox from "../container/PaginatedBox";
import Card from "../card/Card";

import styles from "./album-list.module.scss";

const AlbumList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, loading } = useAppSelector((state) => state.albums);
  const { data: users, loading: usersLoading } = useAppSelector(
    (state) => state.users
  );

  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit") ?? 20;
  const start = searchParams.get("start") ?? 0;

  const [usersData, setUsersData] = useState<AvatarInfo>({});

  useEffect(() => {
    dispatch(
      fetchAlbums({
        params: { _limit: +limit, _start: +start },
      } as FetchAlbumsParams)
    ).catch((err) => console.log(err));
  }, [limit, start]);

  useEffect(() => {
    dispatch(fetchUsers({})).catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (users.length > 0 && data.length > 0) {
      data.map((item) => {
        let userId = item.userId;

        if (!(userId in usersData)) {
          const user = users.find((user) => user.id === userId);
          setUsersData((usersData) => ({
            ...usersData,
            [userId]: { user, color: generateRandomColor() },
          }));
        }
      });
    }
  }, [users, data]);

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
        {Object.keys(usersData).length > 0 &&
          data.map((item: AlbumData) => (
            <Card
              data={item}
              user={usersData[item.userId]?.user}
              color={usersData[item.userId]?.color}
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
