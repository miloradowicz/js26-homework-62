import notFound from '../../assets/images/page-not-found.svg';

const NotFound = () => {
  return (
    <div className='row'>
      <div className='col-2'>
        <img src={notFound} alt='404' className='col-12' />
      </div>
      <div className='col-10'>
        <h2>Нет такой страницы</h2>
        <p>Попробуйте вернуться назад, или воспользуйтесь ссылками на панели навигации</p>
      </div>
    </div>
  );
};

export default NotFound;
