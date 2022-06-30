import React from 'react'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useTransition,
} from '@remix-run/react'
import { useEffect } from 'react'
// @ts-ignore
import NProgress from 'nprogress'
import nProgressStyles from 'nprogress/nprogress.css'
import styles from './tailwind.css'

interface DocumentProps {
	children: React.ReactNode
}

export const links: LinksFunction = () => {
	return [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
		},
		{ rel: 'stylesheet', href: styles },
		{ rel: 'manifest', href: '/site.webmanifest' },
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/apple-touch-icon.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicon-16x16.png',
		},
		{ rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
	]
}

export const meta: MetaFunction = () => ({
	// TODO: Fill out the empty strings as required
	charset: 'utf-8',
	'msapplication-TileColor': '#2b5797',
	'og:site': 'https://useherald.com',
	'og:url': 'https://useherald.com',
	'og:title': 'Herald: All-in-one solution to announce product updates and get feedback from customers.',
	'og:description': 'Create waitlists, banners, changelogs and roadmaps for your product in a few minutes.',
	'og:image': '',
	'theme-color': '#ffffff',
	title: 'Herald: All-in-one solution to announce product updates and get feedback from customers.',
	'twitter:card': 'summary_large_image',
	'twitter:site': 'https://useherald.com',
	'twitter:url': 'https://useherald.com',
	'twitter:creator': '@_ilango',
	'twitter:title': 'Herald',
	'twitter:description': 'Create waitlists, banners, changelogs and roadmaps for your product in a few minutes.',
	'twitter:image': '',
	viewport: 'width=device-width,initial-scale=1',
})

const Document = (props: DocumentProps) => {
	const transition = useTransition()

	useEffect(() => {
		// when the state is idle then we can to complete the progress bar
		if (transition.state === 'idle') NProgress.done()
		// and when it's something else it means it's either submitting a form or
		// waiting for the loaders of the next location, so we start it
		else NProgress.start()
	}, [transition.state])

	return (
		<html lang='en' className='h-full'>
			<head>
				<Meta />
				<Links />
			</head>
			<body className='h-full w-full bg-brand-900 font-sans'>
				{process.env.NODE_ENV === 'production' ? (
					<>
						{/* TODO: fill data-domain */}
						<script
							defer
							data-domain='useherald.com'
							src='https://plausible.io/js/plausible.js'
						></script>
					</>
				) : null}
				{props.children}
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
			</body>
		</html>
	)
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}
