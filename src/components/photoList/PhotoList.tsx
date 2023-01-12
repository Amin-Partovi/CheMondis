import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchPhotos } from "../../redux/photos";

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

  return (
    <div>
      <h1>{album.title}</h1>
    </div>
  );
};

export default PhotoList;
