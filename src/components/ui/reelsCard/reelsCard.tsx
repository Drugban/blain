import { FC } from "react"
import styles from "./reelsCard.module.scss"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"

type Props = {
	className?: string
	image: string
	title: string
	chanel: string
	url: string
	date: string
}

export const ReelsCard: FC<Props> = ({
	className,
	image,
	title,
	chanel,
	url,
	date,
}) => {
	return (
		<>
			<Link href={`${url}`} className={clsx(styles.card, className)}>
				<div className={styles.displayImage}>
					<Image src={image} alt={title} width={9999} height={9999} />
				</div>
				<div className={styles.content}>
					<div className={styles.info}>
						<p className={styles.description}>
							<span>{chanel}</span>
							<span className={styles.date}>{date}</span>
						</p>
						<h3 className={styles.title}>{title}</h3>
					</div>
				</div>
			</Link>
		</>
	)
}
