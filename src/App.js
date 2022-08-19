import Header from "./Layout/Header";
import { useEffect, useState, useUseEffect } from "react";
import "./App.css";
import Slider from "./components/slider/Slider";
import slider2 from "./assets/slider2.jpg";
import NewSlider from "./components/NewSlider";
import ProductsList from "./components/newProducts/ProductsList";
import { Route } from "react-router-dom";

// import slider1 from "./assets/sliderImages/sliderimg1.jpg";

function App() {
  const sliderData = [
    {
      src: "/sliderImages/sliderimg1.jpg",
      title: "image 1",
      discount: "60",
      header: "Winter Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg2.jpg",
      title: "image 2",
      discount: "80",
      header: "Spring Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg3.jpg",
      title: "image 3",
      discount: "20",
      header: "Autumn Collection",
      lightText: "The Best of 2022",
    },
    {
      src: "/sliderImages/sliderimg4.jpg",
      title: "image 4",
      discount: "80",
      header: "Summer Collection",
      lightText: "The Best of 2022",
    },
  ];

  console.log("test console");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/latest-products/");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <Slider slides={sliderImages} /> */}
        <main>{/* <NewProduct /> */}</main>
        {/* <img src="/sliderImages/sliderimg4.jpg" /> */}
        <NewSlider slides={sliderData} />
        <ProductsList products={products} />
        {/* {products.map((product) => (
          <div>{product["product_name"]}</div>
        ))} */}
      </div>

      <Route path="/products">
        <p>This is Product</p>
      </Route>
    </div>
  );
}

export default App;
