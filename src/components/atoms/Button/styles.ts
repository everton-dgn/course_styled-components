import styled, { css } from 'styled-components'
import T from 'theme'
import { ButtonProps } from './types'

const SizesBtn = {
  large: css`
    height: min-content;
    min-height: 45px;
    font-size: ${T.fonts.sizes.text2};
    padding: ${T.spacings.sm};
    font-weight: ${T.fonts.weights.medium};
    max-width: 224px;
  `,
  small: css`
    height: fit-content;
    font-size: ${T.fonts.sizes.text6};
    padding: ${T.spacings.xs} ${T.spacings.sm};
    font-weight: ${T.fonts.weights.medium};
    max-width: fit-content;
  `
}

const ColorsBtn = {
  primary: css`
    background-image: ${T.colors.backgroundHighlight};
    transition: all 0.2s linear;

    &:hover {
      background-image: ${T.colors.backgroundHighlightHover};
      box-shadow: 0 0 17px 2px #00e0ffc2;
    }
  `
}

export const Container = styled.button<ButtonProps>`
  ${({ fullWidth, color, size }) => css`
    cursor: pointer;
    border-radius: ${T.borderRadius.md};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: 100%;
    color: ${T.colors.white};
    ${!!color && ColorsBtn[color]};
    ${!!size && SizesBtn[size]}
    ${fullWidth &&
    css`
      max-width: 100%;
    `}

    ${T.breakpoints.tablet} {
      width: 100%;
    }

    &:disabled,
    &:disabled:hover {
      cursor: not-allowed;
      background: ${T.colors.lightGrey};
      box-shadow: none;
    }

    &:focus {
      box-shadow: 0 0 0 2px ${T.colors.focus};
    }

    &:active {
      box-shadow: none;
    }
  `}
`
