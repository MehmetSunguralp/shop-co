import { fetchProducts } from "@/api/api";
import { Hero } from "@/components/Hero/Hero";
import { BrandBanner } from "@/components/BrandBanner/BrandBanner";
import { TopSelling } from "@/components/TopSelling/TopSelling";
import { NewArrivals } from "@/components/NewArrivals/NewArrivals";
import { BrowseByDressStyle } from "@/components/BrowseByDressStyle/BrowseByDressStyle";
import { OurHappyCustomers } from "@/components/OurHappyCustomers/OurHappyCustomers";
import { ProductsProps } from "@/types/ProductsProps";

export default async function Home() {
	const products: ProductsProps[] = await fetchProducts();

	return (
		<>
			<Hero />
			<BrandBanner />
			<TopSelling allProducts={products} />
			<NewArrivals allProducts={products} />
			<BrowseByDressStyle />
			<OurHappyCustomers allProducts={products} />
		</>
	);
}
