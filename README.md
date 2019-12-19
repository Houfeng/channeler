<pre align="center">

 ██████╗██╗  ██╗ █████╗ ███╗   ██╗███╗   ██╗███████╗██╗     ███████╗██████╗ 
██╔════╝██║  ██║██╔══██╗████╗  ██║████╗  ██║██╔════╝██║     ██╔════╝██╔══██╗
██║     ███████║███████║██╔██╗ ██║██╔██╗ ██║█████╗  ██║     █████╗  ██████╔╝
██║     ██╔══██║██╔══██║██║╚██╗██║██║╚██╗██║██╔══╝  ██║     ██╔══╝  ██╔══██╗
╚██████╗██║  ██║██║  ██║██║ ╚████║██║ ╚████║███████╗███████╗███████╗██║  ██║
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝
                                                                            
</pre>

# Channeler

Channeler 是一个专注简化「Browser & Node」进程或线程间通讯的库。

## 浏览器环境

### 框架页 (iframe)

父页面
```ts
import { IframeChannel } from "channeler";

//自动创建一个「隐藏的 iframe」
const channel = new IframeChannel({
  url: "//localhost:6002/iframe-child.html",
});

//关联一个现有 iframe
const channel = new IframeChannel({
  sender: document.frames[0]
});

```

子页面
```ts
import { IframeChannel } from "channeler";

//通过 channel 可和父页面双向通讯
const channel = new IframeChannel();
```

### 页面 (Page)

当前页面
```ts
import { PageChannel } from "channeler";

//自动打弄一个新页面
const channel = new PageChannel({
  url: "//localhost:6002/page-child.html",
});

//关联到指定的页面
const win = window.open('...')
const channel = new PageChannel({
  sender: win,
});
```

新开页面
```ts
import { PageChannel } from "channeler";

//通过 channel 可和父页面双向通讯
const channel = new PageChannel();
```

### 工作线程 (Web Worker)

当前页面
```ts
import { WorkerChannel } from "channeler";

//通过 worker 脚本 url 创建 channel
const channel = new WorkerChannel({
  url: "//localhost:6002/worker.js",
});

//不指定 url，自动创建一个 worker
const channel = new WorkerChannel();
```

工作线程
```ts
import { WorkerChannel } from "channeler";

//通过 channel 可和所属页面双向通讯
const channel = new WorkerChannel();
```

## Node 环境

TODO://

## 可用 API

无论在哪个环境使用那哪种 Channel，都有一致的 API，如下是 Channel 实例上可用的公开方法

获取或设定远程数据
```ts
/**
 * 调用一个远程上下文中的变量，目标可以是「方法、普通变量」
 * @param path 远程变量的 JS Path，比如 location.href
 * @param args 如果 path 指向的是函数，args 将作为函数的参数
 */
invoke<R = any>(path: string, ...args: any[]): Promise<R>;

/**
 * 设定一个远程变量值
 * @param path 远程变量 JS Path
 * @param value 要设定的值
 */
set<T>(path: string, value: T): void;

/**
 * 获取一个远程量变量值
 * @param path 远程变量 JS Path
 */
get<R>(path: string): Promise<R>;
```

在远程执行一个函数
```ts
/**
 * 在通道的另一端执行一个函数，并把执行结果返回
 * @param fn 远程执行的函数（函数的执行上下文是远程，不可引用当前作用域名变量）
 * @param params 传递给执行函数的参数对象
 */
execute<R = any, P = any>(fn: (params?: P) => R, params?: P): Promise<R>;
```


订阅或发布数据
```ts
/**
 * 向一个数据通道中发送数据
 * @param name 数据通道名称
 * @param data 要发送的数据
 */
pub<T = any>(name: string, data: T): void;

/**
 * 订阅一个数据通道中的数据
 * @param name 数据通道名称
 * @param handler 数据接收处理函数
 */
sub<T = any>(name: string, handler: (data: T) => void): void;
```