﻿import { cars } from "@/public/api/cars";
import Image from "next/image";

export default function LearnPage({ params }: { params: { id: string } }) {
  const carsdetails = cars.find((car) => car.id === params.id);

  return (
    <div className=" max-w-screen-md mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">
        {carsdetails?.modelName}{" "}
        <span className="text-gray-500 font-normal">
          {carsdetails?.modelType}
        </span>
      </h1>
      <Image
        src={carsdetails?.imageUrl || ""}
        alt={carsdetails?.modelName || ""}
        width={900}
        height={600}
        className="mb-4"
      />
      <h2 className="text-xl font-bold mb-4">Learn more</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum
        reprehenderit tenetur vero excepturi ex commodi nemo eius autem ducimus
        neque nisi voluptatum necessitatibus nostrum itaque cum quos, ab
        maiores.
      </p>
    </div>
  );
}
