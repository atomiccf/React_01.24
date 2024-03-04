export const timer = (seconds: number): string => {
  if (typeof seconds !== 'number') {
    // @ts-ignore
    return
  }
  const minute: string = String(Math.floor(seconds / 60)).padStart(2, '0')
  const second: string = String(seconds % 60).padStart(2, '0')
  return `${minute}:${second}`
}
