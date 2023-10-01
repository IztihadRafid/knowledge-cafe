import profile from "../../assets/images/profile.png"
const Header = () => {
    return (
        <header className="flex justify-between items-center p-4  border-b-4 max-w-6xl mx-auto">
            <h1 className="text-3xl">Knowledge Cafe</h1>  
            <img src={profile} />
        </header>
    );
};

export default Header;