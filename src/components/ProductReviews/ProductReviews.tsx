"use client";
import { useEffect, useState } from "react";
import { CommentCard } from "../CommentCard/CommentCard";
import { CommentProps } from "react-loader-spinner";
import { fetchProducts } from "@/api/api";
import { ThreeDots } from "react-loader-spinner";

export const ProductReviews: React.FC<{ productId: string }> = ({ productId }) => {
	const [product, setProduct] = useState<CommentProps | null>(null);
	useEffect(() => {
		fetchProducts().then((data) => {
			const foundProduct = data.products.find((p: { id: string }) => p.id == productId);
			setProduct(foundProduct || null);
		});
	}, [productId]);
	return <div></div>;
};
