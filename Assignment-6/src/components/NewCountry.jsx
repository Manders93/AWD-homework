import { useState } from "react";

function NewCountry({ onAddCountry }) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (name.trim().length === 0) {
            return;
        }
        onAddCountry(name.trim());
        setName("");
        setIsOpen(false);
    }
    return(
        <div>
            <button type="button" onClick={() => setIsOpen(true)}>
                Add Country
                </button> 

                {isOpen && (
                  <dialog open>
                    <form onSubmit={handleSubmit}>
                        <h2> Add New Country</h2>

                        <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Country Name"
                        />

                        <button type="submit"> Add</button>

                        <button
                        type="button"
                        onClick={() => {
                            setName("");
                            setIsOpen(false);
                        }}
                        >
                            Cancel
                        </button>
                    </form>
                  </dialog>  
            )} 
        </div>
    );
}
export default NewCountry;