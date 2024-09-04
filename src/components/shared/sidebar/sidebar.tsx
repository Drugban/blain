import clsx from "clsx"
import Link from "next/link"
import { FC } from "react"
import {
	BroadcastIcon,
	DownloadIcon,
	HomeIcon,
	MusicIcon,
	PlaylistIcon,
	ReelsIcon,
	ReferenceIcon,
	SettingsIcon,
	SportIcon,
	StartUserIcon,
	SupportIcon,
	VideGameIcon,
	VideoIcon,
	YouVideoIcon,
} from "~/public/svg"
import styles from "./sidebar.module.scss"

type Props = {
	className?: string
}

const Links = [
	{
		name: "Страницы",
		links: [
			{
				icon: <HomeIcon />,
				name: "Главная",
				href: "/",
			},
			{
				icon: <VideoIcon />,
				name: "Видео",
				href: "/video",
			},
			{
				icon: <ReelsIcon />,
				name: "Рилсы",
				href: "/reels",
			},
			{
				icon: <BroadcastIcon />,
				name: "Трансляции",
				href: "/broadcast",
			},
		],
	},
	{
		name: "Вы",
		links: [
			{
				icon: <StartUserIcon />,
				name: "Профиль",
				href: "/profile",
			},
			{
				icon: <YouVideoIcon />,
				name: "Ваши видео",
				href: "/video",
			},
			{
				icon: <PlaylistIcon />,
				name: "Плейлисты",
				href: "/playlists",
			},
			{
				icon: <DownloadIcon />,
				name: "Скачанные",
				href: "/downloaded",
			},
		],
	},
	{
		name: "Навигатор",
		links: [
			{
				icon: <VideGameIcon />,
				name: "Видеоигры",
				href: "/videogames",
			},
			{
				icon: <MusicIcon />,
				name: "Музыка",
				href: "/music",
			},
			{
				icon: <SportIcon />,
				name: "Спорт",
				href: "/sport",
			},
		],
	},
	{
		links: [
			{
				icon: <SettingsIcon />,
				name: "Настройки",
				href: "/settings",
			},
			{
				icon: <SupportIcon />,
				name: "Поддержка",
				href: "/support",
			},
			{
				icon: <ReferenceIcon />,
				name: "Справка",
				href: "/reference",
			},
		],
	},
]

export const Sidebar: FC<Props> = ({ className }) => {
	return (
		<aside className={clsx(styles.sidebar, className)}>
			<span className="sr-only">Sidebar</span>
			<div className={styles.background} />
			<nav className={styles.nav}>
				{Links.map((group, idx) => (
					<ul className={styles.group} key={idx}>
						{group.name && (
							<li>
								<h3 className={styles.title}>{group.name}</h3>
							</li>
						)}
						{group.links.map(link => (
							<li key={link.name}>
								<Link className={styles.link} href={link.href}>
									{link.icon}
									<span>{link.name}</span>
								</Link>
							</li>
						))}
					</ul>
				))}
			</nav>
		</aside>
	)
}
