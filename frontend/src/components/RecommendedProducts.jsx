import { useState, useEffect } from "react";

export default function RecommendedProducts() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((res) => res.json())
      .then((productData) => {
        setProducts(productData);
      });
  }, []);

  return (
    <div>
      <h2 class="font-body font-semibold ml-[11vw] mt-[8vh]">
        Recommended Products For You
      </h2>
      <div className="flex justify-center space-x-40 mt-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center border-4 hover:scale-125 transition duration-500 ease-in-out"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover"
            />
            <div className="mt-2 text-center">
              <p>{product.name}</p>
              {product.specs.map((spec, index) => (
                <p key={index} className="">
                  {spec}
                </p>
              ))}
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
