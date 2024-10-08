import styled, { css } from 'styled-components'
import T from 'theme'

export const Container = styled.section<{
  overflowHidden?: boolean
  positionRelative?: boolean
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${T.borderRadius.lg};
  box-shadow: 0 4px 15px -4px ${T.colors.shadow};
  background: ${T.colors.backgroundCard};
  padding: ${T.grid.paddingPhone};
  ${({ overflowHidden, positionRelative }) => css`
    overflow: ${overflowHidden ? 'hidden' : 'visible'};
    position: ${positionRelative ? 'relative' : 'inherit'};
  `}

  ${T.breakpoints.tablet} {
    padding: ${T.grid.paddingTablet};
  }

  ${T.breakpoints.desktop} {
    padding: ${T.grid.paddingDesktop};
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  min-height: 2.4rem;
  height: fit-content;
  margin-bottom: ${T.grid.gutterTablet};

  & > div {
    margin-right: -6px;
  }

  ${T.breakpoints.tablet} {
    margin-bottom: ${T.grid.gutterTablet};

    & > div {
      margin-right: -10px;
    }
  }

  ${T.breakpoints.desktop} {
    margin-bottom: ${T.grid.gutterDesktop};
  }
`
