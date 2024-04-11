import React, { useState } from 'react';

export default function useFields( initialState) {
    const [fields, setFields] = useState(initialState);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFields(fields => ({ ...fields, [name]: value }));
    };

    const resetForm = () => setFields(initialState);

    return [fields, handleChange, resetForm];

}