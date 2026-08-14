"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const projectDetails = formData.get("projectDetails") as string;

  if (!firstName || !email || !projectDetails) {
    return { error: "Required fields are missing." };
  }

  // To make this actually send an email, the user must provide these in .env.local
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    console.warn("SMTP credentials (EMAIL_USER, EMAIL_PASS) not set in environment variables. Simulating success for the frontend.");
    // We'll simulate a slight delay and return success so the UI works as requested.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, simulated: true };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "saif67090707@gmail.com",
      subject: `New Contact Form Submission from ${firstName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nProject Details:\n${projectDetails}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send email. Please try again later." };
  }
}
