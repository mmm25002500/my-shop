import log from '@/config/changeLog.json'

const ChangeLog = () => {
  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <p className="text-3xl">更新日誌</p>
      <hr className='pb-3'/>
        {
          log.map((item, key) => (
              <ul className="list-disc list-inside pb-5">
            <a id={`v`+item.version} className="text-2xl">
              v{ item.version } <span className="text-xs align-top">{ item.date }</span>
              </a>
              {
                item.content.map((item2, key2) => (
                  <li>
                    {item2}
                  </li>
                ))
              }
            </ul>
          ))
        }
    </div>
  )
}

export default ChangeLog;
