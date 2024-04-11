import React, { useState } from "react";
import Story from "./story";
import Form from "./form";

const Madlibs = () => {
    const [showStory, setShowStory] = useState(false);
    const [formData, setFormData] = useState({
        noun: "",
        noun2: "",
        adjective: "",
        color: "",
    });

    const handleSubmit = (evt, fields) => {
        evt.preventDefault();
        setFormData(fields);
        setShowStory(true);
    };

    return (
        <div>
            {showStory ? (
                <div>
                    <Story {...formData}/>
                    <button onClick={() => setShowStory(false)}>Restart</button>
                </div>
            ) : (
                <Form handleSubmit={handleSubmit} />
            )}
        </div>
    );
};

export default Madlibs;