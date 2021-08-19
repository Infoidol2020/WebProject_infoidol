import React from 'react';
import axios from 'axios';

export const uploadVideo = (formData,video ) => {
    console.log('formData', formData)
    console.log('apiiiii');
    console.log('vcvcvvc', video);
    try {
        axios.post('https://infoidol.com/admin/WebApi/upload_video', formData).then(res => {
                console.log('response', res.data);
                // res.data.message && setMessage(res.data.message);
            })
    } 
    catch (error) {
        console.log('error', error);
    }
}