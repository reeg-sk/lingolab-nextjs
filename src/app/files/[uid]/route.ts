export const revalidate = 120

export async function GET(request: Request, { params }) {
  const { uid } = params;
  const url = `${process.env.BACKEND_URL}/assets/${uid}?format=webp&fit=cover&quality=75`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.BACKEND_TOKEN}`,
    },
  });

  if (response.status === 404) {
    return new Response("Not found", { status: 404 });
  }

  const data = await response.blob();

  return new Response(data);
}
