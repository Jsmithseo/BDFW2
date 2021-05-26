import {useState} from 'react'



const SearchParams = () => {
const [Name, setName] = useState("smitty")
    return (
        <>
            <input placeholder="Smitty" value={Name} onChange = {(event) =>setName(event.target.value) }
            >
            </input>
        </>
    )
}

export default SearchParams