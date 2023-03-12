import SelesPage from '../components/SelesPage';

const product = [
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '個人前端網頁製作',
    description: '支持 Vue, React',
    price: -1,
    btn_url: '/web',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '商業前端網站製作',
    description: '支持 Vue, React',
    price: -1,
    btn_url: '/web',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '網頁課業排解',
    description: '可以幫助你解決網頁課業上的問題',
    price: "10~2000",
    btn_url: '/web',
    btn_txt: '查看更多'
  }
];

const Web = () => {
  return (
    <SelesPage data={ product }></SelesPage>
  )
}

export default Web;
