import SelesPage from '../components/SelesPage';

const product = [
  {
    img: '',
    title: 'Discord Bot 機器人製作',
    description: '製作 Discord Bot 機器人',
    price: 0,
    btn_url: '/bot',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Line Bot 機器人製作',
    description: '製作 Line Bot 機器人',
    price: 0,
    btn_url: '/bot',
    btn_txt: '查看更多'
  },
  {
    img: '',
    title: 'Telegram Bot 機器人製作',
    description: '製作 Telegram Bot 機器人',
    price: 0,
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
