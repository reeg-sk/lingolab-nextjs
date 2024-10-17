import { draftMode } from 'next/headers';
import directus from '@/lib/directus';
import { readItem } from '@directus/sdk';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const secret = searchParams.get('token');
	const id = searchParams.get('id');

	if (secret !== '1234') {
		return new Response('Invalid token', { status: 401 });
	}

	if (!id) {
		return new Response('Missing id', { status: 401 });
	}

	const lecturer = await directus.request(readItem('lecturers', id));

	if (!lecturer) {
		return new Response('Invalid id', { status: 401 });
	}

	draftMode().enable();

	return new Response(null, {
		status: 307,
		headers: {
			Location: `/lektori/${lecturer.id}`,
		},
	});
}