import background from "./image/Presentación1.png";

const Home = () => {
    return(
        <>
            <div style={
                { 
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    width:'100%',
                    height:'100%'
                }
            }>dfdsf
            </div>
            
        </>
    )

}

export default Home;