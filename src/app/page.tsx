import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full m-0 p-0 bg-black items-center justify-items-center font-[family-name:var(--font-geist-sans)]">

        <section className="grid max-md:grid-cols-1 grid-cols-3 grid-rows-3 justify-center items-center text-white m-0 min-h-screen col-start-2 row-start-2 sm:items-start">
            <div className="flex justify-center max-md:col-start-1 w-full h-full gap-x-5 items-center row-start-2 col-start-2">
                <div className="border-r border-dashed bg-white">

                </div>
                <div>
                    <h1 className="text-7xl font-thin">OASES</h1>
                    <h2 className="text-3xl font-thin tracking-[7px] text-[#666] italic ">Real Estate</h2>
                </div>
            </div>
            <Link href="#" className="text-xl text-center max-md:col-start-1 col-start-2 row-start-4 border mb-20 text-white rounded-xl py-5">Get started</Link>
        </section>
        <section className="grid max-md:grid-cols-1 grid-cols-[45vw_1fr] w-full  items-center  m-0 col-start-1 sm:items-start">
            <div className="flex flex-col items-center justify-center h-[50vh] col-start-1 px-35 max-md:p-5 p-20  gap-y-4 bg-gray-300">

                <p className="text-xl max-md:text-lg text-center font-light text-[#222] tracking-[2.5px]">
                    <span className="text-4xl max-md:text-3xl font-medium italic text-[#222]">Oases Real Estate </span>

                    is a flagship platform developed by OASES Group Inc, aimed at transforming iKasi
                    real estate into a national market, through community-driven innovation.
                    <br />
                    <span className="text-[#222] font-semibold text-xl ">ORE </span>
                    connects landlords, tenants in one trusted user friendly space.
                    <br />

                </p>
                &middot;
            </div>
            <div className="flex flex-col w-full border-t h-[50vh] border-dashed text-gray-400 justify-center items-center max-md:col-start-1 col-start-2 max-md:p-5 p-20 gap-y-4">
                    <p className="text-6xl max-md:text-4xl font-thin italic tracking-wide text-center text-gray-300">&#34;Built by the people<br/> for the people&#34; </p>
            </div>
        </section>
        <section className="grid max-md:grid-cols-1 grid-cols-[1fr_45vw] w-full  items-center  m-0 col-start-1 sm:items-start">
            <div className="flex flex-col max-md:row-start-2 justify-center col-start-1 h-[50vh] border-t border-dashed w-full max-md:p-5 p-20 gap-y-4">
                <p className="text-6xl max-md:text-4xl font-thin italic tracking-wide text-center text-gray-300">Growing <span className="text-orange-500">Kasi</span> Property, <br/>One connection at a Time. </p>
            </div>
            <div className="flex flex-col max-md:row-start-1 items-center justify-center max-md:col-start-1 col-start-2 max-md:p-10 p-20 h-[50vh] gap-y-4 bg-gray-300">

                <p className="text-xl text-center max-md:px-5 px-35 font-light text-[#222] tracking-[2.5px]">
                    Whether you&#39;re renting out a backyard room or searching for your first home,
                    our platform simplifies the kasi property journey, making it more accessible, transparent
                    and empowering for everyone involved.
                </p>

            </div>

        </section>
    </main>

  );
}
