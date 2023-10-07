        import React, { useState } from 'react';
        import axios from 'axios';

        const TextTranslation = () => {
        const [inputText, setInputText] = useState('');
        const [translatedText, setTranslatedText] = useState('');

        const handleInputChange = (event) => {
        setInputText(event.target.value);
        };

        const translateText = async () => {
        const encodedParams = new URLSearchParams();
        encodedParams.set('source_language', 'en');
        encodedParams.set('target_language', 'id');
        encodedParams.set('text', inputText);

        const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'ed866feae9msh3d8b64547ec32aep107d87jsn37af4db87ca7',
                'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
        },
        data: encodedParams,
        };

        try {
        const response = await axios.request(options);
        setTranslatedText(response.data.translated_text);
        } catch (error) {
        console.error(error);
        }
        };

        return (
        <div style={{ marginTop: '100px' }}>
        <h1>Text Translation</h1>
        <div>
                <input
                type="text"
                placeholder="Enter text to translate"
                value={inputText}
                onChange={handleInputChange}
                />
                <button onClick={translateText}>Translate</button>
        </div>
        {translatedText && (
                <div>
                <div>Original Text: {inputText}</div>
                <div>Translated Text: {translatedText}</div>
                </div>
        )}
        </div>
        );
        };

        export default TextTranslation;
