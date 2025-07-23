const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = `file:${path.resolve(__dirname, 'guia-fidelizacion.html')}`;
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'guia-fidelizacion.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '15mm',
      right: '15mm'
    }
  });

  await browser.close();
})();
