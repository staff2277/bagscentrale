import https from 'https';

const secretKey = process.env.PAYSTACK_SECRET_KEY;

export const verifyTransaction = async (reference) => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.paystack.co',
      port: 443,
      path: `/transaction/verify/${reference}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${secretKey}`
      }
    };

    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', error => reject(error));
    
    req.end();
  });
};
