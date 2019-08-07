describe('Router', () => {
  test('should be', async () => {
    await page.setContent(
      '<div><lit-route path="/test1"><h1>This is test 1</h1></lit-route></div>',
    );
    expect(await page.$('h1')).not.toBeNull();
  });
});
