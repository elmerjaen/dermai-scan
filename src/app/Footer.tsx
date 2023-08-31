import React from "react";
import {FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-rows px-12 pb-4 justify-end items-center space-x-6">
      <span>© 2023. Project made in collaboration with Lublin University of Technology.</span>
      <a href="https://github.com/elmerjaen">
        <FaGithub style={{fontSize: "20px"}} />
      </a>
    </div>
  );
}
