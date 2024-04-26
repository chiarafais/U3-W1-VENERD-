import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import SubNavbar from "./components/SubNavbar";
import GalleryOne from "./components/GalleryOne";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <SubNavbar />
      <GalleryOne filmName="Toy Story" galleryTitle="Toy Story saga" />
      <GalleryOne filmName="Pirates of the Caribbean" galleryTitle="Pirates of the Caribbean saga" />
      <GalleryOne filmName="Avengers" galleryTitle="Avengers saga" />
      <GalleryOne filmName="Star Wars" galleryTitle="Star Wars saga" />
      <MyFooter />
    </div>
  );
}

export default App;
