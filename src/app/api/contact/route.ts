import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { brand } from "@/lib/data";

const formSubmitEndpoint = `https://formsubmit.co/ajax/${brand.email}`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
    }

    const data = parsed.data;

    if (data.company) {
      return NextResponse.json({ error: "Spam protection triggered." }, { status: 400 });
    }

    const response = await fetch(formSubmitEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        subject: data.subject,
        message: data.message,
        _subject: `Digital Sarina inquiry: ${data.subject}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await response.text();
console.log("FormSubmit response:", response.status, result);

if (!response.ok) {
  return NextResponse.json(
    { error: result },
    { status: response.status }
  );
}


    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }
}
