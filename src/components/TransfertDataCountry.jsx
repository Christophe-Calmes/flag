import  PropTypes  from 'prop-types';


export const TransfertDataCountry = ({countryData}) => {
    

  return (
    <div>
        <p>Coucou</p>
        <ul>
            {countryData.map((element) => {
                console.log(`element${element.flags.png}`);
               return (
               <li key={element}> {element.name.common} </li>
               <li><img key={element} src={element.flags.png} alt={element.name.common}/></li>
               ) 
              
            })}
        </ul>
    </div>
  )
}
TransfertDataCountry .propTypes = {
    countryData: PropTypes.array.isRequired
    
  }
export default TransfertDataCountry
