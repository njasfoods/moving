export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end(); // Method Not Allowed
    }
  
    const { name, email, distance, totalCost } = req.body;
  
    // Perform email sending logic here (using nodemailer, sendgrid, etc.)
    // ...
  
    // Return a response to the client
    res.status(200).json({ message: 'Email sent successfully' });
  }