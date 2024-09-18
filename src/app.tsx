import { useState } from 'preact/hooks';
import "./app.css"
import { JSX } from 'preact/jsx-runtime';
import { Header } from './components/header/Header';
import { Content } from './components/content/Content';

export function App() {

    const [selectedValue, setSelectedValue] = useState('')

    const handlePageSelection = (e: JSX.TargetedEvent<HTMLButtonElement>) =>{
        setSelectedValue(e.currentTarget.value)
    }

    return (
        <>
        <Header selectPageDetails={handlePageSelection}/>
        <Content selectedValue={selectedValue}/>
        </>
    )
}
