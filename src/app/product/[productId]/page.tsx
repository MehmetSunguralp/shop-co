import { ProductDetail } from "@/components/ProductDetail/ProductDetail";
import { fetchProducts } from "@/api/api";
import { ProductsProps } from "@/types/ProductsProps";

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { productId } = params;
	const products: ProductsProps = await fetchProducts();
	return (
		<>
			<ProductDetail productId={productId} allProducts={products} />
		</>
	);
}
