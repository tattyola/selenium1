const {Builder, By, Key} = require('Selenium-webdriver');
const assert = require('assert');
const expect = require('chai');

async function calculator() {
     // launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    // navigate to our application
    await driver.get("http://ahfarmer.github.io/calculator")

    // add a todo
    await driver.findElement(By.xpath("//button[.=\"1\"]")).click();
    await driver.findElement(By.xpath("//button[.=\"+\"]")).click();
    await driver.findElement(By.xpath("//button[.=\"3\"]")).click();
    await driver.findElement(By.xpath("//button[.=\"=\"]")).click();

    // assert
    let verification = await driver     // Create a test for doing addition - Add 1 and 3
        .findElement(By.xpath("//div[@class=\"component-display\"]/div"))
        .getText()
        .then(function (value) {
            assert.equal('4', value);
        });

    // close the browser
    await driver.quit();
}
calculator()