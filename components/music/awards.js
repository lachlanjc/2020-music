import { Grid, Box, IconButton, Text } from 'theme-ui'
import Artwork from './artwork'
import Image from 'next/image'
import { PlayCircle } from 'react-bootstrap-icons'

const Label = props => (
  <Text
    as="strong"
    sx={{
      color: 'muted',
      fontSize: [1, 2],
      letterSpacing: 'headline',
      fontFamily: 'heading',
      textTransform: 'uppercase',
    }}
    {...props}
  />
)

const Name = ({ fontSize, ...props }) => (
  <Text
    as="strong"
    sx={{
      fontSize: [3, 4, 5],
      display: 'block',
      lineHeight: 'heading',
      my: 1,
    }}
    {...props}
  />
)

export const Comment = props => (
  <Text
    as="p"
    sx={{
      color: 'secondary',
      fontFamily: 'body',
      fontSize: [1, 2],
      lineHeight: 'body',
      alignSelf: 'center',
    }}
    {...props}
  />
)

export const Artist = ({ label, name, artwork, link, onPlay, children }) => (
  <Box onClick={() => (onPlay ? onPlay(link) : null)}>
    <Grid
      gap={[3, 4]}
      sx={{
        gridTemplateColumns: '128px 1fr',
        alignItems: 'center',
        img: { borderRadius: 'circle' },
      }}
    >
      {typeof artwork === 'string' ? (
        <Artwork src={artwork} size={512} alt={name} />
      ) : (
        artwork
      )}
      <Box>
        <Label>{label}</Label>
        <Name>{name}</Name>
      </Box>
    </Grid>
  </Box>
)

export const Album = ({
  label,
  name,
  artwork,
  link,
  onPlay,
  artist,
  children,
  ...props
}) => (
  <Grid
    gap={[3, 4]}
    sx={{
      gridTemplateColumns: '128px 1fr 48px',
      alignItems: 'center',
      cursor: 'pointer',
      img: { borderRadius: 'default' },
    }}
    onClick={() => onPlay(link)}
  >
    <Image
      src={artwork.replace('1024x1024', '256x256')}
      loading="lazy"
      width={256}
      height={256}
      alt={`${name} artwork`}
    />
    <Box>
      <Label>{label}</Label>
      <Name>{name}</Name>
      <Text
        as="span"
        variant="caption"
        sx={{ fontFamily: 'body', fontSize: [1, 2], color: 'muted' }}
      >
        {artist}
      </Text>
    </Box>
    <IconButton
      sx={{
        width: 'auto',
        height: 'auto',
        color: 'music',
        cursor: 'pointer',
        transition: 'color 0.125s ease-in-out',
      }}
      {...props}
    >
      <PlayCircle size={48} />
    </IconButton>
  </Grid>
)
