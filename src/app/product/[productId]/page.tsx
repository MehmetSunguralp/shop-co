import { ProductDetail } from "@/components/ProductDetail/ProductDetail";
import { fetchProducts } from "@/api/api";
import { ProductsProps } from "@/types/ProductsProps";
import { ProductDetailProps } from "@/types/ProductDetailProps";

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { productId } = params;
	const products: ProductDetailProps[] = await fetchProducts();
	console.log(products)
	return (
		<>
			<ProductDetail productId={productId} allProducts={products} />
		</>
	);
}
