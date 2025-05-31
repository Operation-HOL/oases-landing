import Link from "next/link"
import Image from "next/image"

export default function Home() {
    return (
        <main className="flex flex-col w-full m-0 p-0 bg-[#262626] items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image Container */}
                <div className="absolute inset-0 w-full h-full">
                    <Image src="/soweto_silos.jpg" alt="hero" fill className="object-cover z-0" priority />
                    <div className="absolute inset-0  bg-black/50 z-10" />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-20 w-full h-full grid grid-cols-1 gap-y-10 md:grid-cols-3 grid-rows-3 max-w-7xl mx-auto px-4">
                    {/* Center Content */}
                    <div className="flex justify-center items-center w-full h-full gap-x-5 row-start-2 col-start-1 md:col-start-2">
                        <div className="text-white gap-3">
                            <h1 className="text-5xl max-sm:tracking-widest text-center md:text-7xl font-thin">OASES</h1>
                            <h2 className="text-xl md:text-3xl font-thin tracking-[7px] text-[#222] italic">Real Estate</h2>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center items-end pb-20 col-start-1 md:col-start-2 row-start-3">
                        <Link
                            href="https://properties.oases.co.za"
                            className="text-xl text-center border border-white text-white rounded-xl py-5 px-8 hover:bg-[#FAF0E6] hover:text-black transition-colors"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </section>

            <section className="grid max-md:grid-cols-1 grid-cols-[45vw_1fr] w-full items-center m-0">
                <div className="flex flex-col items-center justify-center h-[50vh] px-5 lg:px-20 gap-y-4 bg-[#FAF0E6]">
                    <p className="text-lg md:text-xl text-center font-light text-[#222] tracking-[2.5px]">
                        <span className="text-3xl md:text-4xl font-medium italic text-[#222]">Oases Real Estate </span>
                        is a flagship platform developed by OASES Group Inc, aimed at transforming iKasi real estate into a national
                        market, through community-driven innovation. This platform connects landlords, tenants in one trusted user friendly space.
                    </p>
                </div>
                <div className="relative flex flex-col w-full border-t h-[50vh] border-dashed text-gray-400 justify-center items-center px-5 xl:px-20 gap-y-4">
                    <div className="relative z-20 w-full h-full flex items-center gap-y-10 md:grid-cols-3 grid-rows-3 max-w-7xl mx-auto px-4">
                        <p className="text-4xl lg:text-5xl  xl:text-6xl font-thin italic col-span-3  row-start-2 w-full tracking-wide text-center text-gray-300">
                            &#34;Built by the people
                            <br /> for the people&#34;
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid max-md:grid-cols-1 grid-cols-[1fr_45vw] w-full items-center m-0">
                <div className="relative flex flex-col w-full border-t h-[50vh] border-dashed text-gray-400 justify-center items-center px-5 md:px-20 gap-y-4">
                    <div className="absolute inset-0 w-full h-full">
                        <Image src="/subhero_one.png" alt="hero" fill className="object-cover z-0" priority />
                        <div className="absolute inset-0 backdrop-blur-sm bg-[#1a1a10]/50 z-10" />
                    </div>
                    <div className="relative z-20 w-full h-full flex items-center gap-y-10 md:grid-cols-3 grid-rows-3 max-w-7xl mx-auto px-4">
                        <p className="text-4xl  lg:text-5xl xl:text-6xl font-thin italic col-span-3 row-start-2 w-full tracking-wide text-center text-gray-300">
                            Growing <span className="bg-[#1a1a10]/50 text-orange-500 not-italic"> Kasi</span> Property, <br />
                            One connection at a Time.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col max-md:order-1 items-center justify-center px-5 lg:px-20 h-[50vh] gap-y-4 bg-[#FAF0E6]">
                    <p className="text-lg md:text-xl text-center font-light text-[#222] tracking-[2.5px]">
                        Whether you&#39;re renting out a backyard room or searching for your first home, our platform simplifies the
                        kasi property journey, making it more accessible, transparent and empowering for everyone involved.
                    </p>
                </div>
            </section>
        </main>
    )
}
