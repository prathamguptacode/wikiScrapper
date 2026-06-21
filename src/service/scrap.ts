import puppeteer from "puppeteer";


export async function wikiScrapper(q: string) {
  const url = "https://en.wikipedia.org/wiki/" + q
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  const txt = await page.evaluate(() => {
    let message = ""
    const elms = document.querySelectorAll("#mw-content-text p") as NodeListOf<HTMLElement>
    if (elms.length == 0){
      return "NOT FOUND"
    }
    elms.forEach((element) => {
      message += element.innerText
    });
    return message
  })
  await browser.close()
  return txt
}
