/// <reference types="node" />
import { DataMessage } from "./DataMessage";
import { EventEmitter } from "events";
import { ExecuteMessage } from "./ExecuteMessage";
import { IChannelOptions } from "./IChannelOptions";
import { IMessageMap } from "./IMessageMap";
import { IReceiver } from "./IReceiver";
import { ISender } from "./ISender";
import { InvokeMessage } from "./InvokeMessage";
import { Message } from "./Message";
import { ReadyMessage } from "./ReadyMessage";
import { ReturnMessage } from "./ReturnMessage";
/**
 * 数据交换通道类
 */
export declare class Channel extends EventEmitter {
    protected options: IChannelOptions;
    protected receiver: IReceiver;
    protected sender: ISender;
    protected context: any;
    protected pendings: IMessageMap;
    constructor(options?: IChannelOptions);
    protected init(options: IChannelOptions): void;
    protected bindMessageReceived(): void;
    protected sendReadyMessage(): void;
    protected checkMessage(message?: Message, event?: any): boolean;
    protected parse(str: string): any;
    protected stringify(obj: any): string;
    protected removePending(id: string): void;
    protected onMessageReceived: (event: any) => void;
    protected onReadyMessageReceived(message: ReadyMessage): void;
    protected onDataMessageReceived(message: DataMessage): void;
    protected onReturnMessageReceived(message: ReturnMessage): void;
    protected onInvokeMessageReceived(message: InvokeMessage): Promise<void>;
    protected onExecuteMessageReceived(message: ExecuteMessage): Promise<void>;
    protected send(message: Message): void;
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
    /**
     * 在通道的另一端执行一个函数，并把执行结果返回
     * @param fn 远程执行的函数（函数的执行上下文是远程，不可引用当前作用域名变量）
     * @param params 传递给执行函数的参数对象
     */
    execute<R = any, P = any>(fn: (params?: P) => R, params?: P): Promise<R>;
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
}
