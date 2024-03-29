import Image from 'next/image'
import { Box, IconButton } from 'theme-ui'
import { PlayCircle } from 'react-bootstrap-icons'

const PlayButton = props => (
  <IconButton
    sx={{
      color: 'white',
      position: 'absolute',
      top: '25%',
      left: '25%',
      transform: 'scale(0)',
      transition: 'transform 0.125s ease-in-out',
    }}
    {...props}
  >
    <PlayCircle size={24} />
  </IconButton>
)

const Artwork = ({ src, alt, size = 64, sx }) => (
  <Box
    sx={{
      cursor: 'pointer',
      position: 'relative',
      lineHeight: 0,
      borderRadius: size < 100 ? 'small' : 'default',
      overflow: 'hidden',
      ...sx,
    }}
  >
    <Image
      src={src}
      loading="lazy"
      width={size}
      height={size}
      alt={`${alt} artwork`}
      unoptimized
    />
    <PlayButton />
  </Box>
)

export default Artwork
