"use client"
import { FC } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "./broadcastSwiper.scss"
import clsx from "clsx"
import { Navigation } from "swiper/modules"
import { VideoCard } from '@/components/ui';

type Props = {
	className?: string
}

export const BroadcastSwiper: FC<Props> = ({ className }) => {
	return (
		<div className={clsx("wrap", className)}>
			<Swiper
				slidesPerView={2}
				spaceBetween={30}
				modules={[Navigation]}
				navigation={true}
			>
				<SwiperSlide>
					<VideoCard className='swiper-card'
						image={
							"https://external-preview.redd.it/14-v0-83LpIeFl4Q4BU5oLr2_pYfJMKjNB4xS8pP4DA4dFqdw.jpg?width=1080&crop=smart&auto=webp&s=e3f172d4ff71b50ea55b500de06d05b9d4ce0de2"
						}
						title={
							"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
						}
						chanel={"Nextjs"}
						avatar={
							"https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
						}
						date={"1 day ago"}
						url={"/"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<VideoCard className='swiper-card'
						image={
							"https://external-preview.redd.it/14-v0-83LpIeFl4Q4BU5oLr2_pYfJMKjNB4xS8pP4DA4dFqdw.jpg?width=1080&crop=smart&auto=webp&s=e3f172d4ff71b50ea55b500de06d05b9d4ce0de2"
						}
						title={
							"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
						}
						chanel={"Nextjs"}
						avatar={
							"https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
						}
						date={"1 day ago"}
						url={"/"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<VideoCard className='swiper-card'
						image={
							"https://external-preview.redd.it/14-v0-83LpIeFl4Q4BU5oLr2_pYfJMKjNB4xS8pP4DA4dFqdw.jpg?width=1080&crop=smart&auto=webp&s=e3f172d4ff71b50ea55b500de06d05b9d4ce0de2"
						}
						title={
							"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
						}
						chanel={"Nextjs"}
						avatar={
							"https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
						}
						date={"1 day ago"}
						url={"/"}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<VideoCard className='swiper-card'
						image={
							"https://external-preview.redd.it/14-v0-83LpIeFl4Q4BU5oLr2_pYfJMKjNB4xS8pP4DA4dFqdw.jpg?width=1080&crop=smart&auto=webp&s=e3f172d4ff71b50ea55b500de06d05b9d4ce0de2"
						}
						title={
							"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
						}
						chanel={"Nextjs"}
						avatar={
							"https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg"
						}
						date={"1 day ago"}
						url={"/"}
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
