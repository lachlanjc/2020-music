import { useState, useEffect } from 'react'
import { Box } from 'theme-ui'
import {
  EmojiAngry,
  EmojiDizzy,
  EmojiExpressionless,
  EmojiFrown,
  EmojiHeartEyes,
  EmojiLaughing,
  EmojiSmile,
  EmojiSmileUpsideDown,
  EmojiSunglasses,
  EmojiWink,
} from 'react-bootstrap-icons'

const emotions = [
  EmojiAngry,
  EmojiDizzy,
  EmojiExpressionless,
  EmojiFrown,
  EmojiHeartEyes,
  EmojiLaughing,
  EmojiSmile,
  EmojiSmileUpsideDown,
  EmojiSunglasses,
  EmojiWink,
]

const Hyperpop = () => {
  const [emotion, setEmotion] = useState(0)
  useEffect(() => {
    const changeEmotion = () =>
      setEmotion(e => (e === emotions.length - 1 ? 0 : e + 1))
    const interval = setInterval(changeEmotion, 450)
    return () => {
      clearInterval(interval)
    }
  })
  const Emotion = emotions[emotion]

  return (
    <Box
      sx={{
        width: 128,
        height: 128,
        borderRadius: 64,
        bg: 'music',
        color: 'white',
        boxShadow: 'inset 0 0 0 2px white',
      }}
    >
      <Emotion size={128} />
    </Box>
  )
}

export default Hyperpop
