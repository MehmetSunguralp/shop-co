import Image from "next/image";
import styles from "./SignUpForm.module.scss";
import authImg from "@/public/Hero/hero3.jpg";
import lock from "@/public/common/lock.svg";
import mail from "@/public/common/mail.svg";
import user from "@/public/common/user.svg";

export const SignUpForm = () => {
	return (
		<div className={styles.signUpForm}>
			<div className={styles.imgWrapper}>
				<Image src={authImg} alt="fashion-couple" fill />
			</div>
			<form method="post" className={styles.form}>
				<h1 className={styles.title}>SIGN Up FOR A SHOP.CO ACCOUNT</h1>
				<label htmlFor="username" className={styles.inputLabel}>
					<Image src={user} alt="lock" className={styles.inputIcons} />
					<input type="text" id="username" name="username" className={styles.inputArea} placeholder="Enter a username" required />
				</label>
				<label htmlFor="email" className={styles.inputLabel}>
					<Image src={mail} alt="lock" className={styles.inputIcons} />
					<input type="text" id="email" name="email" className={styles.inputArea} placeholder="Enter your email" required />
				</label>
				<label htmlFor="password" className={styles.inputLabel}>
					<Image src={lock} alt="lock" className={styles.inputIcons} />
					<input
						type="password"
						id="password"
						name="password"
						className={styles.inputArea}
						placeholder="Enter password"
						required
					/>
				</label>
				<label htmlFor="password" className={styles.inputLabel}>
					<Image src={lock} alt="lock" className={styles.inputIcons} />
					<input
						type="password"
						id="password"
						name="password"
						className={styles.inputArea}
						placeholder="Confirm password"
						required
					/>
				</label>
				<input type="submit" value="Sign Up" className={styles.submitBtn} />
				<input type="submit" value="Already have an account? Click here to Log In" className={styles.directToLoginBtn} />
			</form>
		</div>
	);
};
