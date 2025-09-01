import images from "@/assets/images/Image.png";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        <div className="flex w-full flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 overflow-hidden rounded-lg md:rounded-xl bg-[#53389E]">
          {/* Left Content */}
          <motion.div
            className="flex-1 mx-auto space-y-5 p-6 sm:p-8 lg:px-10 text-center lg:text-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-snug"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Give us a shot
            </motion.h3>

            <motion.p
              className="text-[#E9D7FE] max-w-xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join over 4,000+ startups already growing with Untitled.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-5 pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <Button className="w-full sm:w-auto bg-white text-black">
                  Learn more
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                variants={{
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <Button className="w-full sm:w-auto bg-[#7F56D9] hover:bg-[#6931d4]">
                  Get started
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center items-center mx-auto shrink-0 pb-0"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={images}
              alt="CTA_Img"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
