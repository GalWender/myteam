import { ReactComponent as PatternHome2 } from '../assets/svg/bg-pattern-home-2.svg'
export const MainTop = () => {
    return <section className="main-top">
        <div className="main-layout main-top-content">
            <div className="left">
            <h1>Find the <br/>
            best<span> talent</span></h1>
            </div>
            <div className="right">
                <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            </div>
            <PatternHome2/>
        </div>
    </section>
}