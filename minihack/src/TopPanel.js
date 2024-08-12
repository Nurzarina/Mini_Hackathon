import React, { useState, useEffect } from 'react';
import './TopPanel.css'
import { Container, Row, Col } from 'react-bootstrap';

const TopPanel = () => {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [temperature, setTemperature] = useState("");
    const [weatherDescription, setWeatherDescription] = useState("");

    useEffect(() => {
        // Define an async function to fetch the weather data
        const fetchWeather = async () => {
            try {
                const apiKey = '3e5375e4e6b0bcf722cee713718c51b9'; // Replace with your actual API key
                const city = 'Kuantan'; // Replace with your location or coordinates
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
                const data = await response.json();

                // Extract temperature and weather description
                setTemperature(data.main.temp);
                setWeatherDescription(data.weather[0].description);

                // Optionally set time and date if needed from the response or use local time/date
                const currentDate = new Date();
                setDate(currentDate.toLocaleDateString());
                setTime(currentDate.toLocaleTimeString());
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        // Call the fetchWeather function
        fetchWeather();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <Container id='topPanel' className='mt-4'>
        <Row>
            <Col className='text-center'>
                <p className='top-panel-item'>Date: {date}</p>
            </Col>
            <Col className='text-center'>
                <p className='top-panel-item'>Time: {time}</p>
            </Col>
            <Col className='text-center'>
                    <p className='top-panel-item'>Temperature: {temperature}°C</p>
                    <p className='top-panel-item'>Weather: {weatherDescription}</p>
                </Col>
        </Row>
    </Container>
    );
}

export default TopPanel;