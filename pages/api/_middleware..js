export default async function middleware(req, res) {
  if (req.url.startsWith('/')) {
    const auth = req.headers.get('authorization');
    if (!auth || auth !== 'Basic ' + Buffer.from(`${process.env.BASIC_AUTH_USERNAME}:${process.env.BASIC_AUTH_PASSWORD}`).toString('base64')) {
      res.statusCode = 401;
      res.end('Unauthorized');
      return;
    }
  }
  next();
}