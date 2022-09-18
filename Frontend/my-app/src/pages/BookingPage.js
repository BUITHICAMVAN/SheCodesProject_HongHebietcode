import React, {useCallback, useEffect} from 'react'
import Booking from "../components/Booking/Booking.js"
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase.js'

const BookingPage = () => {

    const userData = React.useRef([]);
    const [filteredUserData, setFilteredUserData] = React.useState([]);

    const tagData = React.useRef([]);
    const [filteredTagData, setFilteredTagData] = React.useState([]);

    const locationData = React.useRef([]);
    const [filteredLocationData, setFilteredLocationData] = React.useState([]);

    const [selectedTag, setSelectedTag] = React.useState("#englishtranslation");
    const [selectedLocation, setSelectedLocation] = React.useState("District 1");

    const getUserData = () => {
        const userDataCollection = collection(db, 'users');
        getDocs(userDataCollection)
        .then(response => {
            const users = response.docs.map(doc => ({
            data: doc.data(),
            id: doc.id,        
            }))
            userData.current = users;
        })
        .catch(error => console.log(error.message))
    }

    const getTagData = () => {
        const tagDataCollection = collection(db, 'tags');
        getDocs(tagDataCollection)
        .then (response => {
            const tags = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
            }))
            tagData.current = tags;
        })
        .catch(error => console.log(error.message))
    }

    const getLocationData = () => {
        const locationDataCollection = collection(db, 'locations');
        getDocs(locationDataCollection)
        .then (response => {
            const locations = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id,
            }))
            locationData.current = locations;
        })
        .catch(error => console.log(error.message))
    }

    React.useEffect(() => {
        getUserData();
        setFilteredUserData(userData);
        getTagData();
        setFilteredTagData(tagData);
        getLocationData();
        setFilteredLocationData(locationData);
    },[])

    const matchDriver = () => {
        console.log(selectedTag);
        console.log(selectedLocation);
        console.log(userData);

        setFilteredUserData(() => [
            ...userData.current.filter((x) => x.data.role === 'driver' && x.data.available && x.data.tags === tagData && x.data.location === locationData),
        ]);
        console.log(filteredUserData)
    }

    return (
        <>
            <Booking title = "Booking Info" />
            <button onClick={() => matchDriver()}>ABC</button>
        </>
    )
}

export default BookingPage