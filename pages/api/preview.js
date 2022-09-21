export default async function handler(req, res) {
  const previousPage = req.headers.referer;

  const password = 'SENHASEGURA';
  if (req.query.password !== password) {
    return res.status(401).json({ message: 'Invalid password!' });
  }

  if (req.preview) {
    // Desliga
    res.clearPreviewData();
  } else {
    // Liga
    res.setPreviewData({});
  }
  res.writeHead(307, { Location: previousPage });
  return res.end();
}
