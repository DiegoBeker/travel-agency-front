import { HotelCard } from "./style";

export default function Hotel({ id, hotel }) {
    return (
        <HotelCard>
            <img src={hotel.main_picture} alt="" />
            <span>{hotel.name}</span>
            <span>R$ {(hotel.price_per_day/100).toFixed(2)}</span>
        </HotelCard>
    );
};
