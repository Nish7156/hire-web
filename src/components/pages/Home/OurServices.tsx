import React from "react";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
}) => (
  <div className="flex flex-col grow capitalize max-md:mt-10">
    <div className=" flex justify-center md:justify-start">
      <img src={imageSrc} alt={title} className="w-16 aspect-square" />
    </div>
    <h3 className="mt-4 mr-5 text-3xl text-center md:text-left font-medium text-black max-md:mr-2.5">
      {title}
    </h3>
    <p className="mt-4 text-sm text-neutral-700 text-center md:text-left">
      {description}
    </p>
  </div>
);

const services = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c6d50f12ecc7a9139597c04dc18e791a1634f86d0becb953982dbf3df15b3fc?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "Product Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/48939a920af7ed293c225caa92782e35f86d2b0d46a70301bb10dbc74bb039ba?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/815840570547b79945c3d666f98826c3327613271e0d2d6fbbbdc04d095a7405?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/18e7778669bd390f386fc35005d929338a196c15f6cff7028687f49ad98108dc?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "Staffing Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/769906a444f60c46bbd16e72052f9753d0c469b133609440db9657d4c84c183a?apiKey=8bb55e60ed164c3885dc3e2ec7400011&",
    title: "AI/ML",
    description:
      "Lorem ipsum dolor sit amet consectetur. Ultricies curabitur tempus turpis aliquam lectus. Enim donec facilisi vel amet accumsan nunc amet.",
  },
];

function OurServices() {
  return (
    <div className=" relative">
      <div className="container pt-6 pb-4 md:pb-14 md:pt-0 ">
        <h2 className="self-start text-center md:text-left md:mt-12  text-5xl font-medium text-black capitalize max-md:ml-2.5 max-md:text-4xl">
          Our Services
        </h2>
        <div className="">
          <div className="flex relative flex-col w-full max-w-[1119px] max-md:max-w-full">
            {/* <div className="shrink-0 h-1 mt-8 rounded-sm bg-zinc-300 max-md:max-w-full" /> */}
            <div className="shrink-0 h-1 mt-8 rounded-sm max-md:max-w-full gradient-bg-line initial-gray" />

            <div className=" mt-2 md:mt-14 max-md:max-w-full">
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                {services.map((service, index) => (
                  <div key={index}>
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 w-full h-auto">
        <img src="/bg/movingWave.svg" alt="" />
      </div>
    </div>
  );
}

export default OurServices;
