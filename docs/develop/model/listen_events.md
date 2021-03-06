# 事件监听

## 公域消息事件的监听

首先需要订阅事件`public_guild_messages`

```python
intents = botpy.Intents(public_guild_messages=True) 
client = MyClient(intents=intents)
```

| 对应函数                                             | 说明          |
| ------------------------------------------------ | ----------- |
| on_at_message_create(self, message: Message)     | 当收到@机器人的消息时 |
| on_public_message_delete(self, message: Message) | 当频道的消息被删除时  |

- **注：需要引入`Message`**

```python
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        """
        此处为处理该事件的代码
        """
    async def on_public_message_delete(self, message: Message):
        """
        此处为处理该事件的代码
        """
```

## 消息事件的监听

- **仅 私域 机器人能够设置此 intents**

首先需要订阅事件`guild_messages`

```python
intents = botpy.Intents(guild_messages=True) 
client = MyClient(intents=intents)
```

| 对应函数                                      | 说明                                                             |
| ----------------------------------------- | -------------------------------------------------------------- |
| on_message_create(self, message: Message) | 发送消息事件，代表频道内的全部消息，而不只是 at 机器人的消息。内容与 AT_MESSAGE_CREATE 相同 |
| on_message_delete(self, message: Message) | 删除（撤回）消息事件                                                     |

- **注：需要引入`Message`**

```python
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_message_create(self, message: Message):
        """
        此处为处理该事件的代码
        """
    async def on_message_delete(self, message: Message):
        """
        此处为处理该事件的代码
        """
```

## 私信事件的监听

首先需要订阅事件`direct_message`

```python
intents = botpy.Intents(direct_message=True) 
client = MyClient(intents=intents)
```

| 对应函数                                                   | 说明               |
| ------------------------------------------------------ | ---------------- |
| on_direct_message_create(self, message: DirectMessage) | 当收到用户发给机器人的私信消息时 |
| on_direct_message_delete(self, message: DirectMessage) | 删除（撤回）消息事件       |

- **注：需要引入`DirectMessage`**

```python
from botpy.message import DirectMessage

class MyClient(botpy.Client):
    async def on_direct_message_create(self, message: DirectMessage):
        """
        此处为处理该事件的代码
        """
    async def on_direct_message_delete(self, message: DirectMessage):
        """
        此处为处理该事件的代码
        """
```

## 消息相关互动事件的监听

首先需要订阅事件`guild_message_reactions`

```python
intents = botpy.Intents(guild_message_reactions=True) 
client = MyClient(intents=intents)
```

| 对应函数                                                 | 说明        |
| ---------------------------------------------------- | --------- |
| on_message_reaction_add(self, reaction: Reaction)    | 为消息添加表情表态 |
| on_message_reaction_remove(self, reaction: Reaction) | 为消息删除表情表态 |

- **注：需要引入`Reaction`**

```python
from botpy.reaction import Reaction

class MyClient(botpy.Client):
    async def on_message_reaction_add(self, reaction: Reaction):
        """
        此处为处理该事件的代码
        """
    async def on_message_reaction_remove(self, reaction: Reaction):
        """
        此处为处理该事件的代码
        """
```

## 频道事件的监听

首先需要订阅事件`guilds`

```python
intents = botpy.Intents(guilds=True) 
client = MyClient(intents=intents)
```

| 对应函数                                      | 说明            |
| ----------------------------------------- | ------------- |
| on_guild_create(self, guild: Guild)       | 当机器人加入新guild时 |
| on_guild_update(self, guild: Guild)       | 当guild资料发生变更时 |
| on_guild_delete(self, guild: Guild)       | 当机器人退出guild时  |
| on_channel_create(self, channel: Channel) | 当channel被创建时  |
| on_channel_update(self, channel: Channel) | 当channel被更新时  |
| on_channel_delete(self, channel: Channel) | 当channel被删除时  |

- **注：需要引入`Guild`和`Channel`**

```python
from botpy.guild import Guild
from botpy.channel import Channel

class MyClient(botpy.Client):
    async def on_guild_create(self, guild: Guild):
        """
        此处为处理该事件的代码
        """
    async def on_guild_update(self, guild: Guild):
        """
        此处为处理该事件的代码
        """
    async def on_guild_delete(self, guild: Guild):
        """
        此处为处理该事件的代码
        """
    async def on_channel_create(self, channel: Channel):
        """
        此处为处理该事件的代码
        """
    async def on_channel_update(self, channel: Channel):
        """
        此处为处理该事件的代码
        """
    async def on_channel_delete(self, channel: Channel):
        """
        此处为处理该事件的代码
        """
```

## 频道成员事件的监听

首先需要订阅事件`guild_members`

```python
intents = botpy.Intents(guild_members=True) 
client = MyClient(intents=intents)
```

| 对应函数                                         | 说明       |
| -------------------------------------------- | -------- |
| on_guild_member_add(self, member: Member)    | 当成员加入时   |
| on_guild_member_update(self, member: Member) | 当成员资料变更时 |
| on_guild_member_remove(self, member: Member) | 当成员被移除时  |

- **注：需要引入`GuildMember`**

```python
from botpy.user import Member

class MyClient(botpy.Client):
    async def on_guild_member_add(self, member: Member):
        """
        此处为处理该事件的代码
        """
    async def on_guild_member_update(self, member: Member):
        """
        此处为处理该事件的代码
        """
    async def on_guild_member_remove(self, member: Member):
        """
        此处为处理该事件的代码
        """
```

## 互动事件的监听

首先需要订阅事件`interaction`

```python
intents = botpy.Intents(interaction=True) 
client = MyClient(intents=intents)
```

