import { CityCard } from "./style";

export default function City({city,visitCity}) {
    return(
        <CityCard picture={city.picture} onClick={()=>visitCity(city.name,city.id)}>
            <h3>{city.name}</h3>
        </CityCard>
    );
};
