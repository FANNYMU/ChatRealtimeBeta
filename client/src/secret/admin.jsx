import React from 'react';
import AdminContent from './adminContent';

const Admin = () => {
    if (localStorage.getItem('admwdaw132a', 'adadwafr3rwfsf')) {
        return (
            <div>
                <AdminContent/>
            </div>
        );
    } else if (!localStorage.getItem('admwdaw132a', 'adadwafr3rwfsf')){
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="alert alert-danger" role="alert">
                    YOURNOTADMIN
                </div>
            </div>
        )
    }
    
}

export default Admin;
