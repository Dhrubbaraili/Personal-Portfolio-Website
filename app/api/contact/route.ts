import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO ?? "dmsmbaraili@gmail.com";
    const from = process.env.SMTP_FROM ?? user;

    if (!host || !user || !pass || !from) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email delivery is not configured. Please set SMTP_HOST, SMTP_USER, SMTP_PASS, and SMTP_FROM.",
        },
        { status: 500 }
      );
    }

    const transport = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user, pass },
    });

    await transport.verify();

    await transport.sendMail({
      from: `"Dhrub Baraili Website" <${from}>`,
      to,
      replyTo: data.email,
      subject: `New portfolio inquiry from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone ?? "-"}`,
        `Company: ${data.company ?? "-"}`,
        `Service: ${data.service}`,
        `Message: ${data.message}`,
      ].join("\n"),
    });

    return NextResponse.json(
      { success: true, message: "Message received." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Unable to send message.",
      },
      { status: 500 }
    );
  }
}
