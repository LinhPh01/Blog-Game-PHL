import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Nơi update meta',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Thảo luận',
                1000,
                'Đưa ra lối chơi',
                1000,
                'về game',
                1000
            ]}
            speed={20}
            className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
            repeat={Infinity}
        />
    );
};
export default TextEffect