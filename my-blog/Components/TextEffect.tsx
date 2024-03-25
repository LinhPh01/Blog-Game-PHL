import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Nơi update meta',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'Thảo luận',
                1500,
                'Đưa ra lối chơi',
                1500,
                'về game',
                1500
            ]}
            speed={20}
            className='text-[2rem] md:text-[3rem] text-[#60A5FA] font-semibold uppercase'
            repeat={Infinity}
        />
    );
};
export default TextEffect