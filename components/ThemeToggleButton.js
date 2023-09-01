import useTheme from '@/lib/theme'
import { Sun, Moon } from '@/svg';

const ThemeToggleButton = () => {
    const { dark, toggleDark } = useTheme();

    return (
        <button onClick={toggleDark}>
            {dark ? <Sun height={28} className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500' /> : <Moon height={28} className='text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500' />}
        </button>
    );
};

export default ThemeToggleButton;