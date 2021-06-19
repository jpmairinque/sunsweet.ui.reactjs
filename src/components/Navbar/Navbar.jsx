import React from 'react'
import {Userbox, NavList, NavItem, NavContainer,LogoutButton} from './styles'

const Navbar = () => {
    return (
            <>
            <NavContainer>
            <Userbox>
                <h1>Karla Vaz</h1>
                <p>@thekarlavaz</p>
            </Userbox>

            <NavList>
                <ul>
                    <NavItem  selectedIs={true}>Profile</NavItem>
                    <NavItem selectedIs={false}>Themes</NavItem>
                    <NavItem selectedIs={false}>Privacy</NavItem>
                    <NavItem selectedIs={false}>Acessibility</NavItem>
                    <NavItem selectedIs={false}>History</NavItem>
                </ul>
            </NavList>

            <LogoutButton>LOG OUT</LogoutButton>

            </NavContainer>
            </>
            
    
    )
}

export default Navbar