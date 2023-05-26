import dayjs from "dayjs";
import { FlightCard } from "./style";

export default function Flight({flight, viewDetails}) {
    const date = dayjs(flight.departure_time).format("DD/MM/YYYY");
    const time = dayjs(flight.departure_time).format("HH:mm");

    return(
        <FlightCard onClick={() => viewDetails(flight.id)}>
            <span>{date}</span>
            <span>{time}</span>
            <span>R$ {(flight.price/100).toFixed(2)}</span>
            <span>De: {flight.from_city}</span>
        </FlightCard>
    );
};
