import React from 'react'
import styled from 'styled-components'

const SidebarLogo = styled.h2`
  font-family: 'Architects Daughter', cursive;
  color: ${props => props.theme.primary};
  text-align: center;
  font-size: 4em;
`
const Logo = () => <SidebarLogo>Events</SidebarLogo>
export default Logo
