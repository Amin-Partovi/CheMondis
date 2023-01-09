import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Container from "./components/container/Container";

const AlbumList = React.lazy(() => import("./components/albumList/AlbumList"));
const Album = React.lazy(() => import("./components/album/Album"));

const App: React.FC = () => {
  return (
    <Container>
      <Suspense fallback="loading">
        <Router>
          <Routes>
            <Route path="/" element={<AlbumList />} />
            <Route path="/:albumId" element={<Album />} />
          </Routes>
        </Router>
      </Suspense>
    </Container>
  );
};

export default App;
