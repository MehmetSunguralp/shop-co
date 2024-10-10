import Image from "next/image";
import styles from "./BrowseByDressStyle.module.scss";
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
						<Image src={casual} alt="casual-dress" fill />
						<p>Casual</p>
					</div>
				</Link>
				<Link href={"/"}>
					<div className={styles.largeBox}>
						<Image src={formal} alt="formal-dress" fill />
						<p>Formal</p>
					</div>
				</Link>
			</div>
			<div className={styles.row}>
				<Link href={"/"}>
					<div className={styles.largeBox}>
						<Image src={party} alt="formal-dress" fill />
						<p>Party</p>
					</div>
				</Link>
				<Link href={"/"}>
					<div className={styles.smallBox}>
						<Image src={gym} alt="casual-dress" fill />
						<p>Party</p>
					</div>
				</Link>
			</div>
		</section>
	);
};
