import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAdmin && 
            <p>This is Private Info, Please don't share!</p>
            }<WrappedComponent {...props}/>
        </div>
    );
};

const requiredAuthentication = (WrappedComponent) => {
    return (props) =>(
        <div>
        {props.isAuthenticated ? ( <WrappedComponent{...props} />) : (<h1>Please Login to view Info</h1>)}
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info ="There are some details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info ="There are some details" />,document.getElementById('app'));