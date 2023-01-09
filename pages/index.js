import { useState } from 'react'
import { Box, Container, Heading, Grid } from 'theme-ui'
import { Artist, Album, Comment } from '../components/music/awards'
import Meta from '../components/meta'
import SongList from '../components/music/song-list'
import Player from '../components/music/player'
import Hyperpop from '../components/music/hyperpop'

// import twentyAlbums from '../public/data/twenty-albums.json'
import topSongs from '../public/data/replay-2020.json'
import monthlySongs from '../public/data/monthly-songs.json'
// import { capitalize } from 'lodash'

// const seasons = { spring, summer, fall }

const MusicPage = () => {
  const [url, setUrl] = useState(null)

  return (
    <Box as="main" sx={{ color: 'text' }}>
      <Grid
        as="section"
        variant="layout.container"
        columns={[null, 2]}
        sx={{ gridColumnGap: [3, 4], gridRowGap: [4, 5], mb: [4, 5] }}
      >
        <Album
          label="Album of the Year"
          name="The Slow Rush"
          artist="Tame Impala"
          link="https://album.link/us/i/1497230760"
          onPlay={setUrl}
          artwork="https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/b8/4d/07/b84d072f-d724-e9c9-433d-c3619f5cb8a4/source/512x512bb.jpg"
        />
        <Comment>
          I wouldn’t have made this site if not for this album. The number of
          metaphors for this year in this pre-COVID album is wild: when are we
          not <strong>Lost in Yesterday</strong>, <strong>On Track</strong>,
          considering <strong>Tomorrow’s Dust</strong>? Every detail has been
          perfectly obssessed over.
        </Comment>
        <Album
          label="Runner-up: Album of the Year"
          name="SAWAYAMA"
          artist="Rina Sawayama"
          artwork="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/5f/73/ae/5f73ae4a-6e7e-e5e6-89bc-3d8ffbfa5747/source/512x512bb.jpg"
          link="https://album.link/us/i/1493469433"
          onPlay={setUrl}
        />
        <Comment>
          Every time I listen I notice new details in the lyrics & production;
          her commitment to writing anything but a heterosexual breakup pop song
          is so refreshing: reviewing materialism in <strong>XS</strong>,
          getting everyone dancing on <strong>Comme Des Garçons</strong>,
          reflecting on heritage on <strong>Tokyo Love Hotel</strong>.
        </Comment>
        <Album
          label="EP of the Year"
          name="IN A DREAM"
          artist="Troye Sivan"
          artwork="https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/20/c3/a1/20c3a107-ddbf-8331-7d16-746a35bcdfd3/20UMGIM58034.rgb.jpg/512x512bb.jpeg"
          link="https://album.link/us/i/1536713511"
          onPlay={setUrl}
        />
        <Comment>Beautifully produced, totally gay, stacked, bops.</Comment>
        <Album
          label="Single of the Year"
          name="Lonely Star"
          artist="Oh Wonder"
          artwork="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/55/32/c1/5532c1bd-71f2-b6f1-a3e0-3ec7f4c5d44a/20UMGIM22129.rgb.jpg/512x512bb.jpeg"
          link="https://song.link/us/i/1504658154"
          onPlay={setUrl}
        />
        <Comment>
          This song, made pre-COVID but released as the first in a series of the
          duo’s <strong>Home Tapes</strong>, couldn’t be more perfect. It’s
          stark & minimal, sad & happy, blazing & alone. It’s all the right
          contradictions.
        </Comment>
        <Artist
          label="Best New Artist"
          name="Rina Sawayama"
          artwork="/rina.jpg"
        />
        <Comment>
          Both her EP <strong>RINA</strong> & her album{' '}
          <strong>SAWAYAMA</strong> are absolute bangers. She makes such
          personal hyperpop, spanning a remarkable array of topics with grace.
        </Comment>
        <Artist label="Favorite Trend" name="Hyperpop" artwork={<Hyperpop />} />
        <Comment>
          Dorian Electra, Charli XCX, Rina Sawayama, SOPHIE, 100 gecs—hyperpop
          is here. By being artifical & maximalist, it brings so much more
          personality than traditional pop.
        </Comment>
      </Grid>
      <Box as="section" sx={{ bg: 'sunken', py: [4, 5] }}>
        <Heading as="h2" variant="headline" sx={{ px: [3, 5] }}>
          Month-by-month soundtrack
        </Heading>
        <SongList songs={monthlySongs} monthly sunken onPlay={setUrl} />
      </Box>
      <Heading as="h2" variant="headline" sx={{ mt: [4, 5], px: [3, 5] }}>
        Top 100 songs of 2020
      </Heading>
      <SongList songs={topSongs} onPlay={setUrl} />
      <Player url={url} onClose={() => setUrl(null)} />
    </Box>
  )
}

export default MusicPage
