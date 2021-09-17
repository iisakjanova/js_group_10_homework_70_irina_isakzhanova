import React from 'react';
import {CssBaseline} from "@material-ui/core";

import Dishes from "./components/Dishes/Dishes";

const App = () => {
    return (
        <div>
            <CssBaseline />
            <Dishes />
        </div>
    );
};

export default App;