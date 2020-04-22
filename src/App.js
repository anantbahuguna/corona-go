import React, { Component, Fragment } from "react";

import { Cards, Chart, CountryPicker, GithubCard } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

import coronaImg from './images/image4.jpg'

class App extends Component {
    state = {
        data: {},
        country: ''
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        this.setState({ data: fetchedData, country: country })
    }

    render() {
        const { data, country } = this.state;
        return (
            <Fragment>
            <div className={styles.container}>
                <img className = {styles.image} 
                    src={coronaImg}
                    alt='COVID-19' />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
            <br/>
            <br/>
            <br/>
            <GithubCard />
            <br/>
            </Fragment>
        );
    }
}

export default App;
