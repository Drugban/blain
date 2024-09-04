import { FC, ReactNode } from "react"
import styles from "./videoWrap.module.scss"
import clsx from "clsx"

type Props = {
	className?: string
	children: ReactNode
}

export const VideoWrap: FC<Props> = ({ className, children }) => {
	return (
		<>
			<div className={clsx(styles.wrap, className)}>{children}</div>
		</>
	)
}
