import { useColorMode, Box, IconButton } from 'theme-ui'
import { Moon } from 'react-bootstrap-icons'

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none',
      },
      ...sx,
    }}
  />
)

export const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode()
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Invert color scheme"
    >
      <Moon size={24} />
    </NavButton>
  )
}

const Nav = () => {
  const [mode] = useColorMode()
  return (
    <Box
      sx={{
        p: 3,
        top: 0,
        right: 0,
        position: 'absolute',
        zIndex: 2,
      }}
    >
      <ColorSwitcher />
    </Box>
  )
}

export default Nav
