import styles from "./Footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<form className={styles.form}>
				<h3>STAY UP TO DATE ABOUT OUR LATEST OFFERS</h3>
				<div className={styles.submitArea}>
					<input type="email" className={styles.emailInput} />
					<button className={styles.submitBtn}>Subscribe to Newsletter</button>
				</div>
			</form>
		</footer>
	);
};
