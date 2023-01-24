import SelesPage from '../components/SelesPage';

const product = [
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: 'Discord Bot 機器人製作',
    description: '製作 Discord Bot 機器人',
    btn_url: '/bot',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: 'Line Bot 機器人製作',
    description: '製作 Line Bot 機器人',
    btn_url: '/bot',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: 'Telegram Bot 機器人製作',
    description: '製作 Telegram Bot 機器人',
    btn_url: '/bot',
    btn_txt: '查看更多'
  }
];

const Bot = () => {
  return (
    <SelesPage data={ product }></SelesPage>
  )
}

export default Bot;
