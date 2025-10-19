export async function crawlUrl(url: string) {
    const res = await fetch('/api/crawl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
    });

    if (!res.ok) throw new Error('Failed to crawl URL');
    return res.json();
}
