const test_app = require('../src/config/version');


test("🔥 Get App Version.", async () => {
    expect(await test_app.version.get()).toEqual("1.0.1");
});

test("🏭 Set App Version. BAD [ ] ", async () => {
    expect(await test_app.version.set()).toEqual(false);
});

test("🏭 Set App Version. BAD [ 1..23 ]", async () => {
    expect(await test_app.version.set('1..23')).toEqual(false);
});

test("🏭 Set App Version. BAD [ 1=.23 ] ", async () => {
    expect(await test_app.version.set('1=.23')).toEqual(false);
});

test("🏭 Set App Version. OK", async () => {
    expect(await test_app.version.set('1.45.23')).toEqual(true);
});