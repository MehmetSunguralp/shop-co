import * as yup from "yup";

export const SignUpFormSchema = yup.object().shape({
	username: yup.string().trim().min(5, "Username must be at least 5 characters!").required("Username is required!"),
	email: yup.string().trim().email("Unvalid email!").required("Email is required!"),
	password: yup.string().min(8, "Password must be at least 8 characters!").required("Password is required"),
	confirmPassword: yup
		.string()
		.required("Confirm your password!")
		.oneOf([yup.ref("password")], "Passwords must match!"),
});
