import { Link, useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    // const handleNavigate = () => {
    //     navigate("/about");
    // }

    function handleNavigate() {
        navigate("/about");
    }

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">
                Home Page
            </h1>
            <button onClick={handleNavigate} >
                Go to About
            </button>
            {/* <Link /> เป็น Component ของ react-router-dom */}
            <Link to="/about">
                Go to About
            </Link>
        </div>
    );
}