// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="relative flex flex-col items-center justify-center py-16 lg:py-24 min-h-[60vh]">
        {/* Background SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop
                offset="0%"
                style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ec4899", stopOpacity: 0.3 }}
              />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="200" fill="url(#grad1)" />
          <circle cx="200" cy="150" r="50" fill="#ec4899" opacity="0.3" />
          <circle cx="600" cy="450" r="30" fill="#8b5cf6" opacity="0.4" />
          <circle cx="150" cy="400" r="25" fill="#ec4899" opacity="0.3" />
          <circle cx="650" cy="200" r="20" fill="#8b5cf6" opacity="0.4" />
        </svg>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Contact Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-pink-500 to-violet-600 p-6 rounded-full">
                <MdEmail size={48} className="text-white" />
              </div>
            </div>
          </div>

          {/* Main Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Have a project in mind? Want to discuss a collaboration?
            <br />
            <span className="text-pink-400 font-semibold">
              Don't hesitate to contact me by email
            </span>
          </p>

          {/* Email Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`mailto:${personalData.email}`}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-violet-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                <MdEmail size={24} />
                Send Email
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <div className="text-gray-400 text-sm md:text-base">
              or copy directly:{" "}
              <span className="text-pink-400 font-mono bg-gray-800 px-2 py-1 rounded">
                {personalData.email}
              </span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg">
              I usually respond within 24 hours
            </p>
            <div className="mt-4 flex justify-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
