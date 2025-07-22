const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://www-microsoft.iceiy.com/', { waitUntil: 'networkidle2' });
  // Wait for 1 hour (3600000 ms)
  await new Promise(resolve => setTimeout(resolve, 3600000));
  await browser.close();
})();
