import React, { Suspense } from "react";
import { Product } from "@/components/product";
import { Review } from "@/components/review";

const ProductReviews = () => {
  return (
    <>
      <h1>Product Review</h1>

      <Suspense fallback={<p>Loading Product Details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading Reviews....</p>}>
        <Review />
      </Suspense>
    </>
  );
};

export default ProductReviews;
