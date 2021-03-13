import { useState } from 'react'
import { Box, Container, Heading, Grid } from 'theme-ui'
import { Artist, Album, Comment } from '../components/music/awards'
import Meta from '../components/meta'
import SongList from '../components/music/song-list'
import Player from '../components/music/player'

// import twentyAlbums from '../data/twenty-albums.json'
import topSongs from '../public/data/replay-2020.json'
// import monthlySongs from '../data/monthly-songs.json'
import { capitalize } from 'lodash'

// const seasons = { spring, summer, fall }

const MusicPage = () => {
  const [url, setUrl] = useState(null)

  return (
    <Box as="main" sx={{ color: 'text' }}>
      <Meta title="Music" description="Lachlan Campbell’s top music of 2020." />
      <Container>
        <Grid gap={4} columns={[null, '3fr 2fr']} sx={{ mb: [4, 5] }}>
          <Album
            label="Album of the Year"
            name="The Slow Rush"
            artist="Tame Impala"
            artwork="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/b8/4d/07/b84d072f-d724-e9c9-433d-c3619f5cb8a4/source/512x512bb.jpg"
          />
          <Comment>I wouldn’t have made this site without this album.</Comment>
          <Album
            label="Runner-up: Album of the Year"
            name="SAWAYAMA"
            artist="Rina Sawayama"
            url="https://album.link/us/i/1493469433"
            artwork="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/5f/73/ae/5f73ae4a-6e7e-e5e6-89bc-3d8ffbfa5747/source/512x512bb.jpg"
          />
          <Comment />
          <Album
            label="EP of the Year"
            name="IN A DREAM"
            artist="Troye Sivan"
            artwork="https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/20/c3/a1/20c3a107-ddbf-8331-7d16-746a35bcdfd3/20UMGIM58034.rgb.jpg/512x512bb.jpeg"
          />
          <Comment />
          <Album
            label="Single of the Year"
            name="Lonely Star"
            artist="Oh Wonder"
            artwork="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/55/32/c1/5532c1bd-71f2-b6f1-a3e0-3ec7f4c5d44a/20UMGIM22129.rgb.jpg/512x512bb.jpeg"
          />
          <Comment />
          <Artist
            label="Best New Artist"
            name="Rina Sawayama"
            artwork="https://images.sk-static.com/images/media/img/col6/20200206-182210-650598.jpg"
          />
          <Comment />
        </Grid>
        <Heading as="h2" variant="headline">
          Songs of the month
        </Heading>
      </Container>
      {/* <SongList songs={monthlySongs} monthly onPlay={setUrl} /> */}
      <Container sx={{ pt: [3, 4, 5], pb: [2, 3] }}>
        <Heading as="h2" variant="headline">
          Top 99 songs of 2020
        </Heading>
      </Container>
      <SongList songs={topSongs} onPlay={setUrl} />
      <Player url={url} onClose={() => setUrl(null)} />
    </Box>
  )
}

export default MusicPage
