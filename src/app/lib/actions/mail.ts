"use server";
import nodemailer from "nodemailer";
import { baseUrl } from "@/lib/constants";

const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., Gmail, Outlook, etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function mailEmailConfirmationToken(email: string, token: string) {
  const info = {
    from: process.env.EMAIL_FROM, // Your email address
    to: email,
    subject: "Email Confirmation",
    html: `Welcome to Startup Niger Delta.

Please click on the following link, or paste this into your browser to verify your email address:

<a href="${baseUrl}/verify-email?token=${token}">${baseUrl}/verify-email?token=${token}.</a>`,
  };

  try {
    const { response } = await transporter.sendMail(info);
    console.info(`Email verification mail sent: ${response}`);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email verification mail");
  }
}
