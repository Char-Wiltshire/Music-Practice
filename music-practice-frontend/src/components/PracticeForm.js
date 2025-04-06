import React, { useState } from 'react';
import { addPracticeSession } from '../api';

const PracticeForm = ({ onAdd }) => {
    const [instrument, setInstrument] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        const sessionData = {
            instrument,
            duration: parseFloat(duration),
        };

        const newSession = await addPracticeSession(sessionData);
        if(newSession) {
            onAdd(newSession);
        }

        setInstrument('');
        setDuration('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Instrument: </label>
            <select
                value={instrument}
                onChange={(e) => setInstrument(e.target.value)}
                required
            >
                <option value="">Select an instrument</option>
                <option value="guitar">Guitar</option>
                <option value="piano">Piano</option>
                <option value="violin">Violin</option>
                <option value="drums">Drums</option>
                <option value="flute">Flute</option>
                <option value="other">Other</option>
            </select>

            <label>Duration (hours): </label>
            <input
                type = "number"
                value  ={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                min = "0"
            />
            <button type="submit">Add Practice Session</button>
        </form>
    );
};

export default PracticeForm;