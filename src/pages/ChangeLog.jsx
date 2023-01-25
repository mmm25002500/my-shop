import { useRef, useEffect, useState } from "react";
import { TweenLite, CSSPlugin } from "gsap";
import log from '@/config/changeLog.json';

const ChangeLog = () => {

  const title = useRef([]);
  const content = useRef([]);
  const [contentLength, setContentLength] = useState(0);

  useEffect(() => {
    title.current = title.current.slice(0, log.length);
    title.current.forEach((el, index) => {
      TweenLite.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.2,
      });
    });
  }, [log.length]);

  useEffect(() => {
    setContentLength(contentLength + 1);
  }, [log]);

  useEffect(() => {
    content.current = content.current.slice(0, 999);
    content.current.forEach((el, index) => {
      TweenLite.to(el, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        delay: index * 0.2,
      });
  });
  }, []);

  const animate = (key, el) => {
    TweenLite.to(el, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1,
      delay: key*0.2,
    })
  }

return (
<div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
  <h1 className="text-3xl pb-2">更新日誌</h1>
  <hr className='pb-3' />
    {log.map((item, key) => (
      <ul key={`ul-${key}`} ref={el => title.current[key] = el} className="list-disc list-inside pb-5" style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <a id={'v' + item.version} className="text-2xl">
          v{item.version} <span className="text-xs align-top">{item.date}</span>
        </a>
        {
          item.content.map((item2, key2) => (
            <li ref={el => animate(key2, el)} style={{ opacity: 0, transform: 'translate(100px, 30px)' }} key={`li-${key}-${key2}`} >
              {item2}
            </li>
          ))
        }
        </ul>
    ))}
      </div>
    )
      }

export default ChangeLog;
