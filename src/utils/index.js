import { Message } from "element-ui";
import request from './request'
const messages = (type, content) => {
  Message({
    message: content,
    type,
    duration: 3 * 1000,
  });
};

export { messages, request };
