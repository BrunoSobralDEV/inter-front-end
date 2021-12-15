import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

import logoInter from '../../assets/images/Inter-orange.png';

import UserCircle from "../UserCircle";

import { useNavigate, Link } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogoff = () =>{
        navigate('/')
    }

    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter" />
                <UserInfo>
                    <UserCircle initials="BS"/>
                    <div>
                        <p>Olá. <span className="primary-color font-bold">Bruno Sobral</span></p>
                        <strong>22201651-10</strong><br />
                        <a href="" onClick={handleLogoff}>Logout</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header