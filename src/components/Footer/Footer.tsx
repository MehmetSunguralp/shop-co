import Image from "next/image";
import styles from "./Footer.module.scss";
import emailIcon from "@/public/common/email.svg";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<form className={styles.form}>
				<h3>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
				<div className={styles.submitArea}>
					<div className={styles.inputWrapper}>
						<span className={styles.iconWrapper}>
							<Image src={emailIcon} alt="email-icon" />
						</span>
						<input type="email" className={styles.emailInput} placeholder="Enter your email address" />
					</div>
					<button className={styles.submitBtn}>Subscribe to Newsletter</button>
				</div>
			</form>
		</footer>
	);
};
