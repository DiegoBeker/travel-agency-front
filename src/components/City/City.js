import { CityCard } from "./style";

export default function City({ name, picture }) {
    return(
        <CityCard picture={picture}>
            <h3>{name}</h3>
        </CityCard>
    );
};
