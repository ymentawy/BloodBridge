import React, { useEffect } from 'react'
function Logout(props) {
    useEffect(() => {
        (async () => {
            await fetch("http://localhost:8000/api/logout",
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
        })();
        props.setName('');
    })
    return (

        <div> Successfully Logged Out</div>
    );
}
export default Logout