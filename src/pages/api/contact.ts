import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, company, subject, message } = req.body;

    // TODO: Add logic to email or store message
    console.log('Contact Form Submission:', { firstName, lastName, email, phone, company, subject, message });

    return res.status(200).json({ success: true, message: 'Form submitted successfully.' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
