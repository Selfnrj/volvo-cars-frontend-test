﻿import Image from "next/image";
import ArrowLink from "./ArrowLink";
import { Car } from "@/typings";

type Props = {
  car: Car;
};

export default function SwiperItem({ car }: Props) {
  return (
    <div className="mb-8">
      <small className="uppercase text-gray-600 text-sm font-semibold">
        {car.bodyType}
      </small>
      <h1 className="text-xl font-bold mb-4">
        {car.modelName}{" "}
        <span className="text-gray-500 font-normal">{car.modelType}</span>
      </h1>
      <Image
        src={car.imageUrl}
        alt={car.modelName}
        width={500}
        height={375}
        priority
        className="block"
      />
      <div className="flex justify-center mt-8">
        <ArrowLink title="Learn" url={`/learn/${car.id}`} />
        <ArrowLink title="Shop" url={`/shop/${car.id}`} />
      </div>
    </div>
  );
}
