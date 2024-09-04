"use client"

import clsx from "clsx"
import styles from "./search.module.scss"
import { FC, useEffect, useRef } from "react"
import { MicrophoneIcon, SearchIcon } from "~/public/svg"

type Props = {
	className?: string
}

export const Search: FC<Props> = ({ className }) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const focusInput = () => {
		inputRef.current?.focus()
	}
	const blurInput = () => {
		inputRef.current?.blur()
	}
	useEffect(() => {
		function onKeydown(e: KeyboardEvent) {
			if (e.key === "k" && e.ctrlKey) {
				e.preventDefault()
				focusInput()
			}
			if (e.key === "Escape") {
				blurInput()
			}
		}
		window.addEventListener("keydown", e => {
			onKeydown(e)
		})
		return () => {
			window.removeEventListener("keydown", e => {
				onKeydown(e)
			})
		}
	})
	return (
		<form action={""} role="search" className={clsx(styles.search, className)}>
			<button type="submit" role="search" className={styles.searchToggle}>
				<SearchIcon width={18} height={18} />
			</button>
			<input
				type="text"
				className={styles.searchInput}
				role="searchbox"
				placeholder="Искать..."
				ref={inputRef}
			/>
			<button type="button" role="button" className={styles.searchSpeak}>
				<MicrophoneIcon width={18} height={18} />
			</button>
		</form>
	)
}
