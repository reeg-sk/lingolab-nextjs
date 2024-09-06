## Getting Started

First create a `.env.local` file with following values:
```
BACKEND_URL=https://lingolab.gtl.sk
BACKEND_TOKEN=
```

And get token from the directus web connector user.



Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Running in Docker

To build an image use following command which is also passing the secret token as an **env var** (`export BACKEND_URL=<url>`) to the image build:

```bash
docker build -t lingolab-nextjs . --secret id=backend_token,env=BACKEND_TOKEN --no-cache --progress=plain
```

To run an image on port 3000:
```bash
docker run -p 3000:3000 lingolab-nextjs
```