import { Box } from 'theme-ui'
import dynamic from 'next/dynamic'
const Canvas = dynamic(() => import('./canvas'), { ssr: false })

function rn(from, to) {
  return ~~(Math.random() * (to - from + 1)) + from
}

function rs() {
  return arguments[rn(1, arguments.length) - 1]
}

function boxShadows(max) {
  let ret = []
  for (let i = 0; i < max; ++i) {
    ret.push(`
      ${rn(1, 100)}vw ${rn(1, 100)}vh ${rn(20, 40)}vmin ${rn(1, 20)}vmin
      ${rs('#11cbd7', '#c6f1e7', '#f0fff3', '#fa4659')}
    `)
  }
  return ret.join(',')
}

const Header = () => {
  return (
    <Box
      as="header"
      aria-label="One More Year"
      sx={{
        position: 'relative',
        bg: 'accent',
        pt: '9vh',
        pb: '7vh',
        mb: '9vh',
        overflow: 'hidden',
        minHeight: ['75vh', '50vh'],
        'div, canvas': {
          minHeight: 460,
          display: 'block',
        },
      }}
    >
      <svg width="0" height="0">
        <filter id="cloud-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.003"
            numOctaves="10"
            seed="135"
          />
          <feDisplacementMap in="SourceGraphic" scale="495" />
        </filter>
      </svg>
      <Box
        as="span"
        aria-hidden
        sx={{
          width: '75%',
          height: '75%',
          position: 'absolute',
          borderRadius: '50%',
          display: 'block',
          transform: 'translate(-40vw, -50vh)',
          filter: 'url(#cloud-filter)',
          boxShadow: t => `60vw 65vh 100px 18px ${t.colors.cloud}`,
        }}
      />
      <Canvas />
    </Box>
  )
}

export default Header
