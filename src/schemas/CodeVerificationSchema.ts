import * as yup from "yup";

export const CodeVerificationSchema = yup.object().shape({
	verificationCode: yup
		.string()
		.matches(/^\d{4}$/, "The verification code must be exactly 4 digits!")
		.required("The verification code is required!"),
});
