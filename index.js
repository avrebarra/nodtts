import https from 'https'
import fs from 'fs'
import tts from 'google-tts-api'

/**
 * Get speech url from provided text
 *
 * @param  {string} text text to translate
 * @param  {string} lang='en' locale to use when generating speech file
 * @param  {number} speed=1.0 speech speed
 */
export const url = async (text, lang = 'en', speed = 1.0) => {
  if (!text) throw new Error('Supply text to convert!')

  return tts(text, lang, speed)
}

/**
 * Get speech download stream from provided text
 *
 * @param  {string} text text to translate
 * @param  {string} lang='en' locale to use when generating speech file
 * @param  {number} speed=1.0 speech speed
 */
export const stream = async (text, lang, speed) => {
  const resurl = await url(text, lang, speed)

  return new Promise((resolve, reject) => {
    https.get(resurl, (response) => {
      resolve(response)
    })
  })
}

/**
 * Download speech to file from provided text
 *
 * @param  {string} path path to save speech file
 * @param  {string} text text to translate
 * @param  {string} lang='en' locale to use when generating speech file
 * @param  {number} speed=1.0 speech speed
 */
export const file = async (path, text, lang, speed) => {
  if (!path) throw new Error('Supply path to save file to!')

  const resstream = await stream(text, lang, speed)
  const fwstream = fs.createWriteStream(path)

  resstream.pipe(fwstream)

  return new Promise((resolve, reject) => {
    fwstream.on('finish', function () {
      fwstream.close(resolve)
    })
  })
}

export default { url, stream, file }
