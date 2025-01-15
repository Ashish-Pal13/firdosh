"use client";
import { useRouter, usePathname } from 'next/navigation'; 
import { List } from "phosphor-react";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [selected, setSelected] = useState("ABOUT");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false); 
  const router = useRouter(); 
  const pathname = usePathname();

  const menuItems = [
    { name: "ABOUT", path: "/screen/about" },
    { name: "GALLERIES", path: "/screen/galleries" },
    { name: "SHOP", path: "/screen/shop" },
    { name: "CONTACT", path: "/screen/contact" },
    { name: "BLOG", path: "/screen/blog" },
  ];

  // Synchronize selected state with the current path
  useEffect(() => {
    const currentItem = menuItems.find(item => item.path === pathname);
    if (currentItem) {
      setSelected(currentItem.name);
    }
  }, [pathname]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      toggleRef.current &&
      !toggleRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (item: { name: string; path: string }) => {
    setSelected(item.name);
    if (isClient) router.push(item.path);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className="flex justify-center w-full items-center navbar"
        style={{ position: "fixed", top: 0, zIndex: 10, margin: 0 }}
      >
        <div className="bg-[#DBD5C2] text-[#493616] flex rounded-full mt-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleMenuClick(item)}
              className={`px-6 py-4 cursor-pointer ${
                selected === item.name ? "text-black" : "text-[#d1a75e]"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-end navbar_for_phone">
        <div className="relative top-2 left-2" ref={toggleRef}>
          <div className="flex w-fit fixed z-[10000]" onClick={handleToggle}>
            <List size={32} color="#8c6a3a" />
          </div>
          {isOpen && (
            <div
              ref={dropdownRef}
              className="fixed top-[40px] left-2 w-fit bg-[#F3EFDF] text-[#DBD5C2] shadow-md z-[9999] rounded-b-[20px]"
            >
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleMenuClick(item);
                    setIsOpen(false);
                  }}
                  className={`px-3 py-4 cursor-pointer ${
                    selected === item.name
                      ? "text-black"
                      : "text-[#ddc59d]"
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}


