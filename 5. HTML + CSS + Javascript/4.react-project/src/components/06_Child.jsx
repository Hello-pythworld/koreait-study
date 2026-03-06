
// size = 100
//  - 값이 들어오지 않으면 100을 넣겠다. (기본값 설정)
export default function Child({img, size=100}) {
    return (
        <>
            <img src={img.src}
                alt={img.alt}
                width={size}
                height={size}/>
        </>
    )
}