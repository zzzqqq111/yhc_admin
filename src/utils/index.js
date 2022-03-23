import { Message } from "element-ui";
import request from './request'
const messages = ({type, message}) => {
  Message({
    message,
    type,
    duration: 3 * 1000,
  });
};

export { messages, request };
