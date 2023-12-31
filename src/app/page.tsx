"use client";
import React, {useState} from "react";
import Header from "./Header";
import GradioApp from "./GradioApp";
import Footer from "./Footer";
import "./LandingPage.css";

function LandingPage() {
  const [fadeOut, setFadeOut] = useState(false);
  const [showGradioApp, setShowGradioApp] = useState(false);

  const handleGetStarted = () => {
    setShowGradioApp(true);
  };

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      handleGetStarted();
    }, 500); // Delay the execution of handleGetStarted for 500ms to allow fade-out animation
  };

  return (
    <main className="bg-[#011627]">
      <Header />
      {!showGradioApp && (
        <div
          className={`flex flex-col h-full items-center justify-center ${
            fadeOut ? "fade-out" : null
          }`}
        >
          <div
            className={`flex flex-col items-center justify-center p-10 ${
              fadeOut ? "fade-out" : "fade-in"
            }`}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">DermAI Scan</h1>
            <p className="text-center sm:text-lg">
              Empowering Skin Health through Image-Based Detection.
            </p>
            <button
              className="m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md transition-transform duration-200 active:scale-90"
              onClick={handleClick}
            >
              Get Started
            </button>
          </div>
          <div className="px-4 sm:px-12">
            <h1 className="pb-4 font-bold text-2xl sm:text-3xl">Powerful Benefits</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
              <div className="border rounded-lg p-4 transform-gpu transition-transform duration-300 hover:scale-110">
                <img
                  className="pb-2"
                  src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Ftarget.png?alt=media&token=98ab7acc-51ff-4a4e-93a2-8c4e44e9447a"
                  alt="high accuracy"
                ></img>
                <h1 className="font-bold pb-2">Accurate Analysis</h1>
                <p className="text-justify">
                  Our model has been trained on a diverse set of skin lesion images and can achieve
                  up to 86% accuracy in identifying common skin lesions, including nevus and
                  pigmented benign keratosis, as well as more rare but potentially fatal conditions
                  such as melanoma and basal cell carcinoma.
                </p>
              </div>
              <div className="border rounded-lg p-4 transform-gpu transition-transform duration-300 hover:scale-110">
                <img
                  className="pb-2"
                  src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Fback-in-time.png?alt=media&token=9e6d9ba1-88c5-45bc-9b70-424b845c80bd"
                  alt="save time"
                ></img>
                <h1 className="font-bold pb-2">Save Time</h1>
                <p className="text-justify">
                  Our model significantly streamlines the diagnostic process for patients and
                  doctors. This tool enables faster and more accurate diagnoses, improving patient
                  outcomes and simplifying the overall experience.
                </p>
              </div>
              <div className="border rounded-lg p-4 transform-gpu transition-transform duration-300 hover:scale-110">
                <img
                  className="pb-2"
                  src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Fartificial-intelligence.png?alt=media&token=6ca8905f-622e-4ebc-bdb4-e918219bae9c"
                  alt="ai"
                ></img>
                <h1 className="font-bold pb-2">Innovative AI</h1>
                <p>Leveraging the latest image classification techniques.</p>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 md:p-12">
            <div className="flex flex-row">
              <img
                className="p-2 w-20"
                src="https://firebasestorage.googleapis.com/v0/b/skin-lesios-react-app.appspot.com/o/project_files%2Ffaq.png?alt=media&token=d78c8771-7b30-4412-9adc-b4c1668ab435"
                alt="faq"
              />
              <h1 className="p-2 mt-6 sm:pt-0 font-bold text-2xl sm:text-3xl">
                Frequently Asked Questions
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              <div className="p-2">
                <h1 className="font-bold pb-2 text-lg sm:text-xl">
                  How accurate is the classifier
                </h1>
                <p className="text-justify">
                  By leveraging machine learning, our Skin Lesions Classifier achieves high accuracy
                  rates, empowering you with a reliable tool.
                </p>
              </div>
              <div className="p-2">
                <h1 className="font-bold pb-2 text-lg sm:text-xl">Do I need special equipment?</h1>
                <p className="text-justify">
                  No. Our Skin Lesions Classifier works on your existing devices, making it a
                  convenient and accessible tool for everyone.
                </p>
              </div>
              <div className="p-2">
                <h1 className="font-bold pb-2 text-lg sm:text-xl">
                  Can I use it on any skin type?
                </h1>
                <p className="text-justify">
                  Our Skin Lesions Classifier is currently in development and has been trained on
                  various skin types. While it is designed to work effectively across different skin
                  types, its accuracy may vary and may not always provide accurate results for
                  certain skin types.
                </p>
              </div>
              <div className="p-2">
                <h1 className="font-bold pb-2 text-lg sm:text-xl">Will my data be secured?</h1>
                <p className="text-justify">
                  The skin lesion classifier collects skin images exclusively for the purpose of
                  performing diagnosis. These images are not stored anywhere but are immediately
                  processed by the algorithm. Once the processing is complete, the images are
                  promptly deleted, ensuring that your data remains confidential and protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {showGradioApp && <GradioApp />}
      <Footer />
    </main>
  );
}

export default LandingPage;
