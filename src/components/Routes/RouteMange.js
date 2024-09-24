import { } from "react-router-dom/";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import "../Routes/RouterManager.scss";
const RouteManager = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/mycv">
                    <div className="mycv">mycv</div>
                </Route>
                <Route path="/about">
                    <>about</>
                </Route>
                <Route path="/contact">
                    <>contact</>
                </Route>
            </Switch>
        </>
    )
}



export default RouteManager; 