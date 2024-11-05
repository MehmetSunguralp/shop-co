import { ProductDetail } from "@/components/ProductDetail/ProductDetail";

export default function ProductPage({ params }: { params: { productId: string } }) {
	const { productId } = params;
	return (
		<>
			<ProductDetail productId={productId} />
		</>
	);
}
