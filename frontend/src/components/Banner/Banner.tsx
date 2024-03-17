import React from "react";
import Button from "../Shared/Button";
interface BannerData {
  bgColor: string;
  discount: string;
  title: string;
  date: string;
  image: string;
  title2: string;
  title3: string;
  title4: string;
}
interface BannerProps {
  data: BannerData;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-start py-12">
      <div className="container">
        <div
          style={{ background: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{data.discount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p className="text-sm">{data.date}</p>
          </div>
          {/* second col */}
          <div className="hover:scale-150 duration-300 h-full flex items-center">
            <img
              src={data.image}
              alt=""
              className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{data.title2}</p>
            <p className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
            <p className="text-sm tracking-wide leading-5">{data.title4}</p>
            <div>
              <Button
                text="Shop Now"
                bgColor="bg-white"
                textColor={
                  data.bgColor == "#f42c37" ? "text-primary" : "text-green-400"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
