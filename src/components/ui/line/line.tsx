import styles from "./line.module.scss"
import clsx from "clsx"

export const Line = ({
	className,
	x,
	y,
}: {
	className?: string
	x?: boolean
	y?: boolean
}) => {
	return (
		<>
			<div
				className={clsx(
					{
						[styles.x]: x,
						[styles.y]: y,
					},
					className,
				)}
			/>
		</>
	)
}
