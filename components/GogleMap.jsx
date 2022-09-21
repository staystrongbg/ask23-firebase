const GoogleMap = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d515.1095448245826!2d20.523789052983705!3d44.80227987072854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb5c18d0d647e3a0!2zNDTCsDQ4JzA4LjQiTiAyMMKwMzEnMjYuOCJF!5e0!3m2!1ssr!2srs!4v1653395828772!5m2!1ssr!2srs'
      width='100%'
      height='450'
      allowFullScreen=''
      style={{ border: '0' }}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  );
};

export default GoogleMap;
