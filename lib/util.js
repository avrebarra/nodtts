/**
 * Search for an argument passed to node
 *
 * Given the example: node apps.js port=2134 --host=2312 force
 *
 * From the example, 'port' and '--host' is valid. 'host' won't be recognized, 'force' will be recognized and automatically parsed as true (boolean)
 * @param  {} argname
 */
export const findargs = (argname) => {
  const args = process.argv.slice(2); const param = args.find((el) => el.startsWith(`${argname}`))
  if (!param) return null
  if (param.indexOf('=') === -1) return true
  return param.replace(`${argname}=`, '')
}

export default { findargs }
