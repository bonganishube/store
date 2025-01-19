import React from "react";
import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className="capitalise mt-8" size="lg">
      add to cart
      {productId}
    </Button>
  );
}

export default AddToCart;
