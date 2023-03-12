import SelesPage from '../components/SelesPage';

const product = [
  {
    img: '',
    title: 'Apache 伺服器架設(需自備主機)',
    description: 'Apache 網頁伺服器遠端架設',
    price: -1,
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Nginx 伺服器架設(需自備主機)',
    description: 'Nginx 網頁伺服器遠端架設',
    price: -1,
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Minecraft 伺服器架設(需自備主機)',
    description: 'Minecraft 伺服器遠端架設',
    price: -1,
    btn_url: '/server',
    btn_txt: '查看更多'
  }
];

const Server = () => {
  return (
    <SelesPage data={ product }></SelesPage>
  )
}

export default Server;
