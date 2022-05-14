import {
  BsFillXCircleFill,
  BsQuestionCircleFill,
  BsCheckCircleFill,
} from "react-icons/bs";

export default function IconAnswer({ buttonType }) {
  let icon = '';
  switch (buttonType) {
    case 'red':
      icon = (<BsFillXCircleFill className='icon' />);
      break;
    case 'yellow':
      icon = (<BsQuestionCircleFill className='icon' />);
      break;
    case 'green':
      icon = (<BsCheckCircleFill className='icon' />);
      break;
    default:
      break;
  }
  return icon;
}