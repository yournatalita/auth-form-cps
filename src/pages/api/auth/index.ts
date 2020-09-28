import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';
import { addHours } from 'date-fns';
import { encode } from '@/utils/jwt';

const {
  publicRuntimeConfig: { baseUrl },
} = getConfig();

async function authHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await axios.get(`${baseUrl}/auth`, {
      params: req.query,
    });

    const expires = addHours(new Date(), 1);
    const token = encode(result.data, '1 hour')

    res.setHeader(
      'Set-Cookie',
      `auth-cps=${token}; Path=/; Expires=${expires.toUTCString()}; HttpOnly; SameSite=Lax`
    );
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result.data));
  } catch (error) {
    console.error(error);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(error.response));
  }
}

export default authHandler;
