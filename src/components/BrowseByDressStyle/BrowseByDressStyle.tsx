import Image from "next/image";
import styles from "@/components/BrowseByDressStyle/BrowseByDressStyle.module.scss";
import casual from "@/public/BrowseByDressStyle/casual.png";
import formal from "@/public/BrowseByDressStyle/formal.png";
import gym from "@/public/BrowseByDressStyle/gym.png";
import party from "@/public/BrowseByDressStyle/party.png";
import Link from "next/link";

export const BrowseByDressStyle: React.FC = () => {
	return (
		<section className={styles.browseByDressStyle}>
			<h2 className={styles.sectionTitle}>BROWSE BY DRESS STYLE</h2>
			<div className={styles.row}>
				<Link href={"/"}>
					<div className={styles.smallBox}>
						<Image src={casual} alt="casual-dress" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						<p>Casual</p>
					</div>
				</Link>
				<Link href={"/"}>
					<div className={styles.largeBox}>
						<Image src={formal} alt="formal-dress" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						<p>Formal</p>
					</div>
				</Link>
			</div>
			<div className={styles.row}>
				<Link href={"/"}>
					<div className={styles.largeBox}>
						<Image src={party} alt="formal-dress" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						<p>Party</p>
					</div>
				</Link>
				<Link href={"/"}>
					<div className={styles.smallBox}>
						<Image src={gym} alt="casual-dress" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						<p>Party</p>
					</div>
				</Link>
			</div>
		</section>
	);
};
