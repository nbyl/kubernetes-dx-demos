import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Conference } from '.'

const app = () => express(apiRoot, routes)

let conference

beforeEach(async () => {
  conference = await Conference.create({})
})

test('POST /conferences 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', city: 'test', year: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.year).toEqual('test')
})

test('GET /conferences 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /conferences/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${conference.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(conference.id)
})

test('GET /conferences/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /conferences/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${conference.id}`)
    .send({ name: 'test', city: 'test', year: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(conference.id)
  expect(body.name).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.year).toEqual('test')
})

test('PUT /conferences/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', city: 'test', year: 'test' })
  expect(status).toBe(404)
})

test('DELETE /conferences/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${conference.id}`)
  expect(status).toBe(204)
})

test('DELETE /conferences/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
