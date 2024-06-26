//@ts-nocheck
"use client";
import MenuIcon from "@/components/Utility/icons/MenuIcon";
import CustomButton from "@/components/elements/CustomButton";
import { Menus } from "@/components/lib/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [showBorderShadow, setShowBorderShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBorderShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${showBorderShadow ? "shadow-md" : ""}`}>
      <div className="container">
        <nav className="relative  py-4 flex  gap-4 justify-between items-center bg-white">
          {/* Logo component */}
          <Logo />

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-blue-600 p-3"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </button>
          </div>

          <ul
            className={`hidden lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6 ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            {Menus.map((data: any, index: number) => {
              const isActive = pathname === data.link;

              return (
                <div key={index} className="">
                  <MenuItem title={data.title} link={data.link} />
                  <div className=" flex justify-center">
                    <div
                      className={`w-1 rounded-full h-1 ${
                        isActive ? "gradiant-dot" : "bg-white"
                      }`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </ul>

          <div className=" max-w-[181px] hidden xl:inline-block lg:ml-auto ">
            <CustomButton isContact>Contact Us</CustomButton>
          </div>

          {/* w-5/6 */}
          <div
            className={`navbar-menu fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-sm  text-center py-6 px-4 md:px-6 bg-white border-r overflow-y-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {/* Close button */}
            <div className="flex items-center justify-between mb-8">
              <div className="">
                <Logo/>
              </div>
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Mobile menu items */}
            <ul>
              {Menus.map((data: any, index: number) => {
                return (
                  <div key={index} className="mb-4">
                    <MenuItem title={data.title} link={data.link} />
                  </div>
                );
              })}
            </ul>

            {/* Sign in and Sign up buttons */}
            {/* <div className="mt-auto">
              <CustomButton>Contact Us</CustomButton>
            </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

// Subcomponents

const Logo = () => (
  <Link className="text-3xl font-bold leading-none" href="/">
    <svg
      width="197"
      height="30"
      viewBox="0 0 197 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.12 3.728V29H15.964V18.596H6.388V29H0.232V3.728H6.388V13.628H15.964V3.728H22.12ZM29.66 6.824C28.58 6.824 27.692 6.512 26.996 5.888C26.324 5.24 25.988 4.448 25.988 3.512C25.988 2.552 26.324 1.76 26.996 1.136C27.692 0.487998 28.58 0.163998 29.66 0.163998C30.716 0.163998 31.58 0.487998 32.252 1.136C32.948 1.76 33.296 2.552 33.296 3.512C33.296 4.448 32.948 5.24 32.252 5.888C31.58 6.512 30.716 6.824 29.66 6.824ZM32.72 8.912V29H26.564V8.912H32.72ZM43.3372 12.26C44.0572 11.156 44.9572 10.292 46.0372 9.668C47.1172 9.02 48.3172 8.696 49.6372 8.696V15.212H47.9452C46.4092 15.212 45.2572 15.548 44.4892 16.22C43.7212 16.868 43.3372 18.02 43.3372 19.676V29H37.1812V8.912H43.3372V12.26ZM58.7357 12.26C59.4557 11.156 60.3557 10.292 61.4357 9.668C62.5157 9.02 63.7157 8.696 65.0357 8.696V15.212H63.3437C61.8077 15.212 60.6557 15.548 59.8877 16.22C59.1197 16.868 58.7357 18.02 58.7357 19.676V29H52.5797V8.912H58.7357V12.26ZM86.9141 18.632C86.9141 19.208 86.8781 19.808 86.8061 20.432H72.8741C72.9701 21.68 73.3661 22.64 74.0621 23.312C74.7821 23.96 75.6581 24.284 76.6901 24.284C78.2261 24.284 79.2941 23.636 79.8941 22.34H86.4461C86.1101 23.66 85.4981 24.848 84.6101 25.904C83.7461 26.96 82.6541 27.788 81.3341 28.388C80.0141 28.988 78.5381 29.288 76.9061 29.288C74.9381 29.288 73.1861 28.868 71.6501 28.028C70.1141 27.188 68.9141 25.988 68.0501 24.428C67.1861 22.868 66.7541 21.044 66.7541 18.956C66.7541 16.868 67.1741 15.044 68.0141 13.484C68.8781 11.924 70.0781 10.724 71.6141 9.884C73.1501 9.044 74.9141 8.624 76.9061 8.624C78.8501 8.624 80.5781 9.032 82.0901 9.848C83.6021 10.664 84.7781 11.828 85.6181 13.34C86.4821 14.852 86.9141 16.616 86.9141 18.632ZM80.6141 17.012C80.6141 15.956 80.2541 15.116 79.5341 14.492C78.8141 13.868 77.9141 13.556 76.8341 13.556C75.8021 13.556 74.9261 13.856 74.2061 14.456C73.5101 15.056 73.0781 15.908 72.9101 17.012H80.6141ZM109.098 18.632C109.098 19.208 109.062 19.808 108.99 20.432H95.0577C95.1537 21.68 95.5497 22.64 96.2457 23.312C96.9657 23.96 97.8417 24.284 98.8737 24.284C100.41 24.284 101.478 23.636 102.078 22.34H108.63C108.294 23.66 107.682 24.848 106.794 25.904C105.93 26.96 104.838 27.788 103.518 28.388C102.198 28.988 100.722 29.288 99.0897 29.288C97.1217 29.288 95.3697 28.868 93.8337 28.028C92.2977 27.188 91.0977 25.988 90.2337 24.428C89.3697 22.868 88.9377 21.044 88.9377 18.956C88.9377 16.868 89.3577 15.044 90.1977 13.484C91.0617 11.924 92.2617 10.724 93.7977 9.884C95.3337 9.044 97.0977 8.624 99.0897 8.624C101.034 8.624 102.762 9.032 104.274 9.848C105.786 10.664 106.962 11.828 107.802 13.34C108.666 14.852 109.098 16.616 109.098 18.632ZM102.798 17.012C102.798 15.956 102.438 15.116 101.718 14.492C100.998 13.868 100.098 13.556 99.0177 13.556C97.9857 13.556 97.1097 13.856 96.3897 14.456C95.6937 15.056 95.2617 15.908 95.0937 17.012H102.798ZM129.697 3.872V7.94H123.001V29H117.961V7.94H111.265V3.872H129.697ZM151.915 18.596C151.915 19.316 151.867 19.964 151.771 20.54H137.191C137.311 21.98 137.815 23.108 138.703 23.924C139.591 24.74 140.683 25.148 141.979 25.148C143.851 25.148 145.183 24.344 145.975 22.736H151.411C150.835 24.656 149.731 26.24 148.099 27.488C146.467 28.712 144.463 29.324 142.087 29.324C140.167 29.324 138.439 28.904 136.903 28.064C135.391 27.2 134.203 25.988 133.339 24.428C132.499 22.868 132.079 21.068 132.079 19.028C132.079 16.964 132.499 15.152 133.339 13.592C134.179 12.032 135.355 10.832 136.867 9.992C138.379 9.152 140.119 8.732 142.087 8.732C143.983 8.732 145.675 9.14 147.163 9.956C148.675 10.772 149.839 11.936 150.655 13.448C151.495 14.936 151.915 16.652 151.915 18.596ZM146.695 17.156C146.671 15.86 146.203 14.828 145.291 14.06C144.379 13.268 143.263 12.872 141.943 12.872C140.695 12.872 139.639 13.256 138.775 14.024C137.935 14.768 137.419 15.812 137.227 17.156H146.695ZM154.297 19.028C154.297 16.964 154.717 15.164 155.557 13.628C156.397 12.068 157.561 10.868 159.049 10.028C160.537 9.164 162.241 8.732 164.161 8.732C166.633 8.732 168.673 9.356 170.281 10.604C171.913 11.828 173.005 13.556 173.557 15.788H168.121C167.833 14.924 167.341 14.252 166.645 13.772C165.973 13.268 165.133 13.016 164.125 13.016C162.685 13.016 161.545 13.544 160.705 14.6C159.865 15.632 159.445 17.108 159.445 19.028C159.445 20.924 159.865 22.4 160.705 23.456C161.545 24.488 162.685 25.004 164.125 25.004C166.165 25.004 167.497 24.092 168.121 22.268H173.557C173.005 24.428 171.913 26.144 170.281 27.416C168.649 28.688 166.609 29.324 164.161 29.324C162.241 29.324 160.537 28.904 159.049 28.064C157.561 27.2 156.397 26 155.557 24.464C154.717 22.904 154.297 21.092 154.297 19.028ZM188.482 8.768C189.994 8.768 191.338 9.104 192.514 9.776C193.69 10.424 194.602 11.396 195.25 12.692C195.922 13.964 196.258 15.5 196.258 17.3V29H191.218V17.984C191.218 16.4 190.822 15.188 190.03 14.348C189.238 13.484 188.158 13.052 186.79 13.052C185.398 13.052 184.294 13.484 183.478 14.348C182.686 15.188 182.29 16.4 182.29 17.984V29H177.25V2.36H182.29V11.54C182.938 10.676 183.802 10.004 184.882 9.524C185.962 9.02 187.162 8.768 188.482 8.768Z"
        fill="url(#paint0_linear_17_685)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_17_685"
          x1="-2"
          y1="-11"
          x2="39.1156"
          y2="101.763"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1AD9DF" />
          <stop offset="1" stop-color="#A824FE" />
        </linearGradient>
      </defs>
    </svg>
  </Link>
);

const MenuItem = ({ title, link, setIsHovered, isHovered }: any) => {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <>
      <li>
        <Link
          className={`md:mx-4 mx-0 text-xl md:text-lg font-normal text-black hover:text-gray-500 ${
            isActive ? "leverage-expertise" : ""
          } `}
          href={`${link}`}
        >
          {title}
        </Link>
      </li>
    </>
  );
};

export default Header;
