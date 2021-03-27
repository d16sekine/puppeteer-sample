const puppeteer = require('puppeteer');
const config = require('config')

async function main(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 15,
        defaultViewport: {
          width: 800,
          height: 1000
        }
      });

    const page = await browser.newPage();
    await page.goto(config.targetUrl, {waitUntil: 'networkidle2'});

    const content = await page.content()

    console.log(content)

    await browser.close();

    return
}

main()