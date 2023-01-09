import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { fetchAlbum } from "./redux/album";
import { fetchAlbums } from "./redux/albums";
import { fetchUsers } from "./redux/users";

import { FetchAlbumParams, FetchAlbumsParams } from "./utils/types";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchAlbums({ params: { _start: 0, _limit: 5 } } as FetchAlbumsParams)
    ).then((res) => {
      console.log(res);
    });

    dispatch(
      fetchAlbum({
        params: { albumid: 5, _start: 0, _limit: 5 },
      } as FetchAlbumParams)
    );

    dispatch(fetchUsers({}));
  }, []);
  return <div>photo-album</div>;
};

export default App;
