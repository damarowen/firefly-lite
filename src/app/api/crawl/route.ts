import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const response = await axios.post(
      'https://api.firecrawl.dev/v1/crawl',
      { url },
      {
        headers: {
          Authorization: `Bearer ${process.env.FIRECRAWL_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (err: any) {
    console.error('Firecrawl error:', err.response?.data || err.message);
    return NextResponse.json(
      { error: err.response?.data || 'Failed to crawl URL' },
      { status: 500 }
    );
  }
}
