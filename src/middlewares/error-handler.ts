import { Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors/custom-error'

/**
 * @param  {Error} err
 * @param  {Request} req
 * @param  {Response} res
 * @param  {NextFunction} next
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors()
    })
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }]
  })
}
