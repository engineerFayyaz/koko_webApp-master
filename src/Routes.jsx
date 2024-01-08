import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Businessplan = React.lazy(() => import("pages/Businessplan"));
const Membership = React.lazy(() => import("pages/Membership"));
const Homemenu = React.lazy(() => import("pages/Homemenu"));
const Profile = React.lazy(() => import("pages/Profile"));
const Disclaimer = React.lazy(() => import("pages/Disclaimer"));
const Privacy = React.lazy(() => import("pages/Privacy"));
const TermsConditions = React.lazy(() => import("pages/TermsConditions"));
const Notification = React.lazy(() => import("pages/Notification"));
const Watchlist = React.lazy(() => import("pages/Watchlist"));
const Player = React.lazy(() => import("pages/Player"));
const DetailsVenomn = React.lazy(() => import("pages/DetailsVenomn"));
const DetailsTwo = React.lazy(() => import("pages/DetailsTwo"));
const DetailsOne = React.lazy(() => import("pages/DetailsOne"));
const Creators = React.lazy(() => import("pages/Creators"));
const TVShow = React.lazy(() => import("pages/TVShow"));
const Movies = React.lazy(() => import("pages/Movies"));
const Home1 = React.lazy(() => import("pages/Home1"));
const CreatorsType = React.lazy(() => import("pages/CreatorsType"));
const Contact = React.lazy(() => import("pages/Contact"));
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creatorstype" element={<CreatorsType />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshow" element={<TVShow />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/detailsone" element={<DetailsOne />} />
          <Route path="/detailstwo" element={<DetailsTwo />} />
          <Route path="/detailsvenomn" element={<DetailsVenomn />} />
          <Route path="/player" element={<Player />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/homemenu" element={<Homemenu />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/businessplan" element={<Businessplan />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
