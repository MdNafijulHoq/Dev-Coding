import Img1 from "@/assets/Icons/Shape.png";
import Img2 from "@/assets/Icons/Shape1.png";
import Img3 from "@/assets/Icons/Logomark.png";
import Img4 from "@/assets/Icons/Logomark3.png";
import Img5 from "@/assets/Icons/Shape2.png";
import Img6 from "@/assets/Icons/Logomark2.png";

const Promotions = () => {
  const logos = [
    {
      icon: Img1,
      title: "Boltshift",
    },
    {
      icon: Img2,
      title: "Lightbox",
    },
    {
      icon: Img3,
      title: "FeatherDev",
    },
    {
      icon: Img4,
      title: "Spherule",
    },
    {
      icon: Img5,
      title: "GlobalBank",
    },
    {
      icon: Img6,
      title: "Nietzsche",
    },
  ];

  return (
    <section className="py-12 px-6 text-center">
      <p className="text-gray-600">Join 4,000+ companies already growing</p>
      <div className="flex flex-wrap justify-center gap-8 mt-6">
        {logos.map((logo, i) => (
          <div key={i} className="font-semibold text-gray-900 text-md flex items-center gap-x-3">
            <img className="size-9" src={logo.icon} alt="logo" />
            <h4>{logo.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;
