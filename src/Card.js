import './Card.css';
// w-full rounded overflow-hidden shadow-lg m-2
// w-full h-64 object-center
// px-6 py-4
// font-regular text-xl mb-2
export const Card = ({ owner, imageUrl }) => {
    return (
        <div class="Card">
            <div className='upper-container'>
                <div className='image-container'>
                    <img src={imageUrl} alt='' />
                </div>
                <div class="lower-container">
                    <div class="">{owner}</div>
                </div>
            </div>
        </div>
    );
};