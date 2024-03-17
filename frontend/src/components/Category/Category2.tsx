import Button from "../Shared/Button";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first cat  */}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-brandWhite/90 to-black/70
          text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl uppercase font-semibold opacity-40 mb-2">
                  Console
                </p>

                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[250px] absolute -translate-1/2 right-0"
            />
          </div>
          {/* second cat  */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/90
          text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl opacity-40 font-semibold mb-2">
                  Oculus
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandGreen"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[320px] absolute -right-4 bottom-0"
            />
          </div>
          {/* third cat */}
          <div
            className="py-10 pl-7 bg-gradient-to-br from-brandBlue to-brandBlue rounded-3xl
          text-white relative h-[320px]  flex items-start"
          >
            <div className="">
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px] ">With</p>
                <p className="text-4xl xl:text-5xl font-semibold opacity-50 mb-[2px]">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandBlue"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[200px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
