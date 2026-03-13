import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 256544886,
  name: 'JohnHsu的GKD订阅',
  version: 20260313,
  author: 'JohnHsu',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/SyuJen/gkd_personal_subscription/issues',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
