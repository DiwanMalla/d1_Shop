import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products/Products";
import smartwatch from "./assets/category/smartwatch2-removebg-preview.png";
import Blogs from "./components/Blogs/Blogs";
const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum lorem ipsum,ipsum lorem ipsum ipsum lorem ipsum",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jan to 28 Jan",
  image: smartwatch,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum lorem ipsum,ipsum lorem ipsum ipsum lorem ipsum",
  bgColor: "#2dcc6f",
};
const App = () => {
  return (
    <div className="bg-whiteb dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
    </div>
  );
};

export default App;
