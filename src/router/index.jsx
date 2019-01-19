import React from 'react'
import Map from './map'
import Routers from './router'
class Rindex extends React.Component{
    render(){
        const {routers}=this.props;
        return <div>
            <Map routers={routers===undefined?Routers:routers}></Map>
        </div>
    }
}
export default Rindex;