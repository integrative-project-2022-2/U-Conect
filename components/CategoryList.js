import React from "react";
import styles from '../styles/profile.module.css'

class CategoryList extends React.Component{

    constructor(props){
        super(props)
        this.items =  props.items
    }
    render(){
        return(
        
        <div className="w-75 bg-success  text-white text-center m-auto p-3 mb-5 rounded shadow">
            <h1>{this.props.children}</h1>
            <p className={styles.title}>{this.props.title}</p>
            <hr></hr>
            {this.items.map((e) =>(
                <p className={styles.infoinfo}>{e}</p>
            ))}
        </div>
        )
            
    
    }


}
export default CategoryList