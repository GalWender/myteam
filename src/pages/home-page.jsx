import { MainEnd } from "../cmps/main-end"
import { MainMiddle } from "../cmps/main-middle"
import { MainTop } from "../cmps/main-top"

export const HomePage = () => {
    return <section className="home-page">
        <MainTop/>
        <MainMiddle/>
        <MainEnd/>
    </section>
}