import { Hero } from "@/components/Hero/Hero";
import { BrandBanner } from "@/components/BrandBanner/BrandBanner";
import { BrowseByDressStyle } from "@/components/BrowseByDressStyle/BrowseByDressStyle";

export default function Home() {
	return (
		<>
			<Hero />
			<BrandBanner />
			<BrowseByDressStyle />
		</>
	);
}
