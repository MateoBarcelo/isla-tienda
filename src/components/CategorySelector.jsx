export function CategorySelector({ onChange, value, className }) {
    return (
        <select onChange={onChange} value={value} className={className}>
            <option value='all'>Todos</option>
            <option value='estanterias'>Estanterias</option>
            <option value='decorados'>Decorados</option>
        </select>
    )
}