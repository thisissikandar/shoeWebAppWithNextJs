import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];
const subMenuData = [
  { id: 1, name: "Jorden", doc_count: 11 },
  { id: 2, name: "Running Shoes", doc_count: 8 },
  { id: 3, name: "Sneakers", doc_count: 64 },
  { id: 4, name: "Football Shoes", doc_count: 107 },
];
const MenuMobile = ({ showCategoryMenu, setShowCatoryMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh - 50px)] bg-white border-t  text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item.subMenu ? (
              <li
               onClick={()=>setShowCatoryMenu(!showCategoryMenu)}
                className="cursor-pointer py-4 px-4 border-b flex flex-col"
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown />
                </div>

                {showCategoryMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData.map((item) => {
                      return (
                        <Link
                          key={item.id}
                          href="/"
                          onClick={() => {
                            setShowCatoryMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {item.name}
                            <span className="opacity-50 text-sm">78</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
