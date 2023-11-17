import { ContactMessage } from "@/types";

export async function POST(request: Request) {
  const { name, email, message }: ContactMessage = await request.json();

  const response = await fetch(
    `https://api.telegram.org/bot${
      process.env.TELEGRAM_TOKEN
    }/sendAnimation?${new URLSearchParams({
      chat_id: process.env.TELEGRAM_ACCOUNT_ID as string,
      animation: "https://tenor.com/9Tf4.gif",
      caption: `FROM: ${name} (${email})\n\nMESSAGE: ${message}`,
    })}`
  );

  return Response.json(await response.json());
}
