import { BrandBanner } from "@/components/BrandBanner/BrandBanner";
import { Hero } from "@/components/Hero/Hero";
import { NewArrivals } from "@/components/NewArrivals/NewArrivals";
import { TopSelling } from "@/components/TopSelling/TopSelling";

export default function Home() {
	return (
		<>
			<Hero />
			<BrandBanner />
			<TopSelling />
			<NewArrivals />
		</>
	);
}
