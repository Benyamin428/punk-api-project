import FilterItem from "./../FilterItem/FilterItem";
import {useState, useEffect} from "react";

const FiltersList = ({handleCheckbox}) => {

    const [checkedValues, setCheckedValues] = useState([]);

    const checkFilter = (event) => {
        if (event.target.checked == true) {
            setCheckedValues([...checkedValues, event.target.id]);
        }
        else {
            setCheckedValues(checkedValues.filter(checked => !checked.includes(event.target.id)));
        }
    }

    useEffect(() => {
        console.log(checkedValues)
        handleCheckbox(checkedValues);
    }, [checkedValues]);

    return (
        <ul>
            <li>
                <FilterItem checkFilter={checkFilter} id="HighAlcohol" text="High ABV (> 6.0%)" />
            </li>
            <li>
                <FilterItem checkFilter={checkFilter} id="ClassicRange" text="Classic Range" />
            </li>
            <li>
                <FilterItem checkFilter={checkFilter} id="HighAcidity" text="Acidic (ph < 4)" />
            </li>
        </ul>
    );
}

export default FiltersList;