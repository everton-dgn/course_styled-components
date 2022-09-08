import styled from 'styled-components'
import T from 'theme'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 35rem;
  grid-auto-rows: max-content;
  column-gap: ${T.spacings.lg};
  width: 100%;
`

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${T.grid.gutterDesktop};
  width: 100%;
`

export const WrapperCharts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${T.grid.gutterDesktop};
  height: 25.1rem;
`

export const SecondaryLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${T.grid.gutterDesktop};
  width: 100%;
`
