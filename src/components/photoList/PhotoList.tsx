import React, { Suspense, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchPhotos } from "../../redux/photos";
import PhotoListHeader from "./PhotoListHeader";
import PaginatedBox from "../container/PaginatedBox";
import { PhotoData } from "../../utils/types";
import Card from "../card/Card";
import Modal from "../modal/Modal";

const PhotoDetail = React.lazy(() => import("../photoDetail/PhotoDetail"));

const PhotoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.photos);
  const { user, album } = useAppSelector((state) => state.albumInfo);
  const { albumId } = useParams();
  const [searchParams] = useSearchParams();

  const [photo, setPhoto] = useState<PhotoData>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const limit = searchParams.get("limit") ?? 20;
  const start = searchParams.get("start") ?? 0;

  useEffect(() => {
    dispatch(
      fetchPhotos({ params: { albumId, _limit: +limit, _start: start } })
    );
  }, [albumId, limit, start]);

  function handleClose() {
    setIsOpen(false);
  }

  function handleClick(item: PhotoData) {
    setPhoto(item);
    setIsOpen(true);
  }

  return (
    <div>
      <Suspense fallback="">
        <PhotoListHeader title={album.title} owner={user.name} />
        <Modal open={isOpen} onClose={handleClose} title={photo?.title}>
          <PhotoDetail
            photo={photo}
            albumTitle={album.title}
            owner={user.name}
          />
        </Modal>
        <PaginatedBox data={data} loading={loading === "pending"}>
          {data.map((item: PhotoData) => (
            <Card
              data={item}
              onClick={() => handleClick(item)}
              key={item.id}
              user={user}
              imageSrc={item.thumbnailUrl}
            />
          ))}
        </PaginatedBox>
      </Suspense>
    </div>
  );
};

export default PhotoList;
