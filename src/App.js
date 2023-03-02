import React, {useState, useRef, useEffect} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";





function App() {
    const LOCAL_STORAGE_KEY = `Cookie Name`
    const [getSpin, setSpin] = useState(`none`)
    const [getColor, setColor] = useState(`none`)
    const [getCookie, setCookie] = useState(`https://cdn.shopify.com/s/files/1/0551/6060/2784/files/Cookie-render-u.png?v=1664476078&width=325`)
    const [getLevel, setLevel] = useState(1)
    const [getNumber, setNumber] = useState(1)
    const [getName, setName] = useState(``)
    const cookieNameRef = useRef()

    useEffect(()=> {
       const storedName =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedName) setName(storedName)
    }, [])
    // eslint-disable-next-line
    useEffect(()=> {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getName))
    }, [getName])
    function changeNumber() {
        setNumber(getNumber + getLevel)

    }
    function upgradeCookie(cost, level) {
        if (getNumber >= Number(cost)) {
            setNumber(getNumber - cost)
            setLevel(level)
        }
    }
    function changeCookieColor() {
        if (getNumber > 299) {
            setCookie(`https://upload.wikimedia.org/wikipedia/commons/7/70/Cookie.png`)
            setNumber(getNumber - 300)
        }

    }
    function changeBackgroundColor() {
        if (getNumber > 399) {
            setColor(`gray`)
            setNumber(getNumber - 400)
        }

    }
    function spinCookie() {
        if (getNumber > 299) {
            setSpin(`spin`)
            setNumber(getNumber - 300)
        }

    }
    function giveName() {
       const name = cookieNameRef.current.value
        if (name === ``) return
        setName(name)
        cookieNameRef.current.value = null
    }

    return (
        <Container className="d-flex gap-5" style={{backgroundColor: getColor}} >

            <div className="d-flex flex-column align-items-center col gap-2"  >
                <h1>{getName}</h1>
                <img onClick={changeNumber} className={getSpin} src={getCookie} alt=""/>
                <h1>Points: {getNumber}</h1>
                <input ref={cookieNameRef} type="text" placeholder="Give name to Cookie"/>
                <button onClick={giveName} >Submit</button>
            </div>
            <div className="col-5 text-center">
               <h1>Upgrades:</h1>
                <div className="d-flex gap-5 justify-content-between">
                    <h6>100 points - click adds 2 points</h6>
                    <button onClick={()=>upgradeCookie(100,2)} >Upgrade</button>
                </div>
                <div className="d-flex gap-5 justify-content-between">
                    <h6>200 points - click adds 3 points</h6>
                    <button onClick={() => upgradeCookie(200, 3)} >Upgrade</button>
                </div>
                <div className="d-flex gap-5 justify-content-between">
                    <h6>500 points - click adds 4 points</h6>
                    <button onClick={() => upgradeCookie(500, 4)} >Upgrade</button>
                </div>
                <div className="d-flex gap-5 justify-content-between">
                    <h6>300 points - change cookie image</h6>
                    <button onClick={changeCookieColor}>Upgrade</button>

                </div>
                <div className="d-flex gap-5 justify-content-between">
                    <h6>400 points - change background color</h6>
                    <button onClick={changeBackgroundColor} >Upgrade</button>
                </div>
                <div className="d-flex gap-5 justify-content-between">
                    <h6>300 points - make cookie spin</h6>
                    <button onClick={spinCookie} >Upgrade</button>
                </div>




            </div>

        </Container>
  );
}

export default App;
