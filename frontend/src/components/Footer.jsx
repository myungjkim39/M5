import React from "react";

const footerLinks = [
  {
    title: "Computers & Tablets",
    items: [
      "PC Parts",
      "Printing & Office",
      "TG & AV",
      "Gaming",
      "Smart home & Security",
      "More",
      "Apple",
    ],
  },
  {
    title: "PC Peripherals & Accessories",
    items: [
      "Networking",
      "Phones & Accessories",
      "Headphones & Audio",
      "Camera & Drones",
      "Toys, Hobbies & STEM",
      "Gift Ideas",
    ],
  },
  {
    title: "About Us",
    items: [
      "Business",
      "Education",
      "Wholesale",
      "Government",
      "Health",
      "Stores",
      "Careers",
      "Contact Us",
      "News",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Help",
    items: [
      "Returns & Warranty",
      "Finance",
      "IT Services",
      "Home Services",
      "Repair Services",
      "Job Tracker",
      "Service Parts",
      "System Builder",
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex justify-evenly bg-PBGrey text-white mt-24 h-[60vh]">
      {footerLinks.map((section) => (
        <div key={section.title} className="flex-column mt-12 text-sm">
          <h3 className="p-2">{section.title}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item} className="p-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
