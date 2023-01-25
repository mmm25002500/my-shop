import SelesPage from '../components/SelesPage';

const product = [
  {
    img: '',
    title: '大學程式設計教學',
    description: '可以教導大學程式設計基礎，學習正確物件導向觀念，並且帶入實務開發經驗。',
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Linux 指令教學  ',
    description: '引導學生進入 Bash 的世界，撰寫第一個 Bash Script，理解基礎 Linux 指令。',
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: '前端三劍客網頁製作教學',
    description: '從零開始學習 HTML、CSS、JavaScript',
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: '前端框架網頁製作教學',
    description: '開始從 React、Vue 或 Angular 進入前端框架的世界',
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Python 基礎教學',
    description: '手把手從零開始接觸 Python 語言，體驗 Python 的魅力',
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Java 基礎教學',
    description: '從零開始了解 Java 語言，並且學習物件導向觀念',
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'C++ 基礎教學',
    description: '從零開始了解 C++ 語言，並且學習物件導向觀念',
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'JavaScript 基礎教學',
    description: '從零開始了解 JavaScript 語言，並且學習物件導向觀念',
    btn_url: '/tutor',
    btn_txt: '查看更多'
  }
];

const Tutor = () => {
  return (
    <SelesPage data={ product }></SelesPage>
  )
}

export default Tutor;
