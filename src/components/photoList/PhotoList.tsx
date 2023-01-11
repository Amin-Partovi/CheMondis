import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchAlbum } from "../../redux/album";

const PhotoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { albumId } = useParams();
 

  useEffect(() => {
    // dispatch(fetchAlbum({params:{albumId,_limit:+limit, _start  }}))
  }, []);

  return <div>PhotoList</div>;
};

export default PhotoList;
