import { Component } from "react";



class SingleClass extends Component{
    constructor(props){
        super(props);
        

    }

    render(){

        const {name, skill , photo, firoz}= this.props;
        
       
        return(
           
            <div className='col-md-4'>
            <div className='team-member text-center py-3'>
                <img src={photo} alt=""/>
                <h2>{name}</h2>
                <p>{skill}</p>
                <h2>{firoz}</h2>
            </div>
        </div>
        )
    }
}

export default SingleClass;