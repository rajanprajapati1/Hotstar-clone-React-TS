import Cards from './Cards'
import { Movie } from '../Apis/api.config'

interface DefProps {
    title: String,
    value: Movie[],
}


const ListPage = (props: DefProps) => {
    return (
        <div className='list_page'>
            <h1>{props.title}</h1>
            <div className="flex_row">
                {props.value.map((movie) => {
                    return (<div className="card_layer">
                        <Cards value={movie} />
                    </div>)
                })}
            </div>
        </div>
    )
}

export default ListPage
