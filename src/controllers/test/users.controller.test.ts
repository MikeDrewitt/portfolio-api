// Test
import { get, detail } from '../users.controller';

// Mocked out user model
import User from '../../models/User.model';
jest.mock('../../models/User.model');

import { NotFound } from "../../errors/api.errors";

describe('user controller', () => {

  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = {};
    res = { status: jest.fn().mockReturnThis(), send: jest.fn(), json: jest.fn() };
    next = jest.fn();
  });

  describe('GET - list', () => {
      it('200 - returns list', async () => {
      const expectedRes: User[] = [];

      User.list = jest.fn().mockReturnValue(expectedRes);

      await get(req, res, next);

      expect(res.status).toBeCalledWith(200);
      expect(res.send).toBeCalledWith(expectedRes);
    });

    it('400 - passes to next middleware', async () => {
      User.list = jest.fn().mockImplementation(() => { throw new Error('Some error') });

      await get(req, res, next);

      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });

  describe('GET - detail', () => {
    beforeEach(() => {
      req = { params: { id: 1 } };
    });

    it('200 - returns user with known id', async () => {
      const expectedRes = new User('some_username');
      expectedRes.id = 1;

      User.retrieve = jest.fn().mockReturnValue(expectedRes);

      await detail(req, res, next);

      expect(res.status).toBeCalledWith(200);
      expect(res.send).toBeCalledWith(expectedRes);
    });

    it('404 - unknown id', async () => {
      User.retrieve = jest.fn().mockReturnValue(null);

      await detail(req, res, next);

      expect(res.status).toBeCalledWith(404);
      expect(res.send).not.toBeCalledWith();
      expect(res.json).toBeCalledWith(NotFound);
    });

    it('400 - passes to next middleware', async () => {
      User.retrieve = jest.fn().mockImplementation(() => { throw new Error('some error') });

      await detail(req, res, next);

      expect(res.status).not.toHaveBeenCalled();
      expect(res.send).not.toHaveBeenCalled();
      expect(next).toHaveBeenCalled();
    });
  });

  // describe('POST', () => {

  // });

  // describe('PATCH', () => {

  // });

  // describe('DELETE', () => {

  // });

  // describe('POST - login', () => {

  // });
});
