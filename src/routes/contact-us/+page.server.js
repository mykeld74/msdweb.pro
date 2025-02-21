import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: env.GOOGLE_EMAIL,
		pass: env.GOOGLE_EMAIL_PASSWORD
	}
});

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');
			const email = formData.get('email');
			const phone = formData.get('phone');
			const message = formData.get('message');

			// Email options
			const mailOptions = {
				from: env.GOOGLE_EMAIL,
				to: 'mike@bigbearded.dev', // Send to yourself
				subject: `New Contact Form Submission from ${name}`,
				text: `
					Name: ${name}
					Email: ${email}
					Phone: ${phone || 'Not provided'}
					
					Message:
					${message}
				`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
					<h3>Message:</h3>
					<p>${message}</p>
				`
			};

			await transporter.sendMail(mailOptions);

			return {
				success: true,
				message: 'Thank you for your message. We will get back to you soon!'
			};
		} catch (error) {
			console.error('Email error:', error);
			return {
				success: false,
				message: 'Sorry, there was an error sending your message. Please try again later.'
			};
		}
	}
};
