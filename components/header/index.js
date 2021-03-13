import { Box } from 'theme-ui'
import dynamic from 'next/dynamic'
const Canvas = dynamic(() => import('./canvas'), { ssr: false })

const Header = () => {
  return (
    <Box
      as="header"
      aria-label="One More Year"
      sx={{
        position: 'relative',
        bg: 'elevated',
        pb: '9vh',
        mb: '9vh',
        minHeight: ['75vh', '50vh'],
        'div, canvas': {
          minHeight: ['75vh', '50vh'],
          display: 'block',
        },
        '::after': {
          content: '""',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'block',
          position: 'absolute',
          height: '9vh',
          transform: 'translateY(9vh)',
          backgroundImage: t =>
            `linear-gradient(to bottom, ${t.colors.elevated}, ${t.colors.background})`,
        },
      }}
    >
      <Canvas />
    </Box>
  )
}

export default Header
