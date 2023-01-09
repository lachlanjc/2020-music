import Content from './footer.mdx'
import { Container, Box } from 'theme-ui'

const Footer = () => {
  return (
    <Box as="footer" sx={{ bg: 'sunken', textAlign: 'center', py: 3 }}>
      <Container
        sx={{
          maxWidth: 640,
          p: { color: 'secondary' },
          a: { color: 'primary' },
        }}
      >
        <Content />
      </Container>
    </Box>
  )
}

export default Footer
