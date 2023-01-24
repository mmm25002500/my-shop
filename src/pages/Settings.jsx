import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Settings = () => {

  const navigateTo = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <p className="text-3xl">設定頁面</p>
      <hr className='pb-3' />

      <div className="rounded-md pb-3">
        {/* <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white align-middle">{{ t('Settings.ChangeLog.title') }}: </label> */}
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white align-middle">更新日誌: </label>
        <button onClick={() => navigateTo('/changes')} type="button" className=" disabled:text-cyan-400 disabled:disabled:text-cyan-400 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white disabled:dark:bg-gray-200 disabled:bg-gray-200 rounded-l-md rounded-r-md border border-gray-200 hover:bg-gray-100  hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <FontAwesomeIcon icon="fa-solid fa-list" className='pl-1' />
          {/* {{ t('Settings.ChangeLog.title') }} */}
          更新日誌
        </button>
        {/* <p className="pl-7 text-sm text-gray-400">{{ t('Settings.ChangeLog.description')}}</p> */}
        <p className="pl-7 text-sm text-gray-400">你可以從這裡查看網站的更新日誌。</p>
      </div>

      <div className="rounded-md pb-3" role="group">
        {/* <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white align-middle">{{ t('Settings.Themes.title') }}: </label> */}
        <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white align-middle">主題: </label>
        <button onClick={() => setDarkMode(!darkMode)} disabled={darkMode} type="button" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 disabled:dark:bg-gray-800 disabled:bg-gray-800 dark:border-gray-600 disabled:text-cyan-400 disabled:disabled:text-cyan-400 dark:text-white  dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <FontAwesomeIcon icon="fa-solid fa-moon" className='pl-1' />
          {/* {{ t('Settings.Themes.dark') }} */}
          暗色模式
        </button>
        <button onClick={() => setDarkMode(!darkMode)} disabled={!darkMode} type="button" className=" disabled:text-cyan-400 disabled:disabled:text-cyan-400 inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white disabled:dark:bg-gray-200 disabled:bg-gray-200 rounded-r-md border border-gray-200 hover:bg-gray-100  hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
          <FontAwesomeIcon icon="fa-solid fa-sun" className='pl-1' />
          {/* {{ t('Settings.Themes.light') }} */}
          亮色模式
        </button>
        {/* <p className="pl-7 text-sm text-gray-400">{{ t('Settings.Themes.description')}}</p> */}
        <p className="pl-7 text-sm text-gray-400">你可以從這裡選擇你喜歡的語言來作為我的網站的語言。</p>
      </div>
    </div>
  )
}

export default Settings;
