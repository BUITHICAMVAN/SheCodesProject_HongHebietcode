import {collection, getDocs} from 'firebase/firestore'
import {db} from './firebase'

const rest = collection(db, 'users');
getDocs(rest)
  .then(response => {
    const users = response.docs.map(doc => ({
      data: doc.data(),
      id: doc.id,        
    }))
    console.log(users)
  })
  .catch(error => console.log(error.message))
