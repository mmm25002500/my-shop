interface Props {
  img: string;
  title: string;
  description: string;
  price: number | string;
  btn_url: string;
  btn_txt: string;
}

const Card = (props: Props) => {
  return (
    <div className="w-full relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      { !props.img ? null :
        <a href="#">
          <div className="h-[200px]">
          <img className="rounded-t-lg w-full h-full bg-cover bg-repeat bg-center" style={{ backgroundImage: "url('" + props.img + "')" }} alt="" />
          </div>
        </a>
        }
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ props.title }</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>

        <div className="h-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="absolute bottom-2">
              <a href={ props.btn_url } className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                { props.btn_txt }
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
            <div className="grid justify-self-end absolute bottom-4">
              <p className="text-lg text-cyan-600 dark:text-cyan-300">價格: {props.price} TWD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
