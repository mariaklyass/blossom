import contentfulClient from "@/utils/contentfulClient";

export async function POST(request: Request) {
  try {
    const jsonBody = await request.json();
    console.log(jsonBody);
    const { firstName, lastName, email, phone, occasion, details } = jsonBody;

    const space = await contentfulClient.getSpace(
      process.env.CONTENTFUL_SPACE_ID || ""
    );
    const environment = await space.getEnvironment(
      process.env.CONTENTFUL_ENVIRONMENT || "master"
    );

    const entry = await environment.createEntry("orderForm", {
      fields: {
        firstName: {
          "en-US": firstName,
        },
        lastName: {
          "en-US": lastName,
        },
        email: {
          "en-US": email,
        },
        phone: {
          "en-US": phone,
        },
        occasion: {
          "en-US": occasion,
        },
        details: {
          "en-US": details,
        },
      },
    });

    //todo: send email to the team

    return Response.json({ success: true, entry });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
