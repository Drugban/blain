import { FC, ReactNode } from "react"
import styles from "./reelsWrap.module.scss"
import clsx from "clsx"

type Props = {
	className?: string
	children: ReactNode
}

export const ReelsWrap: FC<Props> = ({ className, children }) => {
	return (
		<>
			<div className={clsx(styles.wrap, className)}>{children}</div>
		</>
	)
}
