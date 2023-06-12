import { auth } from 'express-oauth2-jwt-bearer';


const jwtCheck = auth({
  audience: 'https://bloggy.hicoders.ch',
  issuerBaseURL: 'dev-pwiaoo6hu4v7k8jh.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

export default jwtCheck;