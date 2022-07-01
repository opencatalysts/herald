export default function Header() {
	return (
		<header className='py-4 md:py-6' x-data='{expanded: false}'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between'>
					<div className='flex-shrink-0'>
						<a
							href='/'
							title=''
							className='flex items-center space-x-2 rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
						>
							<img
								className='h-8 w-auto'
								src='/logo.png'
								alt=''
							/>
							<span className='text-xl font-bold text-white'>
								Herald
							</span>
						</a>
					</div>

					<div className='flex lg:hidden'>
						<button type='button' className='text-gray-900'>
							<span x-show='!expanded' aria-hidden='true'>
								<svg
									className='h-7 w-7'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='1.5'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							</span>

							<span x-show='expanded' aria-hidden='true'>
								<svg
									className='h-7 w-7'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</span>
						</button>
					</div>

					<div className='hidden lg:ml-16 lg:flex lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16'>
						<a
							href='#'
							title=''
							className='font-pj rounded text-base font-medium text-white transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
						>
							Features{' '}
						</a>

						<a
							href='#'
							title=''
							className='font-pj rounded text-base font-medium text-white transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
						>
							Pricing{' '}
						</a>

						<a
							href='#'
							title=''
							className='font-pj rounded text-base font-medium text-white transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
						>
							Automation{' '}
						</a>
					</div>

					{/*<div className='hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10'>*/}
					{/*<a*/}
					{/*	href='#'*/}
					{/*	title=''*/}
					{/*	className='font-pj rounded text-base font-medium text-white transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'*/}
					{/*>*/}
					{/*	Customer Login{' '}*/}
					{/*</a>*/}

					{/*<a*/}
					{/*	href='#'*/}
					{/*	title=''*/}
					{/*	className='font-pj inline-flex items-center justify-center rounded-xl border border-transparent bg-brand-500 px-4 py-1 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'*/}
					{/*	role='button'*/}
					{/*>*/}
					{/*	Sign up*/}
					{/*</a>*/}
					{/*</div>*/}
				</div>
			</div>

			<nav className='hidden' x-show='expanded' x-collapse='true'>
				<div className='px-1 py-8'>
					<div className='grid gap-y-7'>
						<a
							href='#'
							title=''
							className='font-pj -m-3 flex items-center rounded-xl p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
						>
							Features{' '}
						</a>

						<a
							href='#'
							title=''
							className='font-pj -m-3 flex items-center rounded-xl p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
						>
							Pricing{' '}
						</a>

						<a
							href='#'
							title=''
							className='font-pj -m-3 flex items-center rounded-xl p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'
						>
							Automation{' '}
						</a>

						{/*<a*/}
						{/*	href='#'*/}
						{/*	title=''*/}
						{/*	className='font-pj -m-3 flex items-center rounded-xl p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2'*/}
						{/*>*/}
						{/*	Customer Login{' '}*/}
						{/*</a>*/}

						{/*<a*/}
						{/*	href='#'*/}
						{/*	title=''*/}
						{/*	className='*/}
						{/*        font-pj*/}
						{/*        inline-flex*/}
						{/*        items-center*/}
						{/*        justify-center*/}
						{/*        rounded-xl*/}
						{/*        border*/}
						{/*        border-transparent*/}
						{/*        bg-gray-900*/}
						{/*        px-4*/}
						{/*        py-2*/}
						{/*        text-base*/}
						{/*        font-bold*/}
						{/*        leading-7 text-white*/}
						{/*        transition-all*/}
						{/*        duration-200*/}
						{/*        hover:bg-gray-600*/}
						{/*        focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2*/}
						{/*    '*/}
						{/*	role='button'*/}
						{/*>*/}
						{/*	Sign up*/}
						{/*</a>*/}
					</div>
				</div>
			</nav>
		</header>
	)
}
