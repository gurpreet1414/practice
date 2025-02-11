"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductPage() {
  const params = useParams();
  const { id } = params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setProduct(data); // Update the state with fetched data
    }

    fetchData();
  }, [id]); // Fetch data when the ID changes

  if (!product) return <div>Loading...</div>; // Show a loading state until data is fetched

  return (
    <div>
      <h1>your Product ID is: {id}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque debitis fugit eum ab harum quos eius tenetur, ullam minima aut, dolore quidem nobis consectetur odio quisquam porro dolorem cum.</p>
      <h1>{product.title}</h1>
      <p>{product.body}</p>
    </div>
  );
}
