import { Hero } from "@/components/Hero/Hero";
import { BrandBanner } from "@/components/BrandBanner/BrandBanner";
import { TopSelling } from "@/components/TopSelling/TopSelling";
import { NewArrivals } from "@/components/NewArrivals/NewArrivals";
import { BrowseByDressStyle } from "@/components/BrowseByDressStyle/BrowseByDressStyle";


export default function Home() {
	return (
		<>
			<Hero />
			<BrandBanner />
			<TopSelling />
			<NewArrivals />
			<BrowseByDressStyle />
		</>
	);
}
