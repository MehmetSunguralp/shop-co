import { BrandBanner } from "@/components/BrandBanner/BrandBanner";
import { Hero } from "@/components/Hero/Hero";
import { NewArrivals } from "@/components/NewArrivals/NewArrivals";

export default function Home() {
	return (
		<>
			<Hero />
			<BrandBanner />
			<NewArrivals />
		</>
	);
}
