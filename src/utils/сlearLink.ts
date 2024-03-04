export const сlearLink = (link: string): string => {
  if (typeof link !== 'string') {
    // @ts-ignore
    return
  }
  const split = link.split('&')
  const filteredLink = split.filter(item => !item.includes('any'))
  return filteredLink.join('&')
}
