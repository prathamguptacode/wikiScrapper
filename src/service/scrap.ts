import puppeteer from "puppeteer";


export async function wikiScrapper(q: string) {
  const url = "https://en.wikipedia.org/wiki/" + q
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  const txt = await page.evaluate(() => {
    const elm = document.querySelector("#mw-content-text p:nth-of-type(2)") as HTMLElement
    if (elm == null) {
      return "NOT FOUND"
    }
    return elm.innerText
  })
  await browser.close()
  return txt
}
