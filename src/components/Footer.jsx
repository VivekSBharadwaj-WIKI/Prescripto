import React from "react";
import { assets } from "../assets/assets_frontend/assets";
const Footer = () => {
  console.log(assets);
  return (
    <div className="w-4/5 rounded-4xl mx-auto">
      <div className="grid grid-cols-4 border-b-1 border-gray-700 gap-5 py-10 text-gray-600">
        <div className="mb-5 col-start-1 col-end-3">
          <img src={assets.logo} alt="" />
        </div>
        <div className="mb-5 mx-auto text-2xl font-medium text-black">
          <p>Company</p>
        </div>
        <div className="mb-5 mx-auto text-2xl font-medium text-black">
          <p>GET IN TOUCH</p>
        </div>
        <div className="mb-5 mx-auto col-start-1 col-end-3">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            error sunt. Itaque fugit aspernatur quia maxime expedita tempore
            quos rem nostrum, molestiae unde nemo adipisci veniam ratione ullam
            quam quisquam similique possimus, totam officiis dolorem quidem
            cumque alias iusto? Animi.
          </p>
        </div>
        <div className="mb-5 mx-auto flex flex-col gap-2 text-sm">
          <a href="">HOME</a>
          <a href="">ABOUT US</a>
          <a href="">CONTACT US</a>
          <a href="">PRIVACY POLICY</a>
        </div>
        <div className="mb-5 mx-auto flex flex-col gap-2 text-sm">
          <p>+1-212-456-7890</p>
          <p>Info.mystack@gmail.com</p>
        </div>
      </div>
      <div className="text-center p-3">
        Copyright © 2024 GreatStack - All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;
