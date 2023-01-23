import Card from '@/components/Card';

const product = [
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '伺服器',
    description: '拉拉拉 測試文字',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '伺服器',
    description: '拉拉拉 測試文字',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '伺服器',
    description: '拉拉拉 測試文字',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '伺服器',
    description: '拉拉拉 測試文字',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '伺服器',
    description: '拉拉拉 測試文字',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '伺服器',
    description: '拉拉拉 測試文字',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '伺服器',
    description: '拉拉拉 測試文字',
    btn_url: '/server',
    btn_txt: '查看更多'
  },
  {
    img: 'https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960',
    title: '伺服器',
    description: '拉拉拉 測試文字',
    btn_url: '/server',
    btn_txt: '查看更多'
  }
];

const Server = () => {
  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
        {product.map((item, key) => (
          <Card key={ key } img={ item.img } title={ item.title } description={ item.description } btn_url={ item.btn_url} btn_txt={ item.btn_txt }></Card>
        ))}
      </div>
    </div>
  )
}

export default Server;
