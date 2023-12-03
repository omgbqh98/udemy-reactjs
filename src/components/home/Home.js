
import videoHomepage from '../../file/hero.mp4';
const Home = () => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomepage} type='video/mp4' />
            </video>
            <div className='homepage-container'>
                <div className='title-1'>

                </div>
                <div className='title-1'>
                    sdfgfsdgdfgdfgdfgfdgfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                </div>
                <button>
                    Get stater
                </button>
            </div>
        </div>

    )
}

export default Home;