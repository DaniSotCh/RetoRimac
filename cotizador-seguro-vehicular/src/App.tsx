import { PageHeader } from 'antd';
import React, { useState } from 'react';
import './App.scss';
import CarDetailsPage from './components/screens/CarDetailsPage';
import HomePage from './components/screens/HomePage';
import { PhoneFilled } from '@ant-design/icons';

function App() {
  const [currentPage,setCurrentPage]=useState(1);
  const returnHome = () => {
    setCurrentPage(1)
  }
  const nextPage = () => {
    setCurrentPage(2)
  }
  return (
    <div>
      <PageHeader
        className='page-header'
        ghost={false}
        extra={[
          <label>{'¿Tienes alguna duda?'}</label>,
          <PhoneFilled />,
          <a href="tel:(01)4116001">{'(01) 411 6001'}</a>
        ]}
        avatar={{
          className: 'ant-layout-header',
          src: 'https://www.rimac.com/content/dam/rimac/publica/rimac/menu/logo-red-rimac.svg'
        }}
      >
      </PageHeader>
      {currentPage === 1 && <HomePage nextPage={nextPage} />}
      {currentPage === 2 && <CarDetailsPage returnPage={returnHome} />}

    </div>
  );
}

export default App;
