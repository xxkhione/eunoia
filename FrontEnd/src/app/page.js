export default function Page() {
    return (
        <main className='min-h-screen text-white'>
            <section className='flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 py-8 lg:py-16 max-w-7xl mx-auto gap-8 sm:gap-12'>
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
                        Eunoia
                    </h1>
                    <p className='text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                        This will be discussing the purpose of the website and how to use it.
                        This is currently filler text since I am building out the basic outline of the website at this very moment.
                    </p>
                </div>
            </section>
            <section className='flex flex-col lg:flex-row items-center justify-between p-4 py-8 lg:p-8 lg:py-16 max-w-7xl mx-auto gap-6 lg:gap-12'>
                <div className='flex-1 text-center lg:text-left'>
                    <span className="inline-block rounded-4xl text-black bg-[#F9F4FB] w-90 h-90 lg:w-130 lg:h-130 mr-0 lg:mr-10 mb-4 lg:mb-0">
                        <p className='text-lg mb-8 pt-30 lg:pt-50 p-10 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                            This will be discussing the purpose of the website and how to use it.
                            This is currently filler text since I am building out the basic outline of the website at this very moment.
                        </p>
                    </span>
                    <span className="inline-block rounded-4xl w-90 h-90 lg:w-130 lg:h-130 mr-0 lg:mr-10 bg-[#DACBEA]/20 backdrop-blur-lg shadow-lg border border-white/20">
                        <p className='text-lg mb-8 pt-30 lg:pt-50 p-10 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                            This will be discussing the purpose of the website and how to use it.
                            This is currently filler text since I am building out the basic outline of the website at this very moment.
                        </p>
                    </span>
                </div>
            </section>
            <section className='flex flex-col items-center justify-center p-4 sm:p-8 py-8 lg:py-16 max-w-7xl mx-auto gap-8 sm:gap-12 rounded-4xl bg-[#F9F4FB]'>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <h3 className='text-black text-lg sm:text-2xl w-max'>Start your journey today!</h3>
                    <button className='bg-[#F9F4FB] text-black rounded-xl px-6 py-2 font-bold text-base sm:text-lg transition hover:bg-[#f3e5f5]'>
                        Create an Account
                    </button>
                </div>
            </section>
        </main>
    )
}