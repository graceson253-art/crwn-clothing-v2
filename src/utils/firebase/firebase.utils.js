import {initializeApp} from 'firebase/app';
import {getAuth,signInWithPopup,signInWithRedirect,GoogleAuthProvider}  from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyAS3st-nfghlSRM5yi9yJdVlrXXLUmp-cM",
    authDomain: "crw-project-8aa23.firebaseapp.com",
    projectId: "crw-project-8aa23",
    storageBucket: "crw-project-8aa23.appspot.com",
    messagingSenderId: "967335621931",
    appId: "1:967335621931:web:08b6f34c87891ed512016e"
  };
  

  const FirebaseApp = initializeApp(firebaseConfig);

  const Provider = new GoogleAuthProvider();

  Provider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth();

  export const SignInGooglePopup = () => signInWithPopup(auth,Provider);


  export const db = getFirestore();


  export const CreateUserDocumentFromAuth = async (UserAuth) => {

    const Document  = doc(db ,'users' , UserAuth.uid);

    const UserSnapshot = await getDoc(Document);

    console.log(UserSnapshot.exists());


    if(!UserSnapshot.exists()){

      const {displayName,email} = UserAuth;
      const Time = new Date();

      try {
        await setDoc(Document,{
          displayName,email,Time
        })
        
      } catch (error) {
        console.log(`there was an error ${error.message}`)
        
      }
    }

    return UserSnapshot;
    






  }