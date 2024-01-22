// submitForm.js

import nodemailer from 'nodemailer';

export const handler = async (event, context) => {
  try {
    const { cost, name, email, phone, date} = JSON.parse(event.body);

    // Perform email sending logic using nodemailer or a service like SendGrid

    // Send confirmation email to the user
    const transporter = nodemailer.createTransport(/* configure transporter */);
    await transporter.sendMail({
      from: 'firmciti@gmail.com',
      to: email,
      subject: 'Form Submission Confirmation',
      text: `Dear ${name},\n\nYour form submission was successful!\n\nThe date requested, ${date}, is available. The cost of our service is ${amount}. We are able to call you at ${phone}. Thank you for using our service.`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
