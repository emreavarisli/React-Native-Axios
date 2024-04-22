import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2")
            .then(res => setUserData(res.data.data))
            .catch(console.log("veri cekmede hata yasandi!"));
    }, {});

    console.log("Data useState icerisinde geldi", userData);

    return (
        < View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {userData.map((value, index) => {
                return (<View>
                    <Text key={index}>
                        {value.first_name} {value.first_name}{' '}
                    </Text>
                    <Image style={{
                        width: 150,
                        height: 150,
                    }} source={{ uri: value.avatar }} />
                </View>
                );
            })}
        </View >
    );
};

export default Home;