export function Toast({children, className}) {
    return (
        <div className={`fixed text-lg md:text-xl right-0 bottom-0
         bg-mint-25 py-4 px-6 m-4 text-mint-900 font-semibold
          rounded-xl shadow-xl transition-all duration-1000 ${className}`}>
          <p>{children}</p>
        </div>
    )
}