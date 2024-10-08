import styles from "./BrandBanner.module.scss";
import Image from "next/image";
import versaceLogo from "@/public/BrandBanner/versace.svg";
import zaraLogo from "@/public/BrandBanner/zara.svg";
import gucciLogo from "@/public/BrandBanner/gucci.svg";
import pradaLogo from "@/public/BrandBanner/prada.svg";
import calvinLogo from "@/public/BrandBanner/calvin.svg";

export const BrandBanner: React.FC = () => {
	return (
		<div className={styles.brandBanner}>
			<span className={styles.logoWrapper}>
				<Image fill src={versaceLogo} alt="versace-logo" draggable="false" />
			</span>
			<span className={styles.logoWrapper}>
				<Image fill src={zaraLogo} alt="versace-logo" draggable="false" />
			</span>
			<span className={styles.logoWrapper}>
				<Image fill src={gucciLogo} alt="versace-logo" draggable="false" />
			</span>
			<span className={styles.logoWrapper}>
				<Image fill src={pradaLogo} alt="versace-logo" draggable="false" />
			</span>
			<span className={styles.logoWrapper}>
				<Image fill src={calvinLogo} alt="versace-logo" draggable="false" />
			</span>
		</div>
	);
};
