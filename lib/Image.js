//custom loader
//use of next Image in export static
// components/Image.js
import NextImage from 'next/image';

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src;
};

export default function Image(props) {
  return <NextImage {...props} loader={customLoader} />;
}
