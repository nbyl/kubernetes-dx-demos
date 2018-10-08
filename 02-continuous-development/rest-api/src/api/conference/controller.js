import { success, notFound } from '../../services/response/'
import { Conference } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Conference.create(body)
    .then((conference) => conference.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Conference.find(query, select, cursor)
    .then((conferences) => conferences.map((conference) => conference.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Conference.findById(params.id)
    .then(notFound(res))
    .then((conference) => conference ? conference.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Conference.findById(params.id)
    .then(notFound(res))
    .then((conference) => conference ? Object.assign(conference, body).save() : null)
    .then((conference) => conference ? conference.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Conference.findById(params.id)
    .then(notFound(res))
    .then((conference) => conference ? conference.remove() : null)
    .then(success(res, 204))
    .catch(next)
