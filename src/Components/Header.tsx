import { nLogo } from "../Utils/Const";
const Header = () => {
    return (
        <div className="absolute px-8 py-2 bg-linear-to-b from-black w-full">
            <img src= {nLogo} alt="logo"
            className="w-48 " />
        </div>
    )
}
export default Header;