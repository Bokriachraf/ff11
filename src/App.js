import React from "react";
import data from "./data"
import Product from "./components/Product.js"



function App() {
   return (
    <div className="rid-container">
    <header className="row">
     <div>
        <a className="brand" href="index.html">MernExemple</a>
     </div>
     <div>
        <a href="cart.html">cart</a>
        <a href="signin.html">signin</a>
     </div>
    </header>
    <main>
        <div>
     <div className="row center">
     {data.products.map((product) => (
       <Product key={product._id} product={product}  ></Product>
     ) )}
       
     
    </div>
     </div>
    </main>
    <footer className="row center">
      Contact
    </footer>
</div>
  );
}

export default App;
