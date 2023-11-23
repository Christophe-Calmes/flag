import { useState, useEffect } from 'react'
import { TransfertDataCountry } from './TransfertDataCountry';
import  PropTypes  from 'prop-types';

export const GetCountry = () => {
    const [countryData, setCountryData] = useState([])
    const fetchDataCountry = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (response.status === 200) {
          const data = await response.json();
          setCountryData(data);
        }
      };
      //
      useEffect(() => {
        fetchDataCountry();
      },[])
     // console.log(countryData);

  return (
    <div><TransfertDataCountry countryData={countryData} /></div>
  )
}
GetCountry.propTypes = {
  countryData: PropTypes.array.isRequired
  
}
export default GetCountry