export default function Button({ onClick, children, title, type, disabled, name, className }) {

    return (
        <button className={`${disabled ? 'bg-mint-500' : 'bg-mint-900 text-sm md:text-md hover:bg-mint-700 active:transform active:translate-y-1'} w-1/2 md:w-auto py-2 px-4 rounded-md text-mint-50 font-semibold hover:text-white transition-all ${className}`}
        onClick={onClick} name={name} type={type} disabled={disabled}>
            {title || children}
        </button>
    )
}