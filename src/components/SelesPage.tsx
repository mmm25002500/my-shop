import Card from '../components/Card';

interface Props {
  data: Array<{
    img: string;
    title: string;
    description: string;
    btn_url: string;
    btn_txt: string;
  }>;
}

const SelesPage = (props: Props) => {
  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center'>
        {props.data.map((item, key) => (
          <Card key={ key } img={ item.img } title={ item.title } description={ item.description } btn_url={ item.btn_url} btn_txt={ item.btn_txt }></Card>
        ))}
      </div>
    </div>
  )
}

export default SelesPage;
