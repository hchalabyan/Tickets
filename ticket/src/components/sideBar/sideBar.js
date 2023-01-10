import React, {useState} from "react";
import classes from "./sideBar.module.scss";
import {NavLink} from "react-router-dom";

const SideBar = () => {
    const checkboxObj = [
        {id:0, name:"все", value:"all"},
        {id:1, name:"без пересадок", value:"withoutTransit"},
        {id:2, name:"1 пересадка",value:"oneTransit"},
        {id:3, name:"2 пересадки",value:"twoTransit"},
        {id:4, name:"3 пересадки",value:"threeTransit"},

    ]
    const [checkedArr, setCheckedArr] = useState([])
    const handleChange = (id) => {
        const selectedCheckboxes = checkedArr
        const findIdx = selectedCheckboxes.indexOf(id);
        if (findIdx > -1) {
            selectedCheckboxes.splice(findIdx, 1);
        } else {
            selectedCheckboxes.push(id);
        }
        console.log("selectedCheckboxes", selectedCheckboxes)
       setCheckedArr([...selectedCheckboxes])

    }
    console.log(checkedArr)
    return(
        <div className={classes.SideBar}>
            <p>валюта</p>
            <div className={classes.TabWrapper}>
                <NavLink to="/"  className={({ isActive }) => (isActive ? classes.active : classes.inactive)}>RUB</NavLink>
                <NavLink to="/usd" className={({ isActive }) => (isActive ? classes.active : classes.inactive)}>USD</NavLink>
                <NavLink to="/eur"  className={({ isActive }) => (isActive ? classes.active : classes.inactive)}>EUR</NavLink>
            </div>
            <p>количество пересадок</p>
            
            <div className={classes.CheckboxWrapper}>
                {checkboxObj.map((item)=>{
                    return(
                        <label key={item.id}>
                            <input type="checkbox" onChange={() => handleChange(item.id)} value={item.value} checked={checkedArr.includes(item.id)}/>
                            <span>{item.name}</span>
                        </label>
                    )
                })}

                {/*<label htmlFor="">*/}
                {/*    <input type="checkbox" onChange={(e) => handleChange(e)} value="withoutTransit" />*/}
                {/*    <span>без пересадок</span>*/}

                {/*</label>*/}
                {/*<label>*/}
                {/*    <input type="checkbox" onChange={(e) => handleChange(e)} value="oneTransit" />*/}
                {/*    <span>1 пересадка</span>*/}

                {/*</label>*/}
                {/*<label>*/}
                {/*    <input type="checkbox" onChange={(e) => handleChange(e)} value="twoTransit" />*/}
                {/*    <span>2 пересадки</span>*/}

                {/*</label>*/}
                {/*<label>*/}
                {/*    <input type="checkbox" onChange={(e) => handleChange(e)} value="threeTransit" />*/}
                {/*    <span>3 пересадки</span>*/}
                {/*</label>*/}

            </div>
            <p></p>
        </div>
    )
}

export default SideBar;