import { Response, Request } from 'express';

const sendResponse = (
  response: Response,
  content: { statusCode: number; body: any },
) => {
  response.status(content.statusCode).json(content.body);
};

const getBody = async () => {
  let body = {
    statusCode: 200,
    body: {
      name: 'Samuel',
      age: 32,
    },
  };
  return body;
};

export const UserController = {
  scemarios: async (_req: Request, res: Response) => {
    sendResponse(res, await getBody());
  },
};
