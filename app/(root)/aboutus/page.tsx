import Image from "next/image";
import React from "react";
import BackgroundOne from "@/public/skyscraper.jpg";

const page = () => {
  return (
    <>
      <div className="mx-20">
        <section className="w-full pattern flex justify-center items-center flex-col py-10 px-6 font-work-sans">
          <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[36px] sm:leading-[64px] text-[10px] leading-[46px] my-5">
            About Our Association
          </h1>
          <p className="font-normal text-[13px] text-gray-700 max-w-[70%] break-words text-center">
            At Sheger Entrepreneurs Association, we are a dedicated and
            passionate team of professionals with a shared commitment to
            nurturing entrepreneurship. Our organization is rooted in a deep
            belief in the potential of aspiring entrepreneurs. We work
            tirelessly to provide them with the knowledge, resources, and
            mentorship necessary to turn their dreams into successful
            businesses. With a strong sense of purpose, we are here to guide,
            inspire, and empower our members on their entrepreneurial journey.
          </p>
        </section>
        <div className="divider"></div>
        <section>
          <div className="grid gird-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/enterprenurP.jpg"
                alt="enterprenur program"
                width={400}
                height={400}
                className="rounded-xl "
              />
            </div>
            <div>
              <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] my-5">
                Entrepreneurship Training
              </h1>
              <p className="font-normal text-[13px] text-gray-700 max-w-[70%] break-words text-center">
                At Sheger Entrepreneurs Association, we recognize the
                transformative power of knowledge and skills, not only in terms
                of competence but also in shaping entrepreneurial behavior. Our
                Entrepreneurship Training program is thoughtfully designed to
                empower young adults and children with the tools and insights
                needed to navigate the entrepreneurial landscape. We go beyond
                teaching mere concepts; we instill competence in business
                establishment, management, and marketing, as well as the right
                behavior and mindset crucial for success. Through interactive
                and practical training sessions, we equip participants with the
                knowledge and confidence to turn their innovative ideas into
                thriving ventures. Join us in this journey of learning, growth,
                and entrepreneurial excellence, where competence and the right
                behavior work hand in hand to drive success.
              </p>
            </div>
          </div>
        </section>
        {/* <div className="space-y-10"></div> */}
        <div className="my-20"></div>
        <section className="grid gird-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] my-5">
              Kidpreneurship Program
            </h1>
            <p className="font-normal text-[13px] text-gray-700 max-w-[80%] text-center">
              At Sheger Entrepreneurs Association, we believe in nurturing the
              entrepreneurial spirit from a young age. Our ‘Kidpreneurship
              Program in Public Schools’ is a dedicated initiative designed to
              inspire and empower the leaders of tomorrow. Through engaging and
              age-appropriate training, we introduce children to the exciting
              world of entrepreneurship. We focus on cultivating essential
              skills, creativity, and a strong sense of self-confidence. Our
              program not only equips kids with fundamental business concepts
              but also encourages critical thinking and problem-solving. By
              instilling an entrepreneurial mindset early on, we aim to unleash
              their full potential, teaching them to dream big and prepare for a
              future where they can confidently turn their innovative ideas into
              reality.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/enterprenurKidFix.jpg"
              alt="enterprenur program"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
        </section>
      </div>
      <div className="my-10"></div>
      <section
        className="relative h-screen bg-fixed bg-center bg-cover "
        style={{ backgroundImage: "url('/skyscraper.jpg')" }}
      >
        <div className="absolute inset-0 bg-white opacity-70"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] my-5 text-center">
                Venture & Growth
              </h1>
              <p className="font-normal text-[13px] text-gray-800 max-w-3xl break-words text-center">
                At Sheger Entrepreneurs Association, we are steadfast in our
                commitment to nurturing and fostering the ventures of aspiring
                entrepreneurs. We believe in the growth of innovative ideas and
                the development of thriving businesses. Our mission is to
                provide a nurturing environment for these ventures, offering
                essential support and mentorship every step of the way. With a
                focus on access to capital, resources, and expert guidance, we
                empower entrepreneurs to cultivate their startups and achieve
                sustainable growth. We are dedicated to being the driving force
                behind the success stories of our members, turning their initial
                ideas into flourishing ventures.
              </p>
            </div>
            <div>
              <h1 className="uppercase py-3 font-work-sans font-bold text-gray-800 sm:text-[30px] sm:leading-[64px] text-[10px] leading-[46px] my-5 text-center">
                Business Development Service
              </h1>
              <p className="font-normal text-[13px] text-gray-800 max-w-3xl break-words text-center">
                At Sheger Entrepreneurs Association, we understand that starting
                and growing a successful business requires more than just an
                idea. Our Business Development Service is your roadmap to
                business excellence. We provide expert guidance on every aspect
                of entrepreneurship, from establishing and setting up your
                business to effectively managing and marketing it. We work
                closely with you, tailoring our support to meet your unique
                needs and challenges. Whether you’re a budding entrepreneur or
                an established business owner, our commitment is to help you
                thrive and reach new heights in the ever-evolving world of
                commerce.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
