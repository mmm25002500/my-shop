import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <div className="pt-2">
        <p className="text-3xl text-center">找不到頁面</p>
        <p className="text-3xl text-center">404 Not Found</p>
        <div className="text-3xl text-center text-cyan-500 underline underline-offset-4" >
          <Link to="/">回到首頁</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
