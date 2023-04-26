import { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import axios from "axios"

const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
    dispatch
  } = CartState();
  const [sortedProducts,setSortedProducts] = useState([]);


    useEffect(()=>{
      const getCategories = async ()=>{
          try {
              const res = await axios.get("http://localhost:5000/get/categories");
              localStorage.setItem("category", JSON.stringify( res.data.categoryList ));
              dispatch({type:"set-categories",payload:JSON.stringify(res.data.CategoryList)});
          } catch (error) {
              console.log("error "+error);
          }
      }
      const getProducts = async ()=>{
          try { 
              const res = await axios.get("http://localhost:5000/get/products");
              localStorage.setItem("products", JSON.stringify(res.data.productList) );
              console.log(res.data.productList);
              dispatch({type:"set_products",payload:res.data.productList});
              
          } catch (error) {
              console.log("error"+error);
          }
      }

          getCategories();
          getProducts();
          transformProducts();
      
    },[dispatch,]);

  const transformProducts = () => {
    console.log("products "+products);
    setSortedProducts( products);
    console.log("sorted "+sortedProducts)

    if (sort) {
      setSortedProducts(sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      ));
    }

    // if (!byStock) {
    //   setSortedProducts(sortedProducts.filter((prod) => (prod.stock > 1 )));
    // }

    // if (byFastDelivery) {
    //   setSortedProducts(sortedProducts.filter((prod) => (prod.price > 250)));
    // }

    // if (byRating) {
    //   setSortedProducts(sortedProducts.filter(
    //     (prod) => prod.price > 500
    //   ));
    // }

    // if (searchQuery) {
    //   setSortedProducts(sortedProducts.filter((prod) =>
    //     prod.name.toLowerCase().includes(searchQuery)
    //   ));
    // }

   
  };

 

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {sortedProducts.map((prod) => (
          <SingleProduct prod={prod} key={prod._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
