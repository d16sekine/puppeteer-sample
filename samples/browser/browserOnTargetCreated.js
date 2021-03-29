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

    await browser.on("targetcreated", (t) => {
      console.log("targetcreated")
      console.log(t.url())
    })

    await aObj.click()

    await page.waitForTimeout(3000)

    await browser.close();

    return
}

main()