import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div className="w-4/5 mx-auto">
      <section>
        <h1 className="text-center m-5 text-xl">
          ABOUT <span className="font-medium">US</span>
        </h1>
      </section>
      <section>
        <div className="flex">
          <img src={assets.about_image} alt="" className="h-100 w-100 m-10" />
          <p className="m-10 flex flex-col align-center justify-center text-gray-700">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
            Prescripto is committed to excellence in healthcare technology.{" "}
            <br /><br />
            We continuously strive to enhance our platform, integrating the
            latest advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.<br /><br />
            <span className="text-xl font-semibold">Our Vision</span>
            <br />
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="text-xl m-5">
            <p>
              WHY <span className="font-semibold">CHOOSE US</span>
            </p>
          </div>
          <div className="flex w-full m-5">
            <div className="w-1/3 border border-gray-300 h-50 p-10 flex flex-col gap-2 align-center">
              <p className="text-xl">EFFICIENCY</p>
              <p>Streamlined appointment scheduling <br />that fits into your busy lifestyle.</p>
            </div>
            <div className="w-1/3 border border-gray-300 h-50 p-10 flex flex-col gap-2 align-center">
              <p className="text-xl">CONVENIENCE</p>
              <p>Access to a network of trusted <br />healthcare professionals in your area.</p>
            </div>
            <div className="w-1/3 border border-gray-300 h-50 p-10 flex flex-col gap-2 align-center">
              <p className="text-xl">PERSONALIZATION</p>
              <p>Tailored recommendations and reminders <br />to help you stay on top of your health.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
