import Image from "next/image";
import styles from "./Footer.module.scss";
import emailIcon from "@/public/common/email.svg";
import mainLogo from "@/public/common/main-logo.svg";
import twitter from "@/public/common/twitter.svg";
import facebook from "@/public/common/facebook.svg";
import instagram from "@/public/common/instagram.svg";
import github from "@/public/common/github.svg";
import visa from "@/public/Footer/visa.svg";
import mastercard from "@/public/Footer/mastercard.svg";
import paypal from "@/public/Footer/paypal.svg";
import applePay from "@/public/Footer/apple-pay.svg";
import googlePay from "@/public/Footer/google-pay.svg";

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
			<div className={styles.footerNav}>
				<div className={styles.navEl}>
					<span className={styles.mainLogoWrapper}>
						<Image src={mainLogo} alt="shop-co-logo" />
					</span>
					<p className={styles.description}>
						We have clothes that suits your style and which you’re proud to wear. From women to men.
					</p>
					<div className={styles.socialIcons}>
						<span className={styles.socialIconWrapper}>
							<Image fill  src={twitter} alt="twitter-icon" />
						</span>
						<span className={styles.socialIconWrapper}>
							<Image fill src={facebook} alt="facebook-icon" />
						</span>
						<span className={styles.socialIconWrapper}>
							<Image fill src={instagram} alt="twitter-icon" />
						</span>
						<span className={styles.socialIconWrapper}>
							<Image fill src={github} alt="github-icon" />
						</span>
					</div>
				</div>
				<div className={styles.navEl}>
					<h4 className={styles.widgetTitle}>COMPANY</h4>
					<p className={styles.widget}>About</p>
					<p className={styles.widget}>Features</p>
					<p className={styles.widget}>Works</p>
					<p className={styles.widget}>Career</p>
				</div>
				<div className={styles.navEl}>
					<h4 className={styles.widgetTitle}>HELP</h4>
					<p className={styles.widget}>Customer Support</p>
					<p className={styles.widget}>Delivery Details</p>
					<p className={styles.widget}>Terms & Conditions</p>
					<p className={styles.widget}>Privacy Policy</p>
				</div>
				<div className={styles.navEl}>
					<h4 className={styles.widgetTitle}>FAQ</h4>
					<p className={styles.widget}>Account</p>
					<p className={styles.widget}>Manage Deliveries</p>
					<p className={styles.widget}>Orders</p>
					<p className={styles.widget}>Payments</p>
				</div>
				<div className={styles.navEl}>
					<h4 className={styles.widgetTitle}>RESOURCES</h4>
					<p className={styles.widget}>Free eBooks</p>
					<p className={styles.widget}>Development Tutorial</p>
					<p className={styles.widget}>How To- Blog</p>
					<p className={styles.widget}>Youtube Playlist</p>
				</div>
			</div>
			<hr />
			<div className={styles.copyrightSection}>
				<p>Shop.co © 2000-2023, All Rights Reserved</p>
				<div className={styles.paymentMethodIcons}>
					<span className={styles.paymentMethodIconWrapper}>
						<Image width={32} height={32} src={visa} alt="visa" />
					</span>
					<span className={styles.paymentMethodIconWrapper}>
						<Image width={32} height={32} src={mastercard} alt="visa" />
					</span>
					<span className={styles.paymentMethodIconWrapper}>
						<Image width={32} height={32} src={paypal} alt="visa" />
					</span>
					<span className={styles.paymentMethodIconWrapper}>
						<Image width={32} height={32} src={applePay} alt="visa" />
					</span>
					<span className={styles.paymentMethodIconWrapper}>
						<Image width={32} height={32} src={googlePay} alt="visa" />
					</span>
				</div>
			</div>
		</footer>
	);
};
