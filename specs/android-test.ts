
describe("Proverbial APK", () => {
  
  it("Login and View Collections", async () => {
    let accept_permisson = await $('//*[@name="Allow"]'); // XPath expression for input-email
    await accept_permisson.waitForDisplayed({ timeout: 30000 });
    await accept_permisson.click();

    await browser.pause(15000);

    let enter_username = await $("#input-email"); // Assuming "button-search" is the ID
    await enter_username.waitForDisplayed({ timeout: 90000 });
    await enter_username.setValue("vasyl+cmobile@slateteams.com");

    let password = await $("#input-password"); // Assuming "button-search" is the ID
    await password.waitForDisplayed({ timeout: 90000 });
    await password.setValue("PSQYmRvDUi1");

    let login = await $("#button-login"); // Assuming "button-search" is the ID
    await login.waitForDisplayed({ timeout: 90000 });
    await login.click();

    await browser.pause(40000);

    let filter = await $('//*[@type="XCUIElementTypeOther" and ./parent::*[@name="button-filters"]]/*[@type="XCUIElementTypeImage"]'); // XPath expression for input-email
    await filter.waitForDisplayed({ timeout: 30000 });
    await filter.click();

    await browser.pause(15000);
    
    let chose_item = await $('//*[@type="XCUIElementTypeCollectionView" and ./preceding-sibling::*[@type="XCUIElementTypeOther"]]/*[2]/*[@type="XCUIElementTypeOther"]/*[@type="XCUIElementTypeImage"]'); // XPath expression for input-email
    await chose_item.waitForDisplayed({ timeout: 30000 });
    await chose_item.click();

    await browser.pause(15000);

    let items = await $('//*[@name="Vertical scroll bar, 2 pages"]'); // XPath expression for input-email
    await items.waitForDisplayed({ timeout: 30000 });
    await items.click();

    await browser.pause(15000);

    let values_enter = await $('//*[@type="XCUIElementTypeTextView"]/*[1]'); // XPath expression for input-email
    await values_enter.waitForDisplayed({ timeout: 30000 });
    await values_enter.setValue("Typing some value");

    await browser.pause(15000);

    let done = await $('//*[@name="button-text-done"]'); // XPath expression for input-email
    await done.waitForDisplayed({ timeout: 30000 });
    await done.click();

    await browser.pause(20000);

    let menu_item = await $('//*[@name="button-3dots-menu"]'); // XPath expression for input-email
    await menu_item.waitForDisplayed({ timeout: 30000 });
    await menu_item.click();

    await browser.pause(20000);

    let clear_workspace = await $('//*[@name="Clear Workspace"]'); // XPath expression for input-email
    await clear_workspace.waitForDisplayed({ timeout: 30000 });
    await clear_workspace.click();


    await browser.pause(20000);

    let clear_workspace_1 = await $('//*[@name="button-сlear-workspace"]'); // XPath expression for input-email
    await clear_workspace_1.waitForDisplayed({ timeout: 30000 });
    await clear_workspace_1.click();

    await browser.pause(20000);

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
