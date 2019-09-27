import tts from 'google-tts-api'

export const gen = async (text, language = 'en', speed = 1.0) => {
  if (!text) throw new Error('Please supply text to convert!')

  const url = await tts(text, language, speed)

  return url
}

export default { gen }
