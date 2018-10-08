import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Conference, { schema } from './model'

const router = new Router()
const { name, city, year } = schema.tree

/**
 * @api {post} /conferences Create conference
 * @apiName CreateConference
 * @apiGroup Conference
 * @apiParam name Conference's name.
 * @apiParam city Conference's city.
 * @apiParam year Conference's year.
 * @apiSuccess {Object} conference Conference's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Conference not found.
 */
router.post('/',
  body({ name, city, year }),
  create)

/**
 * @api {get} /conferences Retrieve conferences
 * @apiName RetrieveConferences
 * @apiGroup Conference
 * @apiUse listParams
 * @apiSuccess {Object[]} conferences List of conferences.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /conferences/:id Retrieve conference
 * @apiName RetrieveConference
 * @apiGroup Conference
 * @apiSuccess {Object} conference Conference's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Conference not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /conferences/:id Update conference
 * @apiName UpdateConference
 * @apiGroup Conference
 * @apiParam name Conference's name.
 * @apiParam city Conference's city.
 * @apiParam year Conference's year.
 * @apiSuccess {Object} conference Conference's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Conference not found.
 */
router.put('/:id',
  body({ name, city, year }),
  update)

/**
 * @api {delete} /conferences/:id Delete conference
 * @apiName DeleteConference
 * @apiGroup Conference
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Conference not found.
 */
router.delete('/:id',
  destroy)

export default router
