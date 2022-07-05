import Image from 'next/image';

const BackArrow = (props: Omit<React.ComponentProps<typeof Image>, "src">) => 
    <Image
        height={32}
        width={32}
        src={'/image/ArrowLeft.png'}
        alt={'/image/ArrowLeft.png'}
        {...props}
    />

export default BackArrow;