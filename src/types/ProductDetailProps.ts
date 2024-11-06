import { CommentCardProps } from "@/types/CommentCardProps";
export type ProductDetailProps = {
	id: number;
	title: string;
	price: number;
	discountPercentage: number;
	rating: number;
	images: string[];
	thumbnail: string;
	description: string;
	reviews: CommentCardProps[];
};
