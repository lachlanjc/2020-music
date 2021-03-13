import Content from './footer.mdx'
import Ring from './activity/ring'
import BGImg from './bg-img'
import { Container, Box, Grid } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Earbuds } from 'react-bootstrap-icons'

const Footer = () => {
  const { pathname } = useRouter()
  return [
    <Grid
      key="navCards"
      as="section"
      variant="layout.narrow"
      gap={[3, 4]}
      columns={[null, 2]}
      sx={{
        mt: [3, 4],
        mb: [4, 5],
        h2: {
          variant: 'text.headline',
          textAlign: 'left',
          mb: 0,
        },
        a: {
          justifySelf: 'center',
          bg: 'elevated',
          textDecoration: 'none',
          width: 256,
          height: 256,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: 'circle',
          h2: { mt: 3, fontFamily: 'heading' },
          'svg, h2': { zIndex: 2 },
          svg: {
            transition: '0.25s transform ease-in-out',
            transformOrigin: 'center bottom',
          },
          ':hover,:focus': {
            svg: {
              transform: 'scale(1.875)',
            },
          },
          '::before': {
            content: '""',
            left: '-6px',
            right: '-6px',
            top: '-6px',
            bottom: '-6px',
            display: 'block',
            position: 'absolute',
            zIndex: 0,
            borderRadius: 'circle',
          },
          '::after': {
            content: '""',
            bg: 'elevated',
            display: 'block',
            position: 'absolute',
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'circle',
          },
        },
      }}
    >
      {pathname !== '/' && (
        <Link href="/" passHref>
          <Box as="a">
            <BGImg
              src="/cover.jpg"
              width={2224}
              height={1251}
              alt="New York at sunset, cover image"
            />
            <h2>Story</h2>
          </Box>
        </Link>
      )}
      {pathname !== '/activity' && (
        <Link href="/activity" passHref>
          <Box as="a" sx={{ color: 'text' }}>
            <Ring size={96} />
            <h2>Activity</h2>
          </Box>
        </Link>
      )}
      {pathname !== '/music' && (
        <Link href="/music" passHref>
          <Box
            as="a"
            sx={{
              color: 'music',
              h2: { color: 'music' },
              '::before': {
                backgroundImage: 'linear-gradient(#fa5b73, #fa233b)',
              },
            }}
          >
            <Earbuds size={96} />
            <h2>Music</h2>
          </Box>
        </Link>
      )}
    </Grid>,
    <Box
      key="footer"
      as="footer"
      sx={{ bg: 'sunken', textAlign: 'center', py: 3 }}
    >
      <Container
        sx={{
          maxWidth: 640,
          p: { color: 'secondary' },
          a: { color: 'primary' },
        }}
      >
        <Content />
      </Container>
    </Box>,
  ]
}

export default Footer
