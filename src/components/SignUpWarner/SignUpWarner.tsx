"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import styles from "./SignUpWarner.module.scss";

export const SignUpWarner: React.FC = () => {
	const pathname = usePathname();
	const [warnerVisibility, setWarnerVisibility] = useState("flex");
	const handleWarnerVisiblity = (): void => setWarnerVisibility("none");
	//TODO: Direct to the Sign Up page on clicking link
	return pathname != "/signup" ? (
		<div className={styles.signUpWarner} style={{ display: warnerVisibility }}>
			<p className={styles.warningText}>
				Sign up and get 20% off to your first order.
				<Link href={"/signup"} className={styles.signUpLink}>
					Sign Up Now
				</Link>
			</p>
			<span className={styles.closeIcon} onClick={handleWarnerVisiblity}>
				<IoIosClose />
			</span>
		</div>
	) : null;
};
