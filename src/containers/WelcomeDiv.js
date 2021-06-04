import gostek from '../gostek_muzykajak.png'

const WelcomeDiv = () => {
    return (
        <div className='welcomeDiv'>
            <div>
                <h1>MuzykaJak</h1>
                <h2>Znajdź ludzi, którzy też chcą <br/>zrobić muzykę jak... Ty</h2>
                <button>Zarejestruj się</button>
            </div>
            <img  height='300px' src={gostek} alt="musician"/>      
        </div>
    )
}

export default WelcomeDiv
