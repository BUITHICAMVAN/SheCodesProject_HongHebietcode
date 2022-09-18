import React, {useCallback, useEffect} from 'react'
import Booking from "../components/Booking/Booking.js"
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase.js'

const BookingPage = () => {

    const userData = React.useRef([]);

    const [tagData, setTagData] = React.useState([]);
    const [filteredTagData, setFilteredTagData] = React.useState([]);

    const locationData = React.useRef([]);
    const [filteredLocationData, setFilteredLocationData] = React.useState([]);

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
            setTagData(tags);
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
        getTagData();
        setFilteredTagData(tagData);
        getLocationData();
        setFilteredLocationData(locationData);
    },[]);

    const matchDriver = (selectedTag, selectedLocation, userArray) => {
        selectedTag = "#englishtranslation";
        selectedLocation = "District 1";

        userArray = [
            {
                role: 'driver',
                available: true,
                tags: ['#englishtranslation', 'swimming'],
                location: 'District 1'
            },
            {
                role: 'user',
                available: false,
                tags: null,
                location: 'District 2'
            }
        ]
        console.log(userArray)
        let filteredUserArray = [];
        filteredUserArray = userArray.filter(x => (x.role === 'driver' && x.available && x.tags.includes(selectedTag) && x.location === selectedLocation))
        console.log(filteredUserArray)
    }

    return (
        <>
            <Booking title = "Booking Info" tags = {tagData} matching = {matchDriver}/>
        </>
    )
}

export default BookingPage