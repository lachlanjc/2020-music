import { BaseStyles, Container } from 'theme-ui'

const Story = props => (
  <Container
    as={BaseStyles}
    sx={{
      color: 'text',
      fontSize: 2,
      py: [3, 4],
      'p, h2': {
        maxWidth: 'copyPlus',
        mx: 'auto',
      },
      'p:first-of-type::first-letter': {
        initialLetter: '3',
        WebkitInitialLetter: '3',
        color: 'primary',
        fontFamily: 'heading',
        fontWeight: 'bold',
        WebkitTextStroke: 'currentColor',
        WebkitTextStrokeWidth: '3px',
        WebkitTextFillColor: 'transparent',
        pr: 2,
        pb: 1,
      },
      '> figure': {
        my: 4,
      },
      '> section': {
        position: 'relative',
        width: '100vw',
        left: '50%',
        right: '50%',
        mx: '-50vw',
        my: [4, 5],
      },
    }}
    {...props}
  />
)

export default Story
