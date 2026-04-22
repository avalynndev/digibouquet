import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen font-mono uppercase">
      <div className="p-16 mx-auto max-w-3xl text-center">
        <Image
          src="/color/flowers/lily.png"
          alt="lily flower"
          width={100}
          height={100}
          className="object-cover mx-auto mb-6"
          priority
        />
        <Image
          src="/digibouquet.png"
          alt="digibouquet"
          width={600}
          height={400}
          className="object-cover mx-auto"
          priority
        />
        <p className="my-6 text-sm md:mb-6 md:-mt-6">
          beautiful flowers <br /> delivered digitally
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link
            href="/bouquet?mode=color"
            className="text-sm px-8 py-4 rounded-xl bg-black text-[#F5F5DC] shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#1a1a1a] m-2"
          >
            BUILD A BOUQUET
          </Link>

          <Link
            href="/bouquet?mode=mono"
            className="text-sm px-8 py-4 rounded-xl border border-black text-black bg-white/60 backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-[#F5F5AC]/70 hover:shadow-md m-2"
          >
            BUILD IT IN BLACK AND WHITE
          </Link>
          <Link
            href="/garden"
            className="text-sm px-8 py-4 underline text-[#000000] m-2"
          >
            VIEW GARDEN
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-500">made with ❤️ for keerthi</p>
      </div>
    </div>
  );
}
