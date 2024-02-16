import sum from "./Sum"
import {test,expect} from 'vitest'

test('sum of two no',() => {
    expect(sum(2,2)).toBe(4)
})