import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchPhotos } from "../../redux/photos";
import PhotoListHeader from "./PhotoListHeader";
import PaginatedBox from "../container/PaginatedBox";
import { PhotoData } from "../../utils/types";
import Card from "../card/Card";

import styles from "./photo-list.module.scss";

const PhotoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.photos);
  const { user, album } = useAppSelector((state) => state.albumInfo);
  const { albumId } = useParams();
  const [searchParams] = useSearchParams();

  const limit = searchParams.get("limit") ?? 20;
  const start = searchParams.get("start") ?? 0;

  useEffect(() => {
    dispatch(
      fetchPhotos({ params: { albumId, _limit: +limit, _start: start } })
    );
  }, [albumId, limit, start]);

  function handleClick() {}

  return (
    <div>
      <PhotoListHeader title={album.title} owner={user.name} />
      <PaginatedBox data={data} loading={loading === "pending"}>
        {data.map((item: PhotoData) => (
          <Card
            data={item}
            onClick={handleClick}
            key={item.id}
            user={user}
            imageSrc={item.thumbnailUrl}
          />
        ))}
      </PaginatedBox>
    </div>
  );
};

export default PhotoList;
