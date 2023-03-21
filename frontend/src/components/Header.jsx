import Logo from "../images/logo.jpg";

const Departments = [
  "PB Tech",
  "Hardwired",
  "PB Business",
  "PB Education",
  "PB Wholesale",
  "PB Government",
  "PB Health",
  "PB LoT",
];

const menuLists = [
  "Departments",
  "Brands",
  "Services",
  "Promotions",
  "Hot Deals",
  "New Arrivals",
  "Tax Free Shopping",
  "BYOD",
];

export default function Header() {
  return (
    <div className="bg-primary text-white">
      <ul className="flex justify-center items-center text-xs space-x-5">
        {Departments.map((item) => (
          <li key={item} className="p-4">
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-row ml-16 ">
        <img src={Logo} />

        <div className="flex items-center ml-10">
          <input
            text="text"
            placeholder="search"
            className="p-2 h-47px w-[40vw] text-black"
          />

          <svg
            className="w-10 ml-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <p className="ml-1">Account</p>
          <svg
            className="w-10 inline-block ml-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <p className="ml-1">Wish List</p>

          <svg
            className="w-10 ml-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>

      <ul className="flex justify-center space-x-4 text-lg">
        {menuLists.map((item, index) => (
          <li key={index} className="p-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
