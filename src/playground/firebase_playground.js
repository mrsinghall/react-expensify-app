/*import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAXVrOGxZ_v93R6BfFf8yqOPz2Wwi1GcO8",
    authDomain: "expensify-app-c9021.firebaseapp.com",
    databaseURL: "https://expensify-app-c9021.firebaseio.com",
    projectId: "expensify-app-c9021",
    storageBucket: "expensify-app-c9021.appspot.com",
    messagingSenderId: "242726872405",
    appId: "1:242726872405:web:c73726aeeaa6b3128fbbdc",
    measurementId: "G-TM1BG954QB"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

    //child_removed

    database.ref('expenses').on('child_removed', (snapshot) => {
            console.log(snapshot.key, snapshot.val());
    });

    //child_changed

    database.ref('expenses').on('child_changed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

    // child_added
    
   database.ref('expenses').on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
   });


  /*database.ref('expenses').once('value').then( (snapshot) => {
    const expenses = [];

    snapshot.forEach( (childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
  }).catch( (e) => {
    console.log('something went wrong', e);
  });*/

 /*database.ref('expenses').push({
      description: 'Rent Bill',
      note: 'Paid',
      amount: 2500,
      createdAt: '24/09/2020'
  });

 /* database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach( (childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
  }); */
 



  //database.ref('notes/-MHzynp0S4tCW6V9tuzx').remove();

  /*database.ref('notes').push({
      title: 'course topic',
      body: 'react-course-project'
  });*/

        // FETCHING THE DATA        

       /* database.ref().on('value', (snapshot) => {
            const val =snapshot.val();
            console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
        });*/


  /* const onValueChange =  database.ref().on('value', (snapshot) => {
        console.log(snapshot.val());
    }, (e) => {
        console.log('Error with data fetching', e);
    });

    setTimeout(() => {
        database.ref('age').set(23);
    }, 3500);

    setTimeout(() => {
        database.ref().off(onValueChange);
    }, 7000);

    setTimeout(() => {
        database.ref('age').set(24);
    }, 10500);*/

   /* database.ref('location/country').once('value').then( (snapshot) => {
        const val = snapshot.val();
        console.log(val);
    }).catch( (e) => {
        console.log('Error', e);
    });*/


            //SET DATA
 /* database.ref().set({
      name: 'Pranjal Singhal',
      age: 23,
      stressLevel: 6,
      job: {
          title: 'Junior Developer',
          company: 'Birlasoft'
      },
      location : {
          country : 'India',
          city: 'Delhi'
      }
  }).then( () => {
      console.log('data is saved!');
  }).catch( (e) => {
      console.log('Acess Denied', e);
  });

 // database.ref('age').set(23+'+');
 // database.ref('location/city').set('Chandigarh');
  
  /*database.ref('attributes').set({
      height:69,
      weight:65
  }).then( () => {
      console.log('Attribute is saved');
  }).catch( (e) => {
      console.log('OOps something went wrong', e)
  });*/


                // Remove
 /* 
  database.ref('isSingle').remove().then( () => {
    console.log('isSingle is removed');
}).catch( (e) => {
    console.log('something went wrong, isSingle is not remove', e);
});*/

            //update

/*database.ref().update({
    stressLevel: 9,
    'job/company': 'Mphasis',
    'location/city': 'Banglore'
}).then( () => {
    console.log('update is saved!');
}).catch( (e) => {
    console.log('Acess Denied', e);
});*/