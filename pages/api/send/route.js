import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async function POST(req, res) {
  try {
    // Parse the JSON body of the request
    const { body } = await req.json();
    const { name, email, subject, message } = body;

    // Send the email using the "resend" package
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['portfolio.aayush@gmail.com'], // Change this to your recipient email
      subject: subject,
      text: `Thank you for contacting us!\nNew message submitted:\n${message}`,
    });

    // Respond with the data from the email sending operation
    res.json(data);
  } catch (error) {
    console.error('Error in API Route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
