import {timer} from './timer.ts'

// eslint-disable-next-line no-undef
describe('timer test', () => {
  // eslint-disable-next-line no-undef
  test('test result', () => {
    const timerResult = timer(60)
    // eslint-disable-next-line no-undef
    expect(timerResult).toEqual('01:00')
  })
  // eslint-disable-next-line no-undef
  test('negative test', () => {
    // @ts-ignore
    const timerResult = timer('60')
    // eslint-disable-next-line no-undef
    expect(timerResult).toEqual(undefined)
  })
})
