import Firecrawl from '@mendable/firecrawl-js';

export class FirecrawlService {
  private firecrawl: Firecrawl;
  private API_KEY = process.env.NEXT_PUBLIC_FIRECRAWL_API_KEY;

  constructor() {
    this.firecrawl = new Firecrawl({
      apiKey: this.API_KEY,
    });
  }

  async crawlUrl(url: string) {
    try {
      return await this.firecrawl.scrapeUrl(url, { formats: ['markdown'] });
    } catch (e) {
      console.error('Error during crawl:', e);
      return e;
    }
  }
}
