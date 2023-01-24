import SelesPage from '../components/SelesPage';

const product = [
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: 'Apache 伺服器架設(自備)',
    description: 'Apache 網頁伺服器遠端架設',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: 'Nginx 伺服器架設(自備)',
    description: 'Nginx 網頁伺服器遠端架設',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: 'Minecraft 伺服器架設(自備)',
    description: 'Minecraft 伺服器遠端架設',
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
