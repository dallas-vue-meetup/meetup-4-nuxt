
export const getIdFromUrl = (_url) => {
  const url = _url.slice(0, -1)
  const slashIdx = url.lastIndexOf('/')
  return url.substr(slashIdx + 1)
}
