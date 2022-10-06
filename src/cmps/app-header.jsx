export const AppHeader = () => {
    return <nav className="app-header main-layout full">
        <div className="header-left">
            <h2 className="logo">myteam</h2>
            <div className="btns-container btns-home-about">
                <button className="btn btn-home">home</button>
                <button className="btn btn-about">about</button>
            </div>
        </div>
            <button className="btn btn-contact-us">contact us</button>
    </nav>
}