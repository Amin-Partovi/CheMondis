import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { fetchAlbum } from "./redux/album";
import { fetchAlbums } from "./redux/albums";

interface AlbumsParams {
  params: Record<"_start" | "_limit", number>;
}

interface AlbumParams {
  params: Record<"_start" | "_limit" | "albumid", number>;
}

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchAlbums({ params: { _start: 0, _limit: 5 } } as AlbumsParams)
    ).then((res) => {
      console.log(res);
    });

    dispatch(
      fetchAlbum({
        params: { albumid: 5, _start: 0, _limit: 5 },
      } as AlbumParams)
    );
  }, []);
  return <div>photo-album</div>;
};

export default App;
