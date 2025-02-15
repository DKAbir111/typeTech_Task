export default function Button({ text, icon, color, background }) {
    return (
        <button className={`btn flex justify-center items-center gap-1 hover:bg-[#ff7134] border-none text-${color}`}
            style={{ backgroundColor: background }}>
            {text} {icon}
        </button>
    )
}
