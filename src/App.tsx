import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Container from "./components/container/Container";

const AlbumList = React.lazy(() => import("./components/albumList/AlbumList"));
const PhotoList = React.lazy(() => import("./components/photoList/PhotoList"));

const App: React.FC = () => {
  return (
    <Container>
      <Suspense fallback="">
        <Router>
          <Routes>
            <Route path="/" element={<AlbumList />} />
            <Route path="/:albumId" element={<PhotoList />} />
          </Routes>
        </Router>
      </Suspense>
    </Container>
  );
};

export default App;
