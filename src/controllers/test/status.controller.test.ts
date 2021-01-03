import { get } from '../status.controller';

describe('status controller', () => {

  let req: any;
  let res: any;
  let next: any;

  beforeEach(() => {
    req = {};
    res = { status: jest.fn().mockReturnThis(), send: jest.fn(), json: jest.fn() };
    next = jest.fn();
  });

  it('200 - heartbeat', async () => {
    await get(req, res, next);

    expect(res.status).toBeCalledWith(200);
    expect(res.send).toBeCalledWith();
  });
});
