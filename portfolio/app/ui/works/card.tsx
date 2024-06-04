import Image from "next/image";

const fetch = [
  {
    title: "titre",
    description: "blablabla",
    img: "/image.png",
    alt: "titre du site",
    techno: ["redux", "react", "next"],
  },
  {
    title: "titre",
    description: "blablabla",
    img: "/image.png",
    alt: "titre du site",
    techno: ["redux", "react", "next"],
  },
];

function Card({ title, description, techno, img, alt }) {
  return (
    <div className="relative h-[650px] max-h-[80vh] w-full overflow-hidden rounded-3xl object-cover lg:w-[1080px]">
      <Image
        src={img}
        alt={alt}
        fill={true}
        className="absolute object-cover"
      />
    </div>
  );
}

export function Cards() {
  return (
    <>
      {fetch.map((dataCard) => {
        return (
          <Card
            key={dataCard.title}
            title={dataCard.title}
            description={dataCard.description}
            techno={dataCard.techno}
            img={dataCard.img}
            alt={dataCard.alt}
          />
        );
      })}
    </>
  );
}
