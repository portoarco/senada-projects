import Image from "next/image";

const highlightProducts = [
  {
    id: 1,
    name: "Baju Batik",
    desc: "Koleksi Terbaru",
    imgUrl: "/assets/1.jpeg",
    customClass: "md:row-span-2 md:col-span-1",
  },
  {
    id: 2,
    name: "Aksesoris",
    desc: "Aksesoris Terbaru",
    imgUrl: "/assets/2.jpeg",
    customClass: "md:row-span-2 md:col-span-1",
  },
  {
    id: 3,
    name: "Celana Batik",
    desc: "Celana Batik Dingin",
    imgUrl: "/assets/1.jpeg",
    customClass: "md:col-span-2 md:row-span-1",
  },
  {
    id: 4,
    name: "Kain Batik",
    desc: "Kain Batik Tulis Terlaris",
    imgUrl: "/assets/1.jpeg",
    customClass: "md:col-span-2 md:row-span-1",
  },
];

export default function Highlight() {
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-regular text-5xl text-[#440C06]">
          HIGHLIGHT
        </h1>
        <hr className="mt-2 w-[12%] hover:w-[20%] transform transition-all duration-300 ease-in-out h-1 bg-[#440C06]" />
      </div>

      <section
        id="grid-highlight-photo"
        className="p-4 mt-4 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px] mx-auto"
      >
        {highlightProducts.map((prd, idx) => (
          <div
            key={idx}
            className={`relative w-full h-[250px] md:h-full overflow-hidden group rounded-2xl inset-shadow-2xs shadow-xl ${prd.customClass}`}
          >
            <Image
              src={prd.imgUrl}
              alt={prd.name}
              fill
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-90 "
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#3d4d90]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 ">
              <div className=" p-4 rounded-md ">
                <h3 className="text-white font-bold text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {prd.name}
                </h3>
                <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {prd.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
