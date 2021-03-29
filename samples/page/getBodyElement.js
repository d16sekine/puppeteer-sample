const puppeteer = require('puppeteer');
const config = require('config')

async function main(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 15,
      });

    const page = await browser.newPage();
    await page.goto(config.targetUrl, {waitUntil: 'networkidle2'});

    const body = await page.$("body")

    const data = await (await body.getProperty('textContent')).jsonValue();

    console.log(data)

    await browser.close();

    return
}

main()