import useTheme from '@/lib/theme'
import { Sun, Moon } from '@/svg';

const ThemeToggleButton = () => {
    const { dark, toggleDark } = useTheme();

    return (
        <button onClick={toggleDark} className='mx-4'>
            {dark ? <Sun /> : <Moon />}
        </button>
    );
};

export default ThemeToggleButton;