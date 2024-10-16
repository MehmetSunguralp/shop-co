"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchProducts } from "@/api/api";
import { ProductDetailProps } from "@/types/ProductDetailProps";
import styles from "./ProductDetail.module.scss";

export const ProductDetail: React.FC<{ productId: string }> = ({ productId }) => {
  const [product, setProduct] = useState<ProductDetailProps | null>(null);

  // Fetch products and find the matching product by productId
  useEffect(() => {
    fetchProducts().then((data) => {
      const foundProduct = data.products.find((p: { id: string }) => p.id == productId);
      setProduct(foundProduct || null); // Set product or null if not found
    });
  }, [productId]);

  if (!product) {
    return <div>Loading product details...</div>;
  }

  // Render the product details
  return (
    <div className={styles.productDetail}>
      <div className={styles.thumbnailsContainer}>
        {/* Repeating thumbnails */}
        <div className={styles.thumbnailWrapper}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.thumbnailWrapper}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.thumbnailWrapper}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={styles.mainImage}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};
