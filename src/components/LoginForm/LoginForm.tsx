"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useFormik, FormikHelpers } from "formik";
import axios from "axios";
import { LoginFormSchema } from "@/schemas/LoginFormSchema";
import { LoginProps } from "@/types/LoginProps";
import styles from "@/components/LoginForm/LoginForm.module.scss";
import authImg from "@/public/Hero/hero3.jpg";
import lock from "@/public/common/lock.svg";
import mail from "@/public/common/mail.svg";

const loginEndpoint: string = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT || "";

export const LoginForm = () => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
	const submit = (values: LoginProps, actions: FormikHelpers<LoginProps>) => {
		setErrorMessage(undefined);
		//TODO: Use the real endpoint
		console.log(process.env.NEXT_PUBLIC_LOGIN_ENDPOINT);
		axios
			.post(loginEndpoint, {
				email: values.email,
				password: values.password,
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
				setErrorMessage(error.response?.data?.message || "An error occurred");
				actions.setSubmitting(false);
			});
	};
	const { values, errors, handleChange, handleSubmit, isValid, isSubmitting } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginFormSchema,
		onSubmit: submit,
	});

	return (
		<div className={styles.signUpForm}>
			<div className={styles.imgWrapper}>
				<Image
					src={authImg}
					alt="fashion-couple"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					priority
				/>
			</div>
			<form method="post" className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.title}>LOGIN TO YOUR SHOP.CO ACCOUNT</h1>
				<div className={styles.inputWrapper}>
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
					<input type="submit" value="Log In" className={styles.submitBtn} disabled={!isValid || isSubmitting} />
					<p className={styles.forgotPassword} onClick={() => router.push("/forgot-password")}>
						Forgot your password?
					</p>
					{errorMessage && <p className={styles.responseErrorMessage}>{errorMessage}</p>}
				</div>

				<button className={styles.directToLoginBtn} onClick={() => router.push("/signup")}>
					Don't have an account? Click here to Sign Up
				</button>
			</form>
		</div>
	);
};
