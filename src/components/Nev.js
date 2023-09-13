import './css/nev.css'

function Nev() {
    return (
        <div className="main">
            <div className="navbar">
                <div id="backlog" className="colgrid">
                    <h4>Backlog list</h4>
                </div>
                <div id="todo" className="colgrid">
                    <h4>Todo list</h4>
                </div>
                <div id="inprogress" className="colgrid">
                    <h4>Inprogress list</h4>
                </div>
                <div id="done" className="colgrid">
                    <h4>Done list</h4>
                </div>
                <div id="cencel" className="colgrid">
                    <h4>Cencel list</h4>
                </div>
                </div>
            <div />
        </div>
    );
}

export default Nev;