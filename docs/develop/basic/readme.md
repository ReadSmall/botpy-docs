# 快速起步

在开始之前，我们建议你先在 [QQ开放平台](https://q.qq.com/) 了解 QQ 频道机器人的运营规则，这非常重要，因为在本文档里，关于这部分的内容将会非常少。如果你并不了解 QQ 频道机器人，后续的文档可能会对你造成疑惑。

## 安装依赖

```bash
pip install qq-botpy
```

## 创建你的第一个 Bot

1. 在 [QQ开放平台](https://q.qq.com/) 申请并创建你的 QQ 机器人。创建沙箱频道，并把你的机器人添加进频道里。（此处不作详细说明）
2. 使用机器人的 `appid` 和 `token` 创建一个 Bot 实例

```python
import botpy

from botpy.types.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.post_message(channel_id=message.channel_id, content=message.content)

intents = botpy.Intents(public_guild_messages=True) 
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```

3. 运行代码，在频道里输入 `@机器人 hello`，你预期会看到如下输出。

```
hello
```

那么恭喜你，你的 QQ 机器人已经可以正常运作了。

> _「这是个人迈出的一小步，但却是人类迈出的一大步。」—— 阿姆斯特朗_

