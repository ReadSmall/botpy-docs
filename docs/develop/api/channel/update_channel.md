# 修改子频道

修改某个子频道的信息。

::: danger 注意

- 公域机器人暂不支持申请，仅私域机器人可用，选择私域机器人后默认开通。
- 注意: 开通后需要先将机器人从频道移除，然后重新添加，方可生效。

:::

## 使用示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        """
        name	            string	子频道名
        position	        int	    排序
        parent_id	        string	分组 id
        private_type	    int	    子频道私密类型 PrivateType
        speak_permission	int	    子频道发言权限 SpeakPermission
        """
        await self.api.update_channel(channel_id="xxxx")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

::: warning 注意

- 要求操作人具有管理子频道的权限，如果是机器人，则需要将机器人设置为管理员。
- 修改成功后，会触发子频道更新事件

:::

## 参数说明

| 字段名    | 必填 | 类型                | 描述       |
| --------- | ---- | ------------------- | ---------- |
| channelId | 是   | string              | 子频道 ID  |
| channel   | 是   | [Channel](#channel) | 子频道对象 |

### Channel

| 字段名    | 类型   | 描述                                       |
| --------- | ------ | ------------------------------------------ |
| name      | string | 子频道名                                   |
| type      | number | 子频道类型 [ChannelType](#channeltype)     |
| position  | number | 排序，必填，而且不能够和其他子频道的值重复 |
| parent_id | string | 分组 ID                                    |

### ChannelType

| 值    | 描述         |
| ----- | ------------ |
| 0     | 文字子频道   |
| 1     | 保留，不可用 |
| 2     | 语音子频道   |
| 3     | 保留，不可用 |
| 4     | 子频道分组   |
| 10005 | 直播子频道   |
| 10006 | 应用子频道   |
| 10007 | 论坛子频道   |

注：由于 QQ 频道还在持续的迭代中，经常会有新的子频道类型增加，文档更新不一定及时，开发者识别 `ChannelType` 时，请注意相关的未知 ID 的处理。

## 返回说明

字段参见 [ChannelRes](#channelres)。

### ChannelRes

| 字段名    | 类型   | 描述                                           |
| --------- | ------ | ---------------------------------------------- |
| id        | string | 子频道 ID                                      |
| guild_id  | string | 频道 ID                                        |
| name      | string | 子频道名                                       |
| type      | number | 子频道类型 [ChannelType](#channeltype)         |
| sub_type  | number | 子频道子类型 [ChannelSubType](#channelsubtype) |
| position  | number | 排序，必填，而且不能够和其他子频道的值重复     |
| parent_id | string | 分组 ID                                        |
| owner_id  | string | 创建人 ID                                      |

### ChannelSubType

| 值  | 描述 |
| --- | ---- |
| 0   | 闲聊 |
| 1   | 公告 |
| 2   | 攻略 |
| 3   | 开黑 |

## 返回示例

`data`：

```json
{
  "id": "2186875",
  "guild_id": "2020131797974366736",
  "name": "update_channel",
  "type": 0,
  "position": 22,
  "parent_id": "1128421",
  "owner_id": null,
  "sub_type": 0
}
```
