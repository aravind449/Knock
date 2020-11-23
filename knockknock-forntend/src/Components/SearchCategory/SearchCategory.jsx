import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import { getTechnicianCategories , getTechnicianCategoriesRegex } from "../../Utils/Api";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
    },
    technicianCategoriesContainer: {
        width: "75%",
        height: "25%",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
    },
    technicianCategoriesText: {
        paddingTop: "0.8em",
        width: "33%"
    },
}));

const SearchCategory = (props) => {

    const classes = useStyles();
    const [technicianCategories, setTechnicianCategories] = useState();
    const [searchCategory, setSearchCategory] = useState("");

    useEffect( () => {

        getCategoriesTechnician();
    },[]);

    const getCategoriesTechnician = async () => {
        const technicianCategories = await getTechnicianCategories();
        setTechnicianCategories(technicianCategories);
    };

    const onChange = async (e) => {
        e.preventDefault();
        await setSearchCategory(e.target.value);
        await searchCategoryApi(e.target.value);
    };

    const searchCategoryApi = async (search) => {
        const searchValue = {searchValue: search};
        const searchedCategories = await getTechnicianCategoriesRegex(searchValue);
        setTechnicianCategories(searchedCategories);
    };

    return (
        <>
            <div className={classes.container}>
                <form>
                    <TextField
                        id="standard-basic"
                        label="Search here for services"
                        onChange={onChange}
                    />
                </form>
                <div className={classes.technicianCategoriesContainer}>
                    {technicianCategories && technicianCategories.map((category, index) => (
                        <Typography variant={"inherit"} className={classes.technicianCategoriesText} key={index}>
                            {category.CategoryName}
                        </Typography>
                    ))}
                </div>
            </div>

        </>
    );
};

export default SearchCategory;