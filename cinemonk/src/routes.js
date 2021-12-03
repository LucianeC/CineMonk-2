import { BrowserRounter, Switch, Route } from "react-router-dom";
import Conclusion from './pages/conclusion';


export default function Routes() {
    return (
        <BrowserRounter>
            <Switch>
                <Route path="/conclusion" exact={true} component={Conclusion} />
            </Switch>
        </BrowserRounter>
    )
}