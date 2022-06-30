import type { ReactNode } from 'react'
import { Link } from '@remix-run/react'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import Hero from '~/common/pages/hero'
import Header from '~/common/pages/header'
import Feature01 from '~/common/pages/feature01'
import Feature03 from '~/common/pages/feature03'
import Feature04 from '~/common/pages/feature04'
import Stats from '~/common/pages/stats'
import Pricing from '~/common/pages/pricing'
import Footer from '~/common/pages/footer'

type ContainerProps = {
	children: ReactNode
}

export function Container(props: ContainerProps) {
	return (
		<div className='flex h-full w-full items-start justify-center'>
			<div className='container flex h-full w-full flex-col items-center justify-center space-y-8 text-white'>
				{props.children}
			</div>
		</div>
	)
}

export default function Index() {
	return (
		<>
			<div className='overflow-x-hidden bg-brand-900'>
				<Header />
				<Hero />
			</div>
			<Feature01 />
			{/*<Feature02 />*/}
			{/*<Feature03 />*/}
			{/*<Feature04 />*/}
			{/*<Feature03 />*/}
			{/*<Stats />*/}
			<Pricing />
			<Footer />
		</>
	)
}
