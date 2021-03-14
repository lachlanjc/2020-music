import { Flex, Grid, Badge, Text } from 'theme-ui'
import Artwork from './artwork'

const getAlbum = a => (a.includes(' - Single') ? 'Single' : a)

const SongList = ({
  songs = [],
  monthly = false,
  sunken = false,
  sx = { px: 2 },
  onPlay,
}) => (
  <Grid
    as="ol"
    gap={0}
    sx={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(384px, 1fr))',
      lineHeight: 'subheading',
      pl: 0,
      overflowX: 'hidden',
      maxWidth: '100%',
      ...sx,
    }}
  >
    {songs.map((song, i) => (
      <Grid
        as="li"
        gap={[2, 3]}
        sx={{
          p: [1, 2],
          overflow: 'hidden',
          alignItems: 'center',
          gridTemplateColumns: '32px 64px 1fr',
          borderBottom: '1px solid',
          borderBottomWidth: 0.5,
          borderBottomColor: 'border',
          cursor: 'pointer',
          ':hover button': { transform: 'scale(1)' },
        }}
        onClick={() => onPlay(song.link)}
        key={song.title + song.artist}
      >
        {monthly ? (
          <Badge
            sx={{
              bg: 'muted',
              color: 'background',
              fontFamily: 'heading',
              fontSize: monthly ? 0 : 1,
              fontWeight: 500,
              letterSpacing: 'title',
              textTransform: 'uppercase',
              justifySelf: 'center',
            }}
          >
            {song.month}
          </Badge>
        ) : (
          <Text
            as="span"
            sx={{
              fontFamily: 'heading',
              fontSize: monthly ? 0 : 1,
              fontWeight: 500,
              letterSpacing: 'title',
              textAlign: 'right',
              textTransform: 'uppercase',
            }}
          >
            {`${i + 1}.`}
          </Text>
        )}
        <Artwork
          size={64}
          src={song.artwork.replace('512x512', '128x128')}
          alt={getAlbum(song.album)}
        />
        <Flex sx={{ flexDirection: 'column', width: '100%' }}>
          <strong>{song.title}</strong>
          <Text as="small" variant="caption">
            {song.artist} – {getAlbum(song.album)}
          </Text>
        </Flex>
      </Grid>
    ))}
  </Grid>
)

export default SongList