| 对应函数                                                  | 说明               |
| ----------------------------------------------------- | ---------------- |
| on_interaction_create(self, interaction: Interaction) | 当收到用户发给机器人的私信消息时 |

- **注：需要引入`Interaction`**

```python
from botpy.interaction import Interaction

class MyClient(botpy.Client):
    async def on_interaction_create(self, interaction: Interaction):
        """
        此处为处理该事件的代码
        """
```

## 消息审核事件的监听

首先需要订阅事件`message_audit`

```python
intents = botpy.Intents(message_audit=True) 
client = MyClient(intents=intents)
```

| 对应函数                                                 | 说明      |
| ---------------------------------------------------- | ------- |
| on_message_audit_pass(self, message: MessageAudit)   | 消息审核通过  |
| on_message_audit_reject(self, message: MessageAudit) | 消息审核不通过 |

- **注：需要引入`MessageAudit`**

```python
from botpy.message import MessageAudit

class MyClient(botpy.Client):
    async def on_message_audit_pass(self, message: MessageAudit):
        """
        此处为处理该事件的代码
        """
    async def on_message_audit_reject(self, message: MessageAudit):
        """
        此处为处理该事件的代码
        """
```

## 论坛事件的监听

- **仅 私域 机器人能够设置此 intents**

首先需要订阅事件`forums`

```python
intents = botpy.Intents(forums=True) 
client = MyClient(intents=intents)
```

| 对应函数                                                          | 说明         |
| ------------------------------------------------------------- | ---------- |
| on_forum_thread_create(self, thread: Thread)                  | 当用户创建主题时   |
| on_forum_thread_update(self, thread: Thread)                  | 当用户更新主题时   |
| on_forum_thread_delete(self, thread: Thread)                  | 当用户删除主题时   |
| on_forum_post_create(self, post: Post)                        | 当用户创建帖子时   |
| on_forum_post_delete(self, post: Post)                        | 当用户删除帖子时   |
| on_forum_reply_create(self, reply: Reply)                     | 当用户回复评论时   |
| on_forum_reply_delete(self, reply: Reply)                     | 当用户删除评论时   |
| on_forum_publish_audit_result(self, auditresult: AuditResult) | 当用户发表审核通过时 |

- **注：需要引入`Thread`、`Post`、`Reply`和`AuditResult`**

```python
from botpy.forum import Thread
from botpy.types.forum import Post, Reply, AuditResult

class MyClient(botpy.Client):
    async def on_forum_thread_create(self, thread: Thread):
        """
        此处为处理该事件的代码
        """
    async def on_forum_thread_update(self, thread: Thread):
        """
        此处为处理该事件的代码
        """
    async def on_forum_thread_delete(self, thread: Thread):
        """
        此处为处理该事件的代码
        """
    async def on_forum_post_create(self, post: Post):
        """
        此处为处理该事件的代码
        """
    async def on_forum_post_delete(self, post: Post):
        """
        此处为处理该事件的代码
        """
    async def on_forum_reply_create(self, reply: Reply):
        """
        此处为处理该事件的代码
        """
    async def on_forum_reply_delete(self, reply: Reply):
        """
        此处为处理该事件的代码
        """
    async def on_forum_publish_audit_result(self, auditresult: AuditResult):
        """
        此处为处理该事件的代码
        """
```

## 音频事件的监听

首先需要订阅事件`audio_action`

```python
intents = botpy.Intents(audio_action=True) 
client = MyClient(intents=intents)
```

| 对应函数                                 | 说明      |
| ------------------------------------ | ------- |
| on_audio_start(self, audio: Audio)   | 音频开始播放时 |
| on_audio_finish(self, audio: Audio)  | 音频播放结束时 |
| on_audio_on_mic(self, audio: Audio)  | 上麦时     |
| on_audio_off_mic(self, audio: Audio) | 下麦时     |

- **注：需要引入`Audio`**

```python
from botpy.audio import Audio

class MyClient(botpy.Client):
    async def on_audio_start(self, audio: Audio):
        """
        此处为处理该事件的代码
        """
    async def on_audio_finish(self, audio: Audio):
        """
        此处为处理该事件的代码
        """
    async def on_audio_on_mic(self, audio: Audio):
        """
        此处为处理该事件的代码
        """
    async def on_audio_off_mic(self, audio: Audio):
        """
        此处为处理该事件的代码
        """
```

## 订阅事件的方法

## 方法一：

```python
intents = botpy.Intents() 
client = MyClient(intents=intents)
```

在Intents中填入对应的[参数](#参数列表)

例子：

```python
intents = botpy.Intents(public_guild_messages=True, direct_message=True, guilds=True)
```

## 方法二：

```python
intents = botpy.Intents.none()
```

然后打开对应的订阅([参数列表](#参数列表))

```python
intents.public_guild_messages=True
intents.direct_message=True
intents.guilds=True
```

- **说明**

方法二对应的快捷订阅方式为

1. 订阅所有事件

```python
intents = botpy.Intents.all()
```

2. 订阅所有的公域事件

```python
intents = botpy.Intents.default()
``` 

## 参数列表

| 参数                      | 含义                                 |
| ----------------------- | ---------------------------------- |
| public_guild_messages   | 公域消息事件                             |
| guild_messages          | 消息事件 **(仅 `私域` 机器人能够设置此 intents)** |
| direct_message          | 私信事件                               |
| guild_message_reactions | 消息相关互动事件                           |
| guilds                  | 频道事件                               |
| guild_members           | 频道成员事件                             |
| interaction             | 互动事件                               |
| message_audit           | 消息审核事件                             |
| forums                  | 论坛事件 **(仅 `私域` 机器人能够设置此 intents)** |
| audio_action            | 音频事件                               |
