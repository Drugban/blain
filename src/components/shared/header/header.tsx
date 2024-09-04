import styles from "./header.module.scss"
import { FC } from "react"
import clsx from "clsx"
import Link from "next/link"
import { BarIcon, StartUserIcon } from "~/public/svg"
import Image from "next/image"
import { Search } from "@/components/ui"

type Props = {
	className?: string
}
export const Header: FC<Props> = ({ className }) => {
	return (
		<header className={clsx(styles.header, className)} role="banner">
			<span className="sr-only">Header</span>
			<div className={styles.background} />
			<nav className={styles.nav}>
				<div className={styles.start}>
					<button
						type="button"
						aria-pressed={false}
						className={styles.barToggle}
					>
						<span className="sr-only">Open menu</span>
						<BarIcon width={24} height={24} />
					</button>
					<div>
						<Link className={styles.logo} href={"/"}>
							<Image src={"/favicon.ico"} alt="logo" width={28} height={28} />
							<h1>Blazer</h1>
						</Link>
					</div>
				</div>
				<div className={styles.center}>
					<Search />
				</div>
				<div className={styles.end}>
					<Link href={"/user"} className={styles.userToggle}>
						<StartUserIcon width={28} height={28} />
					</Link>
				</div>
			</nav>
		</header>
	)
}
