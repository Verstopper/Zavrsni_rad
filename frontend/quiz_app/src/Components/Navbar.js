import React, {Component} from "react";

class NavBar extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (<header>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a className="navbar-brand" href="/homepage">Početna stranica</a>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                            <a className={"nav-item nav-link"} href="/countriesquiz">Kviz</a>
                            <a className={"nav-item nav-link"} href="/slidingpuzzle">Slagalica</a>
                            <a className={"nav-item nav-link"} href="/numbersgame">Igra brojeva</a>
                            <a className={"nav-item nav-link"} href="/memory">Wiki Memory</a>
                            <a className={"nav-item nav-link"} href="/hangman">Wiki Vješala</a>
                            <a className={"nav-item nav-link"} href="/leaderboard">Tablica bodova za kviz</a>

                    </div>
                </div>
            </nav>
        </header>);
    }
}

export default NavBar;