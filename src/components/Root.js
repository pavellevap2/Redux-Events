import React from 'react'
import SidebarContainer from '../containers/SidebarContainer'
import EventsContainer from '../containers/EventsContainer'
import styled, { ThemeProvider } from 'styled-components'
import themes from '../themes'

const RootContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`
const Root = ({ themeName }) => {
  return (
    <ThemeProvider
      theme={
        String(themeName) === 'secondary'
          ? themes.SECONDARY_THEME
          : themes.MAIN_THEME
      }
    >
      <RootContainer>
        <SidebarContainer />
        <EventsContainer />
      </RootContainer>
    </ThemeProvider>
  )
}
export default Root
