import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../Layout";

import Home from "../pages/Home";
import About from '../pages/About';
import Blog from "../pages/Blog";
import Gallery from '../pages/Gallery';
import GalleryItem from "../pages/GalleryItem";
import Contacts from '../pages/Contacts';
import SinglePost from "../pages/SinglePost";
import FAQ from "../pages/FAQ";
import NotFoundPage from "../pages/NotFoundPage";

import ErrorBoundary from "../shared/ErrorBoundary";

import '../../assets/styles/global.css';

const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<SinglePost />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='gallery/:img' element={<GalleryItem />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  </ErrorBoundary>
)

export default App