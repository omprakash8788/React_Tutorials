

const CityItem = ({ name, country_code, population, id }) => {
    return (
      <div style={{display:"flex", flexDirection:'column', alignItems:'center', border:'1px solid black', padding:"10px", margin:"10px"}}>
        <p>ID: {id}</p>
        <p>NAME: {name}</p>
        <p>COUNTRY: {country_code}</p>
        <p>POPULATION: {population}</p>
      </div>
    );
  };

  export default CityItem