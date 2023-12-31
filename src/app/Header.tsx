import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex flex-row items-center bg-[#011627]">
        <div className="m-2">
          <img
            className="pl-10 h-20"
            alt="UTP logo"
            src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Flogo_utp.png?alt=media&token=db9234b3-1a54-4c49-bfc9-96adb9fd61d2"
          ></img>
        </div>
        <div>
          <img
            className="h-20"
            alt="Pollub Logo"
            src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Floga_weii-6.png?alt=media&token=d4f4dd16-7680-49c7-a7b0-f7e74da48a4c"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
