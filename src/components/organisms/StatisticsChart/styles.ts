import styled from 'styled-components'
import T from 'theme'

export const ContainerTooltip = styled.div`
  background: ${T.colors.backgroundCard};
  padding: ${T.spacings.xxs} ${T.spacings.xs};
  border-radius: ${T.borderRadius.sm};
  box-shadow: 0 4px 20px -2px rgba(11, 34, 102, 0.24);
`

export const TooltipItem = styled.li`
  color: ${T.colors.textPrimary};
  text-shadow: 0 0 3px ${T.colors.backgroundPage};

  &:first-child {
    text-align: center;
  }
`
