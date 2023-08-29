import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetUpPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} exact />
          <Route path="/new-meetup" element={<NewMeetUpPage />} exact />
          <Route path="/favorites" element={<FavoritesPage />} exact />
        </Routes>
    </Layout>
  );
}

export default App;
