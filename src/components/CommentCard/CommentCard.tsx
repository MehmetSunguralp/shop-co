import Image from "next/image";
import Link from "next/link";
import { CommentCardProps } from "@/types/CommentCardProps";
import starIcon from "@/public/common/star.svg";
import verifiedIcon from "@/public/common/verified.svg";
import styles from "./CommentCard.module.scss";

export const CommentCard: React.FC<CommentCardProps> = ({ id, reviewerName, comment, rating, style, date }) => {
	//Count rating stars
	let starCounter = [0];
	for (let i = 1; i < rating; i++) {
		starCounter.push(i);
	}

	//Hide surname
	function formatName(fullName: string) {
		const nameParts = fullName.trim().split(" ");
		if (nameParts.length > 1) {
			const firstName = nameParts[0];
			const surnameFirstLetter = nameParts[nameParts.length - 1].charAt(0);
			return `${firstName} ${surnameFirstLetter}.`;
		}
		return fullName;
	}
	//Format date
	const formattedName = formatName(reviewerName);
	const getDate = date ? new Date(String(date)) : undefined;
	const formattedDate = getDate
		? new Intl.DateTimeFormat("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric",
		  }).format(getDate)
		: undefined;

	return (
		<Link
			href={style === "home-page" ? `product/${id}` : "#"}
			className={style === "home-page" ? styles.commentCard : styles.productPageCommentCard}
			onClick={(e) => {
				if (style !== "home-page") {
					e.preventDefault(); // Prevents navigation and page jump
				}
			}}
		>
			<span className={styles.stars}>
				{starCounter.map((num) => (
					<Image src={starIcon} alt="star-icon" key={num} />
				))}
			</span>
			<div className={styles.reviewer}>
				<p>{formattedName}</p>
				<span>
					<Image src={verifiedIcon} alt="verified-icon" />
				</span>
			</div>
			<p className={styles.comment}>{comment}</p>
			<p className={styles.date}>{date && formattedDate}</p>
		</Link>
	);
};
