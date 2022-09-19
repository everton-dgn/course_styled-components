import artificialIntelligence from 'assets/images/artificialIntelligence.webp'
import * as C from 'components'
import { LIST_MENU_DATA } from 'fakeApi'
import { useRenderingByWindowSize, useTheme } from 'hooks'
import T from 'theme'
import * as S from './styles'
import { VerticalMenuProps } from './types'

const VerticalMenu = ({
  isOpenMenu,
  onOpenMenu,
  startAnimation
}: VerticalMenuProps) => {
  const { setTheme, isDarkMode } = useTheme()
  const { windowSize } = useRenderingByWindowSize()

  return (
    <S.Container
      isOpenMenu={startAnimation}
      aria-hidden={!isOpenMenu}
      onClick={e => e.stopPropagation()}
    >
      <S.Content>
        {windowSize.lg && <C.Logo size="medium" />}

        <C.MenuList onOpenMenu={onOpenMenu} dataListMenu={LIST_MENU_DATA} />
      </S.Content>

      <S.WrapperHelp aria-hidden={!isOpenMenu}>
        <S.WrapperTextHelp>
          <C.Typography
            text="Need Help?"
            type="text1"
            as="h2"
            align="center"
            weight={500}
          />
          <C.Typography
            text="Virtual Assistant Will Help You"
            type="text5"
            as="p"
            align="center"
            weight={400}
            color={T.colors.grey}
          />
        </S.WrapperTextHelp>
        <S.ImageBegin
          width={232}
          height={240}
          src={artificialIntelligence}
          alt="Begin"
        />
      </S.WrapperHelp>

      <S.WrapperTextFooter>
        <S.WrapperSwitch>
          <C.Switch
            id="changeTheme"
            initialValue={isDarkMode}
            onClick={setTheme}
            ariaLabel={`Switch to ${isDarkMode ? 'light' : 'dark'}`}
          />
          <C.Typography
            text={`Switch to ${isDarkMode ? 'light' : 'dark'}`}
            type="text6"
            as="p"
            color={T.colors.grey}
          />
        </S.WrapperSwitch>

        <C.Typography
          text="© NFT System 2022"
          type="text6"
          as="p"
          color={T.colors.grey}
        />
      </S.WrapperTextFooter>
    </S.Container>
  )
}

export default VerticalMenu
