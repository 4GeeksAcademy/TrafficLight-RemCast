/* eslint-disable react/prop-types */
import Card from "../Card";
import useAppContext from "../../contexts/AppContext";

import classes from "./Section.module.css";


const Section = ({ title, fetchType }) => {
    const { store } = useAppContext();
    const resource = store[fetchType];


    return (
        <section className="my-5">
            <h2 className="mb-4">{title}</h2>
            <div className={classes.carousel}>
                {resource.map((item, index) => (
                    <Card key={index} name={item.name} fetchType={fetchType} speciename={item.name} starshipname={item.name} {...item} />
                ))}
            </div>
        </section>
    );
}
export default Section 