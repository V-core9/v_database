const app = require('../v_database/config/version');


test("🔥 Get App Version.", async () => {
    expect(await app.version.get()).toEqual(false);
});

test("🏭 Set App Version. BAD [ ] ", async () => {
    expect(await app.version.set()).toEqual(false);
});

test("🏭 Set App Version. BAD [ 1..23 ]", async () => {
    expect(await app.version.set('1..23')).toEqual(false);
});

test("🏭 Set App Version. BAD [ 1=.23 ] ", async () => {
    expect(await app.version.set('1=.23')).toEqual(false);
});


test("🏭 Set App Version. BAD [ 1.ABS.23 ] ", async () => {
    expect(await app.version.set('1.ABS.23')).toEqual(false);
});

test("🏭 Set App Version. OK", async () => {
    expect(await app.version.set('1.45.23')).toEqual(true);
});

test("🔥 Get App Version.", async () => {
    expect(await app.version.get()).toEqual("1.45.23");
});

