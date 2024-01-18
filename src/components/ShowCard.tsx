import { FaPlay } from 'react-icons/fa';

interface Props {
    trailerdata: Array<any>
}
const ShowCard = (props: Props) => {
    const { trailerdata } = props;
    // @ts-ignore
    const publishedAtDate = new Date(trailerdata?.published_at);
    const formattedDate = publishedAtDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
// @ts-ignore
    const adjustedSize = trailerdata?.size / 1024;
    return (
        <div className='Showcard'>
            <div className="show_image">
            <div className="playbtn">
                  <FaPlay />
                  </div>
      {/* @ts-ignore  */}
                <iframe src={`https://www.youtube.com/embed/${trailerdata?.key}`} />
            </div>
            <div className="show_details">
{/*  @ts-ignore */}
                <h3>{trailerdata?.name?.split("|")[0]} </h3>
                <strong>{formattedDate} ~ {adjustedSize.toFixed(2)}-Min</strong>
                
{/*  @ts-ignore */}
                <p>{trailerdata?.name}</p>
            </div>
        </div>
    )
}

export default ShowCard
