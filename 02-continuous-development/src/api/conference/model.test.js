import { Conference } from '.'

let conference

beforeEach(async () => {
  conference = await Conference.create({ name: 'test', city: 'test', year: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = conference.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(conference.id)
    expect(view.name).toBe(conference.name)
    expect(view.city).toBe(conference.city)
    expect(view.year).toBe(conference.year)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = conference.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(conference.id)
    expect(view.name).toBe(conference.name)
    expect(view.city).toBe(conference.city)
    expect(view.year).toBe(conference.year)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
