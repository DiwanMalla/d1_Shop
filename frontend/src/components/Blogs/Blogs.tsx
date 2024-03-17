import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";
const BlogData = [
  {
    id: 1,
    title: "How to choose perfect smartwatch",
    subtitle: `When selecting the perfect smartwatch, it's crucial to consider three main factors to ensure it aligns with your lifestyle and technological needs. 
      First, assess its compatibility and connectivity options; the smartwatch should seamlessly integrate with your smartphone, enabling you to receive notifications, make calls, and use apps without friction. 
      Secondly, delve into the features and functionality it offers. Essential aspects like health monitoring, fitness tracking, and sufficient battery life can greatly enhance your daily routines and overall well-being. 
      Lastly, don't overlook the design and customization options. A smartwatch that matches your personal style, along with customizable watch faces and interchangeable bands, will ensure that your tech not only serves its purpose but also complements your aesthetic. By carefully considering these elements, you can choose a smartwatch that serves as both a functional tool and a fashion statement.`,
    published: "Mar 17, 2024 by Diwan",
    image: Img1,
  },
  {
    id: 2,
    title: "How to choose perfect gadget",
    subtitle: `Selecting the perfect gadget requires focusing on three key aspects: functionality that aligns with your specific needs, 
    compatibility with your existing devices for a seamless experience, and user reviews to gauge reliability and performance. Prioritizing these factors ensures
    that your chosen gadget not only meets your requirements but also integrates smoothly into your daily life, offering both efficiency and satisfaction.`,
    published: "Mar 17, 2024 by Diwan",
    image: Img2,
  },
  {
    id: 3,
    title: "How to choose perfect VR headset",
    subtitle: `Choosing the perfect VR headset involves considering several factors to ensure an immersive and comfortable virtual reality experience. First, assess the headset's compatibility with your existing hardware or its own 
    computing requirements, as some VR headsets need to be connected to a high-specification PC or console, while others are standalone devices. Second, evaluate the visual and audio quality, including the resolution, 
    ield of view, and refresh rate, which are crucial for a realistic VR experience. Comfort is also key, so look for a headset with adjustable straps, a comfortable fit, and manageable weight. Lastly, consider the 
    available content and games, as well as any additional features such as hand tracking or room-scale tracking, to ensure the VR headset meets your entertainment or professional needs.`,
    published: "Mar 17, 2024 by Diwan",
    image: Img3,
  },
];
const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header Section */}
        <Heading title="Recent News" subtitle="Explore Our Blogs" />

        {/* Blog Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {BlogData.map((blogs) => (
            <div key={blogs.id} className="bg-white dark:bg-gray-900 ">
              {/* Image Section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={blogs.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* Content Section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{blogs.published}</p>
                <p className="font-bold line-clamp-2">{blogs.title}</p>
                <p className="line-clamp-5 text-sm text-gray-600">
                  {blogs.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
