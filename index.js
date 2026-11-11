// A tiny test plugin: .tfxtest answers and counts how many times it was used.
tfx.command('tfxtest', async (c) => {
  const count = Number((await tfx.storage.get('count')) || 0) + 1;
  await tfx.storage.set('count', String(count));
  await c.reply('✅ *The test plugin works!*\n▸ *Times used:* ' + count);
});
