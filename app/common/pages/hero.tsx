export default function Hero() {
	return (
		<section className='bg-brand-900 pt-12 sm:pt-16'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl text-center'>
					<p className='font-inter px-6 text-lg text-white'>
						Changelog, roadmap, banners and waitlist in minutes
					</p>
					<h1 className='font-pj mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight'>
						Increase user engagement and reduce
						<span className='relative inline-flex sm:inline'>
							<span className='absolute inset-0 h-full w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg filter'></span>
							<span className='relative'> churn </span>
						</span>
					</h1>

					<div className='mt-9 px-8 sm:flex sm:items-center sm:justify-center sm:space-x-5 sm:px-0'>
						<div className='relative mt-8'>
							<div className='absolute -inset-2'>
								<div
									className='mx-auto h-full w-full opacity-30 blur-lg filter'
									style={{
										background:
											'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
									}}
								></div>
							</div>

							<form action='#' method='POST' className='relative'>
								<div className='flex'>
									<div className='flex-1'>
										<input
											type='email'
											name=''
											id=''
											placeholder='Enter email address'
											className='font-pj block w-full rounded-l-xl border-gray-300 bg-white px-4 py-4 text-base text-gray-900 placeholder-gray-600 caret-gray-900 focus:border-gray-900 focus:ring-gray-900'
											required
										/>
									</div>

									<button
										type='submit'
										className='font-pj rounded-r-xl border border-transparent bg-gray-900 px-10 py-4 text-base font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:px-16'
									>
										Join
									</button>
								</div>
							</form>
						</div>
					</div>

					<p className='font-inter mt-8 text-base text-gray-500'>
						7 Days free trial · No credit card required
					</p>
				</div>
			</div>

			<div className='bg-brand-900 pb-12'>
				<div className='relative'>
					<div className='absolute inset-0 h-2/3 bg-brand-900'></div>
					<div className='relative mx-auto'>
						<div className='lg:mx-auto lg:max-w-6xl'>
							<img
								className='scale-110 transform'
								src='https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png'
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
