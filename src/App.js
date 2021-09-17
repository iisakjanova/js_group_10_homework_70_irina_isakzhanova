import React from 'react';
import {CssBaseline} from "@material-ui/core";

import Menu from "./containers/Menu/Menu";

const App = () => {
    return (
        <div>
            <CssBaseline />
            <Menu />
        </div>
    );
};

export default App;