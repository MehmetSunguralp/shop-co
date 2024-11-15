import { useRouter } from "next/navigation";
import { useFormik, FormikHelpers } from "formik";
import axios from "axios";
import { CodeVerificationSchema } from "@/schemas/CodeVerificationSchema";
import { CodeVerificationProps } from "@/types/CodeVerification";
import styles from "@/components/CodeVerification/CodeVerification.module.scss";
import { useRef } from "react";

export const CodeVerification = ({ email }: { email: string }) => {
	const router = useRouter();
	const inputRefs = useRef<HTMLInputElement[]>([]);

	const submitVerification = (values: CodeVerificationProps, actions: FormikHelpers<CodeVerificationProps>) => {
		const verificationCode = values.verificationCode;
		axios
			.post("https://dummyjson.com/users/add", {
				verificationCode,
				//TODO: update endpoint
			})
			.then((response) => {
				console.log(response);
				actions.setSubmitting(false);
				router.push("/login");
			})
			.catch((error) => {
				console.log(error);
				actions.setSubmitting(false);
			});
	};

	const { values, errors, isValid, isSubmitting, handleSubmit, setFieldValue } = useFormik({
		initialValues: {
			verificationCode: "",
		},
		validationSchema: CodeVerificationSchema,
		onSubmit: (values, actions) => {
			submitVerification({ verificationCode: values.verificationCode }, actions);
		},
	});

	const isCodeValid = values.verificationCode.length === 4 && /^\d{4}$/.test(values.verificationCode);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
		const { value } = e.target;
		const newVerificationCode = values.verificationCode.split("");
		if (/^[0-9]*$/.test(value)) {
			newVerificationCode[index] = value;
			setFieldValue("verificationCode", newVerificationCode.join(""));

			if (value && index < inputRefs.current.length - 1) {
				inputRefs.current[index + 1]?.focus();
			}
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
		if (e.key === "Backspace" && !values.verificationCode[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	return (
		<form className={styles.codeVerificationForm} onSubmit={handleSubmit}>
			<label className={styles.label}>
				Please enter the 4-digit code that has been sent to <span className={styles.email}>{email}</span> address.
			</label>
			<div className={styles.inputWrapper}>
				{[...Array(4)].map((_, index) => (
					<input
						key={index}
						ref={(el) => {
							inputRefs.current[index] = el!;
							return;
						}}
						className={styles.codeInput}
						type="text"
						maxLength={1}
						value={values.verificationCode[index] || ""}
						onChange={(e) => handleInputChange(e, index)}
						onKeyDown={(e) => handleKeyDown(e, index)}
						required
					/>
				))}
			</div>
			{errors.verificationCode && <p className={styles.error}>{errors.verificationCode}</p>}
			<button type="submit" className={styles.submitButton} disabled={!isValid || isSubmitting || !isCodeValid}>
				Confirm & Login
			</button>
		</form>
	);
};
