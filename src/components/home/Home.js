
import videoHomepage from '../../file/hero.mp4';
import { useSelector } from 'react-redux';
const Home = () => {
    const isLogin = useSelector(state => state?.user?.isLogin)
    const account = useSelector(state => state?.user?.account)
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomepage} type='video/mp4' />
            </video>
            <div className='homepage-container'>
                <div className='title-1'>

                </div>
                <div className='title-1'>
                    thu ngu
                </div>
                <button>
                    Get stater
                </button>
            </div>
        </div>

    )
}

export default Home;