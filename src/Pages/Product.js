import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../Component/BreadCrums/BreadCrum";
import ProductDisplay from "../Component/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Component/DescriptionBox/DescriptionBox";
import RelatedProduct from "../Component/RelatedProduct/RelatedProduct";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            <BreadCrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />

            <RelatedProduct />
        </div>
    )
}
export default Product;
// using context 
