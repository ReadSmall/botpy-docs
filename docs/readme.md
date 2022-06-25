---
home: true
actions:
- text: 开始使用
  link: /develop/basic/
  type: primary
- text: 项目简介
  link: /guide/
  type: secondary
footer: MIT Licensed | Copyright © 2022-present 小念
---

### 起步就如此简单

```bash
pip install qq-botpy
```

```python
import botpy
from botpy.types.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await self.api.post_message(
          channel_id=message.channel_id, 
          content="content"
        )

intents = botpy.Intents(public_guild_messages=True) 
client = MyClient(intents=intents)
client.run(appid={appid}, token={token})
```
