import { JWT, JWK } from 'jose';
import getConfig from "next/config";

const {
  publicRuntimeConfig: { siteUrl },
} = getConfig();

const key = JWK.asKey({
  kty: 'oct',
  k: 'hJtXIZ2uSN5kbQfbtTNWbpdmhkV8FJG-Onbc6mxCcYg'
});

const encode = (payload: any, time: string) => {

  // TODO: remove debugging
  console.log(payload, key);
  const token = JWT.sign(payload, key, {
    audience: ['urn:example:client'],
    issuer: siteUrl,
    expiresIn: time,
    header: {
      typ: 'JWT'
    }
  });

  return token;
};


const decode = (token: string) => {
  return JWT.decode(token);
};

export { encode, decode };
