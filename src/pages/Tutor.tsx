import SelesPage from '../components/SelesPage';

const product = [
  {
    img: '',
    title: '大學程式設計教學',
    description: '可以教導大學程式設計基礎，學習正確物件導向觀念，並且帶入實務開發經驗。',
    price: "200~800",
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Linux 基礎指令教學',
    description: '引導學生進入 Bash 的世界，撰寫第一個 Bash Script，理解基礎 Linux 指令。',
    price: 400,
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: '前端三劍客網頁製作教學',
    description: '從零開始學習 HTML、CSS、JavaScript',
    price: "200~1500",
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: '前端框架網頁製作教學',
    description: '開始從 React、Vue 或 Angular 進入前端框架的世界',
    price: "500~1500",
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Python 基礎教學',
    description: '手把手從零開始接觸 Python 語言，體驗 Python 的魅力',
    price: 300,
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Java 基礎教學',
    description: '從零開始了解 Java 語言，並且學習物件導向觀念',
    price: 350,
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'C++ 基礎教學',
    description: '從零開始了解 C++ 語言，並且學習物件導向觀念',
    price: 300,
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'JavaScript 基礎教學',
    description: '從零開始了解 JavaScript 語言，並且學習物件導向觀念',
    price: 300,
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'C 語言基礎教學',
    description: '從零開始了解 C 語言，並且加深學習基礎知識',
    price: 350,
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: '大學作業指導',
    description: '教導大學生回家作業、功課',
    price: "100~1500",
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: '大學考試指導',
    description: '指導大學生的月考考試、平常考試',
    price: "500~4000",
    btn_url: '/tutor',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: '高中作業指導',
    description: '指導高中生課業、作業',
    price: "300~1500",
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
