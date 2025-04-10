import React from "react";
import "./ProductCard.css";

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="product-card">
      {imageUrl && <img src={imageUrl} alt={title} className="product-image" />}
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default ProductCard;
