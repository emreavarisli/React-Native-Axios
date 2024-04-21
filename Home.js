import { View, Text } from 'react-native';
import React, { useEffect, userEffect } from 'react';
import axios from 'axios';

const Home = () => {
    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then(data => console.log)
    }, {});

    return (
        < View >
            <Text>Home</Text>
        </View >
    );
};

export default Home;