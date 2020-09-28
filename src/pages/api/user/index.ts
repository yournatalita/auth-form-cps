import { NextApiRequest, NextApiResponse } from 'next';
import { decode } from '@/utils/jwt';

function authHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = decode(req.cookies['auth-cps'])

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      ...data,
      aud: undefined,
      exp: undefined,
      iat: undefined,
      iss: undefined,
    }));
  } catch (error) {
    console.error(error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(error.response));
  }
}

export default authHandler;
