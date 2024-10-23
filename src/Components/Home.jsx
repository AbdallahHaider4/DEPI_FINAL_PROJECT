import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/home.module.css";
import header from "../Images/Plogo.jpeg"
import quality from "../Images/quality.png";
import lover from "../Images/book-lover.png";
import coll from "../Images/coll.png";
import oth from "../Images/oth.png";
import ProductCard from "../Components/CRUD/ProductCard";
import PostsContext from "../ContextAPIs/ProductsContext";

export default function Home() {

  const { products, getProducts, deleteProduct } = useContext(PostsContext);

  const topProducts = products?.slice(0, 3);

  return (
    <div className={`${style.bkg } `}>
      <div className={`container ${style.imgcard}`}>
        <div className={`${style.parentt} col-md-5`}>
          <h1 className={`${style.title} text-uppercase`}>
            welcome to Palestinian Art Gallery
          </h1>
          <p className={`${style.par}`}>Your one-stop destination for quality products</p>
        </div>
        <div className={`col-md-7 ${style.dimgg}`}>
          <img src={header} className={`${style.imgg}`} alt="Palestine" />
        </div>
      </div>
      <div className={`container m-auto p-5 mb-5 mt-5`}>
        <div className={`${style.prdct}`}>
          <h1 className={`text-center mb-5 ${style.whychooseustext}`}>Our Products</h1>
          <Link className={`${style.link2}`} to="/Shop">Show More</Link>
        </div>
        <div className="row g-4 justify-content-between  object-fit-lg-cover">
          {topProducts?.map((prodcutItem) => (
            <ProductCard
              getProducts={getProducts}
              deleteProduct={deleteProduct}
              key={prodcutItem.id}
              product={prodcutItem}
            />
          ))}
        </div>
      </div>
      <div className={`${style.whychooseus} py-5`}>
        <h1 className={`text-center mb-2 ${style.whychooseustext}`}>Why Choose Us?</h1>
        <div className={`card-deck container m-auto p-5 ${style.cardds}`}>
          <div className={`card ${style.cardcont}`}>
            <div class="card-body py-4 text-center">
              <img src={coll} alt="icons" />
              <h5 class={`card-title mt-3 ${style.cardh}`}>A creative   Collection for Every Artist</h5>
              <p class="card-text">we take pride in offering a thoughtfully curated selection of books that cater to a wide range of tastes and interests. a fan of classic literature, modern bestsellers, or niche genres.</p>
            </div>
          </div>
          <div className={`card ${style.cardcont}`}>
            <div class="card-body py-4 text-center">
              <img src={lover} alt="icons" />
              <h5 class={`card-title mt-3 ${style.cardh}`}>A Community of  ArtWork Lovers</h5>
              <p class="card-text">we take pride in offering a thoughtfully curated selection of books that cater to a wide range of tastes and interests. a fan of classic literature, modern bestsellers, or niche genres.</p>
            </div>
          </div>
          <div className={`card ${style.cardcont}`}>
            <div class="card-body py-4 text-center">
              <img src={quality} alt="icons" />
              <h5 class={`card-title mt-3 ${style.cardh}`}>A Commitment to Quality</h5>
              <p class="card-text">From the quality of the books we stock to the level of service we provide, we are dedicated to ensuring that every visit to our store is a pleasant and enriching experience.</p>
            </div>
          </div>
          <div className={`card ${style.cardcont}`}>
            <div class="card-body py-4 text-center">
              <img src={oth} alt="icons" />
              <h5 class={`card-title mt-3 ${style.cardh}`}>Supporting Local Artists</h5>
              <p class="card-text">Explore our dedicated section for hand paintings by authors from our community, and discover new creative art works that might become your new favorites.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}