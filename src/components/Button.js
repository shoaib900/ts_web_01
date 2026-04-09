
const Button = ({ children, onClick }) => {
    function handleClick() {
        console.log("button clicked")
    }

    return (
        <button onClick={handleClick} className="btn btn-primary">
            {children}
        </button>
    )
}

export default Button
