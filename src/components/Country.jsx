import Button from "./Button";
import { FiArrowDownRight } from "react-icons/fi";
export default function Country({ name }) {
    return (
        <div className="container mx-auto flex justify-between items-center border-b-2 py-5 px-3">
            <h3 className="text-lg font-bold">{name}</h3>
            <Button background={'#ff5a3d'} icon={<FiArrowDownRight />} color={'white'} />
        </div>
    )
}
