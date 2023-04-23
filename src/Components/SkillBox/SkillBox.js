import React from "react";
import "./SkillBox.css";
function SkillBox(props) {
    
    return (
        <>
       <div>
       
                <div className="item">{props.item[0].title}</div>
                <div className="bars">
                    <div className="progress" style={{width :`${props.item[0].val}%`}}></div>
                </div>


                <div className="item">{props.item[1].title}</div>
                <div className="bars">
                    <div className="progress" style={{width :`${props.item[1].val}%`}}></div>
                </div>

                <div className="item">{props.item[2].title}</div>
                <div className="bars">
                    <div className="progress" style={{width :`${props.item[2].val}%`}}></div>
                </div>

                <div className="item">{props.item[3].title}</div>
                <div className="bars">
                    <div className="progress" style={{width :`${props.item[3].val}%`}}></div>
                </div>

                <div className="item">{props.item[4].title}</div>
                <div className="bars">
                    <div className="progress" style={{width :`${props.item[4].val}%`}}></div>
                </div>

                <div className="item">{props.item[5].title}</div>
                <div className="bars">
                    <div className="progress" style={{width :`${props.item[5].val}%`}}></div>
                </div>

                <div className="item">{props.item[6].title}</div>
                <div className="bars">
                    <div className="progress" style={{width :`${props.item[6].val}%`}}></div>
                </div>

                <div className="item">{props.item[7].title}</div>
                <div className="bars">
                    <div className="progress" style={{width :`${props.item[7].val}%`}}></div>
                </div>

        </div>
        </>  
    );
}
export default SkillBox;
