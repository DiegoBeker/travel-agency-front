import { HotelCard } from "./style";

export default function Hotel({ hotel, openDetails }) {


    return (
        <HotelCard onClick={() => openDetails(hotel.id)}>
            <img src={hotel.main_picture} alt="" />
            <span>{hotel.name}</span>
            <span>R$ {(hotel.price_per_day / 100).toFixed(2)}</span>
        </HotelCard>
    );
};
