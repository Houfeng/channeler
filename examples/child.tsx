import { IframeChannel } from '../src';

const channel = new IframeChannel();
(window as any).channel = channel;