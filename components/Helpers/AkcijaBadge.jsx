const AkcijaBadge = () => {
  return (
    <div
      className='bg-yellow-500 h-16 w-16 flex items-center justify-center text-gray-50 font-bold z-10 absolute -top-1 -right-1   p-2 '
      style={{
        clipPath:
          ' polygon(100% 2%, 100% 100%, 50% 81%, 0% 100%, 0 51%, 0% 0%)',
      }}
    >
      акција
    </div>
  );
};

export default AkcijaBadge;
