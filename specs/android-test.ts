
describe("Proverbial APK", () => {
  
  it("Login and View Collections", async () => {
    await browser.pause(15000);
    let switch_sso = await $('//*[@resource-id="com.slatedigitalinc.slate:id/switchToSSO"]'); // XPath expression for input-email
    await switch_sso.waitForDisplayed({ timeout: 30000 });
    await switch_sso.click();

    // await browser.pause(10000);

    let put_visa = await $('//*[@resource-id="com.slatedigitalinc.slate:id/ssoEditText"]'); // XPath expression for input-email
    await put_visa.waitForDisplayed({ timeout: 30000 });
    await put_visa.setValue("visa");
    await browser.pause(15000);





    // await browser.pause(10000);

    let login_page = await $('//*[@resource-id="com.slatedigitalinc.slate:id/logInButton"]'); // XPath expression for input-email
    await login_page.waitForDisplayed({ timeout: 30000 });
    await login_page.click();

    await browser.pause(25000);

    let company_name = await $('//*[@class="android.widget.EditText"]'); // XPath expression for input-email
    await company_name.waitForDisplayed({ timeout: 30000 });
    await company_name.click();
    await browser.pause(15000);

    let enter_email = await $('//*[@class="android.widget.EditText"]'); // XPath expression for input-email
    await enter_email.waitForDisplayed({ timeout: 30000 });
    await enter_email.setValue("testuser@SlateDigitalInc.onmicrosoft.com");
    await browser.pause(15000);




    // await browser.pause(10000);

    let next_button = await $('//*[@text="Next"]'); // XPath expression for input-email
    await next_button.waitForDisplayed({ timeout: 30000 });
    await next_button.click();
    await browser.pause(25000);




    let enter_password = await $('//*[@class="android.widget.EditText"]'); // XPath expression for input-email
    await enter_password.waitForDisplayed({ timeout: 30000 });
    await enter_password.click();
    await browser.pause(10000);

    let enter_password_1 = await $('//*[@class="android.widget.EditText"]'); // XPath expression for input-email
    await enter_password_1.waitForDisplayed({ timeout: 30000 });
    await enter_password_1.setValue("zjy5tgw_vkw5GKU.bgf");
    await browser.pause(19000);

    await driver.pressKeyCode(66);
    await browser.pause(15000);
    await driver.pressKeyCode(66);
    await browser.pause(15000);
  });

});
