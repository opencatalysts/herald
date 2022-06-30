export default function Feature03() {
	return (
		<section className='bg-gray-900 py-12 sm:py-16 lg:py-20'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:items-center md:gap-x-16'>
					<div>
						<img
							className='mx-auto w-full'
							src='https://cdn.rareblocks.xyz/collection/clarity/images/features/2/illustration.png'
							alt=''
						/>
					</div>

					<div className='text-center md:text-left lg:pl-16'>
						<h2 className='font-pj text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl'>
							Never miss any task
						</h2>
						<p className='font-pj mt-4 text-base text-gray-700 sm:mt-8'>
							Lorem ipsum dolor sit amet, consectetur adipis elit.
							Sit enim nec, proin faucibus nibh et sagittis a.
							Lacinia purus ac amet pellentesque aliquam enim.
						</p>

						<div className='group relative mt-10 inline-flex'>
							<div className='transitiona-all absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg filter duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200'></div>
							<a
								href='#'
								title=''
								className='font-pj relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
								role='button'
							>
								Add First Task
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
