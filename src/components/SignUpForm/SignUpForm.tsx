"use client";
import Image from "next/image";
import { useFormik } from "formik";
import styles from "./SignUpForm.module.scss";
import authImg from "@/public/Hero/hero3.jpg";
import lock from "@/public/common/lock.svg";
import mail from "@/public/common/mail.svg";
import user from "@/public/common/user.svg";
import { SignUpFormSchema } from "@/schemas/SignUpFormSchema";

export const SignUpForm = () => {
	const submit = (values: any, actions: any) => {
		actions.resetForm();
	};
	const { values, errors, handleChange, handleSubmit } = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: SignUpFormSchema,
		onSubmit: submit,
	});

	return (
		<div className={styles.signUpForm}>
			<div className={styles.imgWrapper}>
				<Image src={authImg} alt="fashion-couple" fill />
			</div>
			<form method="post" className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.title}>SIGN Up FOR A SHOP.CO ACCOUNT</h1>
				<label htmlFor="username" className={styles.inputLabel}>
					<Image src={user} alt="lock" className={styles.inputIcons} />
					<input
						type="text"
						id="username"
						name="username"
						className={styles.inputArea}
						placeholder="Enter a username"
						value={values.username}
						onChange={handleChange}
						required
					/>
					{errors.username && <p className={styles.error}>{errors.username}</p>}
				</label>
				<label htmlFor="email" className={styles.inputLabel}>
					<Image src={mail} alt="lock" className={styles.inputIcons} />
					<input
						type="text"
						id="email"
						name="email"
						className={styles.inputArea}
						placeholder="Enter your email"
						value={values.email}
						onChange={handleChange}
						required
					/>
					{errors.email && <p className={styles.error}>{errors.email}</p>}
				</label>
				<label htmlFor="password" className={styles.inputLabel}>
					<Image src={lock} alt="lock" className={styles.inputIcons} />
					<input
						type="password"
						id="password"
						name="password"
						className={styles.inputArea}
						placeholder="Enter password"
						value={values.password}
						onChange={handleChange}
						required
					/>
					{errors.password && <p className={styles.error}>{errors.password}</p>}
				</label>
				<label htmlFor="confirm-password" className={styles.inputLabel}>
					<Image src={lock} alt="lock" className={styles.inputIcons} />
					<input
						type="password"
						id="confirmPassword"
						name="confirmPassword"
						className={styles.inputArea}
						placeholder="Confirm password"
						value={values.confirmPassword}
						onChange={handleChange}
						required
					/>
					{errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}
				</label>
				<input type="submit" value="Sign Up" className={styles.submitBtn} />
				<button type="submit" className={styles.directToLoginBtn}>
					Already have an account? Click here to Log In
				</button>
			</form>
		</div>
	);
};
