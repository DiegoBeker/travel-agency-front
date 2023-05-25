import dayjs from "dayjs";
import { FlightCard } from "./style";

export default function Flight({flight}) {
    const date = dayjs(flight.departure_time).format("DD/MM/YYYY");
    const time = dayjs(flight.departure_time).format("HH:mm");

    return(
        <FlightCard>
            <span>{date}</span>
            <span>{time}</span>
            <span>R$ {flight.price/100}</span>
            <span>{flight.from_city}</span>
        </FlightCard>
    );
};
