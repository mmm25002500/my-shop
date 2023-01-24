import { useState } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navbarData = [
  { name: "主頁", path: "/" },
  { name: "網頁", path: "/web" },
  { name: "教學", path: "/tutor" },
  { name: "機器人", path: "/bot" },
  { name: "伺服器", path: "/server" },
  { name: "設定", path: "/settings" },
  { name: "個人網站", path: "https://tershi.com" },
  { name: "部落格", path: "https://blog.tershi.com" },
  { name: "履歷表", path: "https://resume.tershi.com"}
];

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
            <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">夏特稀的科技小窩</h1>

        </Link>
        <button onClick={ () => setNavbarOpen(!navbarOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className={ "w-full md:block md:w-auto " + (navbarOpen? '' : 'hidden') } id="navbar-default">
          <ul className="flex flex-col mt-4 border border-cyan-300 rounded-lg bg-gray-50 md:flex-row md: md:mt-0 md:text-sm md:font-medium md:border-1 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-cyan-300">
            {navbarData.map((item, key) => (
            <li className='py-1 sm:py-0' key={key}>
              {
                item.path.includes('http') ?
                  <a href={item.path} target="_blank">
                    <button className='w-full text-gray-900 bg-white border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                      {item.name}
                      <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" className='pl-1 pb-1 w-2' />
                    </button>
                  </a>
                  :
                  <NavLink onClick={() => setNavbarOpen(!navbarOpen)} className={({ isActive }) => (isActive ? " text-red-500" : "text-gray-900")} to={item.path}>
                    <button className="w-full bg-white border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                      {item.name}
                    </button>
                  </NavLink>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
