import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;

  const { data, error } = await resend.emails.send({
    from: "Contact Me <onboarding@resend.dev>",
    to: ["jorgemova01@gmail.com"],
    subject: "Message from <<Contact Me>>",
    react: `Name: ${name}, Email: ${email}, Message: ${message}`,
  });

  if (error) {
    return res.status(400).json(error);
  }
  res.status(200).json(data);
};
