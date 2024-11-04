import { ProductDetail } from "@/components/ProductDetail/ProductDetail";
import { ProductReviews } from "@/components/ProductReviews/ProductReviews";

export default function ProductPage({ params }: { params: { productId: string } }) {
	const { productId } = params;
	return (
		<>
			<ProductDetail productId={productId} />
			<ProductReviews productId={productId} />
		</>
	);
}
