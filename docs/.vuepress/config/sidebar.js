module.exports = {
    sidebar: {
        '/develop/basic/': [
            {
                text: '开发指南',
                children: [
                    '/develop/basic/readme.md',
                ]
            }
        ],
        '/develop/model/': [
            {
                text: '术语',
                children: [
                    '/develop/model/user.md',
                    '/develop/model/api_permission.md',
                    '/develop/model/guild.md',
                    '/develop/model/channel.md',
                    '/develop/model/channel_permission.md',
                    '/develop/model/member.md',
                    '/develop/model/role.md',
                    '/develop/model/message.md',
                    '/develop/model/inline_keyboard.md',
                    '/develop/model/dms.md',
                    '/develop/model/audio.md',
                    '/develop/model/announce.md',
                    '/develop/model/pins_message.md',
                    '/develop/model/emoji.md',
                    '/develop/model/reaction.md',
                    '/develop/model/schedule.md',
                ]
            },
            {
                text: '事件监听',
                children: [
                    '/develop/model/listen_events.md',
                ]
            }
        ],
        '/develop/api/': [
            {
                text: '用户 API',
                children: [
                  '/develop/api/user/me.md',
                  '/develop/api/user/me_guilds.md'
                ],
              },
              {
                text: '频道 API',
                children: [
                  '/develop/api/guild/get_guild.md'
                ],
              },
              {
                text: '子频道 API',
                children: [
                  '/develop/api/channel/get_channel.md',
                  '/develop/api/channel/get_channels.md',
                  '/develop/api/channel/create_channel.md',
                  '/develop/api/channel/update_channel.md',
                  '/develop/api/channel/delete_channel.md',
                ],
              },
              {
                text: '子频道权限 API',
                children: [
                  '/develop/api/channel_permissions/get_channel_permissions.md',
                  '/develop/api/channel_permissions/update_channel_permissions.md',
                  '/develop/api/channel_permissions/get_channel_role_permissions.md',
                  '/develop/api/channel_permissions/update_channel_role_permissions.md',
                ],
              },
              {
                text: '成员 API',
                children: [
                  '/develop/api/member/get_guild_member.md',
                  '/develop/api/member/get_guild_members.md',
                  '/develop/api/member/delete_guild_member.md'
                ],
              },
              {
                text: '频道身份组 API',
                children: [
                  '/develop/api/guild/guild_role/get_guild_roles.md',
                  '/develop/api/guild/guild_role/create_guild_role.md',
                  '/develop/api/guild/guild_role/update_guild_role.md',
                  '/develop/api/guild/guild_role/delete_guild_role.md',
                  '/develop/api/guild/guild_role/create_guild_role_member.md',
                  '/develop/api/guild/guild_role/delete_guild_role_member.md'
                ],
              },
              {
                text: '消息 API',
                children: [
                  '/develop/api/message/get_message.md',
                  '/develop/api/message/post_message.md',
                  '/develop/api/message/recall_message.md',
                  '/develop/api/message/post_ark_message.md',
                  '/develop/api/message/message_template.md',
                  '/develop/api/message/message_format.md',
                  '/develop/api/message/post_reference_messages.md',
                  '/develop/api/message/post_keyboard_message.md',
                ],
              },
              {
                text: '私信 API',
                children: [
                  '/develop/api/dms/create_dms.md',
                  '/develop/api/dms/post_dms.md',
                ],
              },
              {
                text: '表情表态 API',
                children: [
                  '/develop/api/reaction/post_reaction.md',
                  '/develop/api/reaction/delete_reaction.md',
                  '/develop/api/reaction/get_reaction_users.md'
                ],
              },
              {
                text: '禁言 API',
                children: [
                  '/develop/api/mute/mute_all.md',
                  '/develop/api/mute/mute_member.md',
                  '/develop/api/mute/mute_multi_member.md',
                ],
              },
              {
                text: '公告 API',
                children: [
                  '/develop/api/announce/create_guild_announce.md',
                  '/develop/api/announce/delete_guild_announce.md',
                  '/develop/api/announce/create_channel_announce.md',
                  '/develop/api/announce/delete_channel_announce.md',
                ],
              },
              {
                text: '日程 API',
                children: [
                  '/develop/api/schedule/get_schedules.md',
                  '/develop/api/schedule/get_schedule.md',
                  '/develop/api/schedule/post_schedule.md',
                  '/develop/api/schedule/update_schedule.md',
                  '/develop/api/schedule/delete_schedule.md',
                ],
              },
              {
                text: '精华消息 API',
                children: [
                  '/develop/api/pins_message/get_pins_message.md',
                  '/develop/api/pins_message/put_pins_message.md',
                  '/develop/api/pins_message/delete_pins_message.md',
                ],
              },
              {
                text: '音频 API',
                children: [
                  '/develop/api/audio/post_audio.md',
                  '/develop/api/audio/audio_on_mic.md',
                  '/develop/api/audio/audio_off_mic.md',
                ],
              },
              {
                text: '接口权限 API',
                children: ['/develop/api/api_permissions/get_permissions','/develop/api/api_permissions/post_permission.md'],
              },
        ]
    }
}
