import {ReactNode} from 'react'


const Orange = ({fruit}: {fruit: string, children?: ReactNode}) => {
    const myStyle: React.CSSProperties = {
        backgroundColor: fruit.toLowerCase() === 'orange'? 'darkorange' : 'darkred',
        color: 'whitesmoke'
    }

    return (
        <>
        <div style={myStyle}>
            {fruit}
        </div>
        </>
    )
}

export default Orange;
