import { FC } from "react"
import styles from "./videoCard.module.scss"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

type Props = {
	className?: string
	image: string
	title: string
	chanel: string
	avatar: string
	date: string
	url: string
}

export const VideoCard: FC<Props> = ({
	className,
	image,
	title,
	chanel,
	avatar,
	date,
	url,
}) => {
	return (
		<>
			<Link href={`${url}`} className={clsx(styles.card, className)}>
				<div className={styles.displayImage}>
					<Image src={image} alt={title} width={9999} height={9999} />
				</div>
				<div className={styles.content}>
					<div className={styles.avatar}>
						<Image src={avatar} alt={title} width={36} height={36} />
					</div>
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
