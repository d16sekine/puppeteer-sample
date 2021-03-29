const puppeteer = require('puppeteer');

const url = "https://www.1st-net.jp/blog/sample/blank.html"

async function main(){

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 15,
      });

    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});

    const aObj = await page.$("body > a:nth-child(4)")

    await aObj.click()

    //capture and control a new tab page
    const newPage = await browser.waitForTarget(t => t.opener() === page.target()).then(t => t.page())

    //scrape body content of the new page
    const body = await newPage.$("body")

    const data = await (await body.getProperty('textContent')).jsonValue();

    console.log(data)
    
    await page.waitForTimeout(3000)

    await browser.close();

    return
}

main()