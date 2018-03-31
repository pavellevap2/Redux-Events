import React from 'react'
import SidebarContainer from '../containers/SidebarContainer'
import EventsContainer from '../containers/EventsContainer'
import styled, { ThemeProvider } from 'styled-components'
import { MAIN_THEME, SECONDARY_THEME } from '../theme'

const RootContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`
const Root = ({ themeName }) => {
  return (
    <ThemeProvider
      theme={String(themeName) === 'secondary' ? SECONDARY_THEME : MAIN_THEME}
    >
      <RootContainer>
        <SidebarContainer />
        <EventsContainer />
      </RootContainer>
    </ThemeProvider>
  )
}
export default Root
