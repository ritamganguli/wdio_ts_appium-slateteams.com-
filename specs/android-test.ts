
describe("Proverbial APK", () => {
  
  it("Login and View Collections", async () => {
    let accept_permisson = await $('//*[@name="Allow"]'); // XPath expression for input-email
    await accept_permisson.waitForDisplayed({ timeout: 30000 });
    await accept_permisson.click();

    await browser.pause(10000);

    let deny_update = await $('//*[@name="Not now"]'); // XPath expression for input-email
    await deny_update.waitForDisplayed({ timeout: 30000 });
    await deny_update.click();

    await browser.pause(10000);

    let sign_in_sso = await $('//*[@name="button-login-sso"]'); // XPath expression for input-email
    await sign_in_sso.waitForDisplayed({ timeout: 30000 });
    await sign_in_sso.click();

    await browser.pause(10000);

    let company_name = await $('//*[@name="input-company-name"]'); // XPath expression for input-email
    await company_name.waitForDisplayed({ timeout: 30000 });
    await company_name.setValue("visa");
    await browser.pause(5000);


    await browser.pause(10000);

    let login_company = await $('//*[@name="button-sso-login"]'); // XPath expression for input-email
    await login_company.waitForDisplayed({ timeout: 30000 });
    await login_company.click();
    await browser.pause(5000);


    let click_continue = await $('//*[@name="Continue"]'); // XPath expression for input-email
    await click_continue.waitForDisplayed({ timeout: 30000 });
    await click_continue.click();
    await browser.pause(10000);


    let enter_email = await $('//*[@name="Enter your email, phone, or Skype."]'); // XPath expression for input-email
    await enter_email.waitForDisplayed({ timeout: 30000 });
    await enter_email.click();
    // await browser.keys("testuser@SlateDigitalInc.onmicrosoft.com");
    await enter_email.addValue("testuser@SlateDigitalInc.onmicrosoft.com");
    await enter_email.setValue("testuser@SlateDigitalInc.onmicrosoft.com");
    
    // await enter_email.setValue("testuser@SlateDigitalInc.onmicrosoft.com");
    const availableContexts = await browser.getContexts();
    console.log("The Context Are");
    console.log("Available Contexts:", availableContexts);
    await browser.pause(5000);

    let next_button = await $('//*[@name="Next"]'); // XPath expression for input-email
    await next_button.waitForDisplayed({ timeout: 30000 });
    await next_button.click();
    await browser.pause(15000);

    let psswrd_input = await $('//*[@name="Enter the password for testuser@slatedigitalinc.onmicrosoft.com"]'); // XPath expression for input-email
    await psswrd_input.waitForDisplayed({ timeout: 30000 });
    await psswrd_input.click();
    await psswrd_input.setValue("zjy5tgw_vkw5GKU.bgf");
    await browser.pause(10000);


    let sign_in = await $('//*[@name="Sign in"]'); // XPath expression for input-email
    await sign_in.waitForDisplayed({ timeout: 30000 });
    await sign_in.click();
    await browser.pause(10000);

    let click_yes = await $('//*[@name="Yes"]'); // XPath expression for input-email
    await click_yes.waitForDisplayed({ timeout: 30000 });
    await click_yes.click();
    await browser.pause(15000);
    










    // let enter_username = await $("#input-email"); // Assuming "button-search" is the ID
    // await enter_username.waitForDisplayed({ timeout: 90000 });
    // await enter_username.setValue("vasyl+cmobile@slateteams.com");

    // let password = await $("#input-password"); // Assuming "button-search" is the ID
    // await password.waitForDisplayed({ timeout: 90000 });
    // await password.setValue("PSQYmRvDUi1");

    // let login = await $("#button-login"); // Assuming "button-search" is the ID
    // await login.waitForDisplayed({ timeout: 90000 });
    // await login.click();

    // await browser.pause(40000);

    // let filter = await $('//*[@type="XCUIElementTypeOther" and ./parent::*[@name="button-filters"]]/*[@type="XCUIElementTypeImage"]'); // XPath expression for input-email
    // await filter.waitForDisplayed({ timeout: 30000 });
    // await filter.click();

    // await browser.pause(15000);
    
    // let chose_item = await $('//*[@type="XCUIElementTypeCollectionView" and ./preceding-sibling::*[@type="XCUIElementTypeOther"]]/*[2]/*[@type="XCUIElementTypeOther"]/*[@type="XCUIElementTypeImage"]'); // XPath expression for input-email
    // await chose_item.waitForDisplayed({ timeout: 30000 });
    // await chose_item.click();

    // await browser.pause(15000);

    // let items = await $('//*[@name="Vertical scroll bar, 2 pages"]'); // XPath expression for input-email
    // await items.waitForDisplayed({ timeout: 30000 });
    // await items.click();

    // await browser.pause(15000);

    // let values_enter = await $('//*[@type="XCUIElementTypeTextView"]/*[1]'); // XPath expression for input-email
    // await values_enter.waitForDisplayed({ timeout: 30000 });
    // await values_enter.setValue("Typing some value");

    // await browser.pause(15000);

    // let done = await $('//*[@name="button-text-done"]'); // XPath expression for input-email
    // await done.waitForDisplayed({ timeout: 30000 });
    // await done.click();

    // await browser.pause(20000);

    // let menu_item = await $('//*[@name="button-3dots-menu"]'); // XPath expression for input-email
    // await menu_item.waitForDisplayed({ timeout: 30000 });
    // await menu_item.click();

    // await browser.pause(20000);

    // let clear_workspace = await $('//*[@name="Clear Workspace"]'); // XPath expression for input-email
    // await clear_workspace.waitForDisplayed({ timeout: 30000 });
    // await clear_workspace.click();


    // await browser.pause(20000);

    // let clear_workspace_1 = await $('//*[@name="button-сlear-workspace"]                                                                                                                                `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````11111111111111111111111111111111111111111111111111111111111111111    ``````````````````````````````````````````````````````````````````````````````````````````````````````1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````       ````                                                                                                                                                                                                                                                                                                                                                                                                                      '); // XPath expression for input-email
    // await clear_workspace_1.waitForDisplayed({ timeout: 30000 });
    // await clear_workspace_1.click();

    // await browser.pause(20000);

    // let menu = await $("#button-3dots-menu"); // Assuming "button-search" is the ID
    // await menu.waitForDisplayed({ timeout: 90000 });
    // await menu.click();
    
  });
  













  // it("Changes color", async () => {
  //   var color = await $("id=input-email");
  //   await driver.execute("lambda-hook: {\"action\": \"setTestStatus\",\"arguments\": {\"status\":\"passed\", \"remark\":\"This is a sample remark for failed test \"}}");
  //   await color.waitForDisplayed({ timeout: 30000 });
  //   await color.click();
  //   await color.click();
  // });

  

  // it("Changes text", async () => {
  //   var text = await $("id=Text");
  //   await text.waitForDisplayed({ timeout: 30000 });
  //   await text.click();
  // });

  // it("Toast", async () => {
  //   var toast = await $("id=toast");
  //   await toast.waitForDisplayed({ timeout: 30000 });
  //   await toast.click();
  // });

  // it("Notification", async () => {
  //   var nf = await $("id=notification");
  //   await nf.waitForDisplayed({ timeout: 30000 });
  //   await nf.click();
  // });

  // it("Geolocation", async () => {
  //   var geo = await $("id=geoLocation");
  //   await geo.waitForDisplayed({ timeout: 30000 });
  //   await geo.click();

  //   driver.back();
  // });

  // it("SpeedTest", async () => {
  //   var st = await $("id=speedTest");
  //   await st.waitForDisplayed({ timeout: 30000 });
  //   await st.click();

  //   await browser.pause(10000);
    
  //   driver.back();
  // });

  // More test cases...

});
