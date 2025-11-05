export default function Page() {
    return (
        <main className='min-h-screen text-white'>
            <section className='flex flex-col lg:flex-row items-center justify-between p-8 py-16 lg:py-24 max-w-7xl mx-auto gap-12'>
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6'>
                        Eunoia
                    </h1>
                    <p className='text-lg mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                        This will be discussing the purpose of the website and how to use it.
                        This is currently filler text since I am building out the basic outline of the website at this very moment.
                    </p>
                </div>
            </section>
            <section className='flex flex-col lg:flex-row items-center justify-between p-8 py-16 lg:py-24 max-w-7xl mx-auto gap-12'>
                <div className='flex-1 text-center lg:text-left'>
                    <span className="inline-block rounded-4xl text-black bg-[#F9F4FB] w-130 h-130 mr-10">
                        <p className='text-lg mb-8 pt-50 p-10 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                            This will be discussing the purpose of the website and how to use it.
                            This is currently filler text since I am building out the basic outline of the website at this very moment.
                        </p>
                    </span>
                    <span className="inline-block w-130 h-10">
                        <p className='text-lg mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90'>
                            This will be discussing the purpose of the website and how to use it.
                            This is currently filler text since I am building out the basic outline of the website at this very moment.
                        </p>
                    </span>
                </div>
            </section>
        </main>
    )
}