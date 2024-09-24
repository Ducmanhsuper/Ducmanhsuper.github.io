import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../Navbar/Nav.scss";
import { useState } from 'react';
import MenuBars from '../MenuBars/MenuBars';
const Nav = () => {
    const [showComponent, SetShowComponents] = useState(false);

    return (
        <>


            <nav>
                <FontAwesomeIcon
                    icon={faBars}
                    className='faBarsIcon'
                    onClick={e => {
                        SetShowComponents(!showComponent);
                    }} />
                <p>Đức Mạnh</p>
            </nav >



            {
                showComponent && <MenuBars />

            }


        </>
    )

}


export default Nav;
