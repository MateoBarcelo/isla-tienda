import Filters from './Filters.jsx'

export function Header({ changeFilters }) {
    return(
        <header>
            <h1>
                ISLA Tienda
            </h1>
            <Filters onChange={changeFilters} />
        </header>
    )
}