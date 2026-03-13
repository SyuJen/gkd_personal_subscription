import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 9,
      name: '功能类-自动查看原图',
      desc: '自动点击底部左侧[查看原图]按钮',
      activityIds: ['.ui.chatting.gallery.ImageGalleryUI', '.ui.LauncherUI'],
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            'Button[text^="查看"][clickable=true][visibleToUser=true]',
            'Button[clickable=true][text^="查看"][visibleToUser=true]',
          ],
          exampleUrls:
            'https://m.gkd.li/57941037/6bb9e68a-43f5-4482-96b1-899cc86fef32',
          snapshotUrls: [
            'https://i.gkd.li/i/13523031',
            'https://i.gkd.li/i/17698956',
            'https://i.gkd.li/i/19515095',
            'https://i.gkd.li/i/19645122', // 无法快速查询
          ],
        },
        {
          key: 1,
          activityIds: '.ui.LauncherUI',
          matches: '[text^="原图"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25009442',
        },
      ],
    },
    {
      key: 10,
      name: '开屏广告-微信小程序',
      fastQuery: true,
      matchTime: 10000,
      forcedTime: 10000,
      // actionMaximum: 1, // 经常需要点2次，首次点击过早大概率跳不过
      priorityTime: 10000,
      activityIds: [
        '.plugin.appbrand.ui.AppBrandUI',
        '.plugin.appbrand.launching.AppBrandLaunchProxyUI',
      ],
      rules: [
        {
          actionDelay: 800, // 过早点击首次大概率跳不过
          matches: [
            '[text="广告"][visibleToUser=true]',
            '[text="跳过"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/12785183',
            'https://i.gkd.li/i/13306883',
            'https://i.gkd.li/i/13407275',
            'https://i.gkd.li/i/15108441',
          ],
        },
      ],
    },
  ],
});
