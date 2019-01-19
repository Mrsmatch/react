import React from 'react'
import Rindex from 'router'
import {HashRouter as Router} from 'react-router-dom'

class App extends React.Component{
    render(){
        return <div>
            <Router>
               <Rindex></Rindex>
            </Router>
        </div>
    }
}
export default App;