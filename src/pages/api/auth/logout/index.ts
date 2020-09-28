import { NextApiRequest, NextApiResponse } from 'next';

function logoutHandler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    res.setHeader(
      'Set-Cookie',
      `auth-cps=; Path=/; Expires=${new Date().toUTCString()}; HttpOnly; SameSite=Lax`
    );
    res.setHeader('Content-Type', 'application/json');
    res.end();
  } catch (error) {
    console.error(error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(error.response));
  }
}

export default logoutHandler;
