import React from 'react'
import SidebarContainer from '../containers/SidebarContainer'
import EventsContainer from '../containers/EventsContainer'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`
const HomePage = () => {
  return (
    <MainContainer>
      <SidebarContainer />
      <EventsContainer />
    </MainContainer>
  )
}
export default HomePage
