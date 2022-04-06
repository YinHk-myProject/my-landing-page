import React, { Fragment, useState, useEffect } from "react";

import NavBar from '../components/NavBar';
import HeadSection from './HeadSection';
import ContentSection from './ContentSection';
import FooterSection from '../components/FooterSection'; 

const CurrencyConverterPage = props => {
    const [data, setData] = useState(null);

    const updataData = valObj => {
      setData(valObj);
    }

    return (
      <Fragment>
        <NavBar />
        <HeadSection updataData={updataData}/>
        <ContentSection data={data}/>
        <FooterSection />
      </Fragment>
    );
};

export default CurrencyConverterPage;

