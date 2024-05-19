import puppeteer from "puppeteer";

describe("Credit card form", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("form should render on page", async () => {
    await page.goto("http://localhost:8080");

    await page.waitForSelector(".credit-card-form");
  });

  test("form input should add .valid class if card number is correct", async () => {
    jest.setTimeout(200000);
    await page.goto("http://localhost:8080");

    await page.waitForSelector(".credit-card-form");

    const form = await page.$(".credit-card-form");
    const input = await form.$(".input");
    const submit = await form.$(".submit");
    await input.type("30569309025904");
    await submit.click();

    const inputValid = await form.$(".valid");

    await page.waitForSelector(".credit-card-form .input.valid");

    expect(inputValid).toBeDefined();
  }, 35000);

  afterEach(async () => {
    await browser.close();
  });
});
