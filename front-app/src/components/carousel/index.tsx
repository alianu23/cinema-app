"use client";

import { useContext, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { DialogOpen } from "./dialog";
import { MovieCard, MovieContext } from "..";
import Trailermodal from "./trailerModal";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export function CarouselCard(props: Props) {
  const router = useRouter();
  const { movies, loading } = useContext(MovieContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };
  const images = movies.map((movie: any) => movie.horizontalPoster);
  return (
    <>
      {loading ? (
        <Skeleton className="w-full h-[440px] mt-[20px] sm:mt-[40px] md:mt-[60px] lg:max-w-5xl mx-auto bg-white bg-opacity-10" />
      ) : (
        <div className="w-full mt-[20px]  sm:mt-[40px] md:mt-[60px] lg:max-w-5xl mx-auto">
          <Carousel className="relative ">
            <div className="flex justify-center items-center">
              <button
                onClick={prevSlide}
                disabled={false}
                className="text-white text-[24px] size-6 rounded-xl z-10 opacity-0 sm:opacity-100"
              >
                ❮
              </button>
              <CarouselContent
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                  transition: "transform 1s ease-in",
                }}
              >
                {movies.map((movie, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 ">
                      <img
                        src={movie.poster.lands.land1}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[440px] xl:h-[520px] object-cover scroll-smooth snap-center shadow-2xl"
                      />
                      <div className="flex gap-3 absolute bottom-[20px] ml-5">
                        <DialogOpen movie={movie} />
                        <Trailermodal trailers={movie.movie_trailer} />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <button
                onClick={nextSlide}
                className="text-white text-[24px] size-6 rounded-xl z-10 opacity-0 sm:opacity-100"
              >
                ❯
              </button>
            </div>
          </Carousel>
          <div className="flex justify-center mt-3 sm:mt-6 ">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`size-2 mx-1 cursor-pointer rounded-full ${
                  index === activeIndex ? "bg-red-500" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
