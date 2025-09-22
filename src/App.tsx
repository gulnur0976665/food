import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import SiteBar from "./components/siteBar/SiteBar";
import Category from "./components/Category/Category";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
const App = () => {
  return (
    <div>
      <SiteBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:title" element={<Category />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
};

export default App;
