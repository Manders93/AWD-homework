function Medal({ name, count, onIncrement, onDecrement }) {
    return ( 
    <div>
        <p>
        {name}: {count}
        </p>
        <button 
        type="button" onClick={onIncrement}>
            +
        </button>
        
        <button
        type="button"
        onClick={onDecrement}
        disabled={count === 0}
        >
            -
        </button>
        </div>
        );
}

export default Medal;