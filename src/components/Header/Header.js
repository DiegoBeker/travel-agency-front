import { HeaderContainer, Logo } from "./style";
import { ImAirplane } from "react-icons/im";

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <ImAirplane />
                <h1>Viagens Alucinantes</h1>
            </Logo>
        </HeaderContainer>
    );
};
