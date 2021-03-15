import {
  useColorMode,
  Avatar,
  Box,
  Container,
  IconButton,
  Flex,
  NavLink,
} from 'theme-ui'
import Link from 'next/link'
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

const ColorSwitcher = props => {
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
      as="nav"
      colorMode={mode}
      sx={{
        py: 3,
        top: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        zIndex: 2,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontFamily: 'heading',
          a: {
            fontSize: 1,
            fontWeight: 'body',
            color: 'inherit',
            textDecoration: 'none',
            mr: [3, 4],
            ':focus,:hover': { color: 'accent' },
          },
        }}
      >
        <Link href="/" passHref>
          <Flex
            as="a"
            sx={{
              alignItems: 'center',
              mr: 'auto !important',
              lineHeight: 'title',
              ':hover img,:focus img': {
                boxShadow: '0 0 0 2px',
              },
            }}
          >
            <Avatar
              size={36}
              src="https://github.com/lachlanjc.png"
              alt="Avatar"
              sx={{ mr: 2, transition: 'box-shadow .125s ease-in-out' }}
            />
            <NavLink
              as="span"
              sx={{ color: 'inherit !important', textTransform: 'uppercase' }}
            >
              One More Year
            </NavLink>
          </Flex>
        </Link>
        <Link href="/activity" passHref>
          <NavLink as="a">Activity</NavLink>
        </Link>
        <Link href="/music" passHref>
          <NavLink as="a">Music</NavLink>
        </Link>
        <ColorSwitcher />
      </Container>
    </Box>
  )
}

export default Nav
