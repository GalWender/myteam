import { ReactComponent as IconQuotes } from '../assets/svg/icon-quotes.svg'
export const MainEnd = () => {
    return <section className="main-end">
        <div className="main-layout main-end-content">
            <h1>Delivering real results for top companies. Some of our <span>success stories.</span></h1>
            <div className='cards-container'>
                <div className='card card1'>
                    <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                    <IconQuotes />
                    <h4>Kady Baker</h4>
                    <h5>Product Manager at Bookmark</h5>
                    <img src={require('../assets/img/avatar-kady.jpg')} alt="" />
                </div>
                <div className='card card2'>
                    <p>  “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                    <IconQuotes />
                    <h4>Aiysha Reese</h4>
                    <h5>Founder of Manage</h5>
                    <img src={require('../assets/img/avatar-aiysha.jpg')} alt="" />
                </div>
                <div className='card card3'>
                    <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                    <IconQuotes />
                    <h4>Arthur Clarke</h4>
                    <h5>Co-founder of MyPhysio</h5>
                    <img src={require('../assets/img/avatar-arthur.jpg')} alt="" />
                </div>
            </div>
        </div>
    </section>
}