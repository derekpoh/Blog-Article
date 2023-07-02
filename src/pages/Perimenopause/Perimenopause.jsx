import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";

const Perimenopause = () => {
    const isMobile = useMediaQuery("(max-width:600px)");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Roboto, sans-serif',
        }}>
        <div
        style={{
            textAlign: 'left',
            maxWidth: '1100px'
        }}     
        >
        <p
        style={{
            fontSize: '40px',
            color: '#7DC4BD'
        }}
        >
            ___
            <br/>
            Perimenopause
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Perimenopause or Premenopause can begin several years before menopause. This could last between a few
            months to about 10 years. However, on average it lasts about 4 years.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            What happens?
            </p>
        <p
        style={{
            fontSize: '30px',
            color: '#F1C9A6'
        }}
        >
            ___
            <br/>
            Ovaries start to gradually lower estrogen production
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            This is a natural process of growing older and usually starts around the age of 40. In some cases, it could start as
            early as when women are in their 30s.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            This could mean a reduction in our fertility rate, therefore, women looking to start a family should try and utilize
            every open opportunity with their partner!
            </p>
        <p
        style={{
            fontSize: '30px',
            color: '#F1C9A6'
        }}
        >
            ___
            <br/>
            Changes in the menstrual/period cycle
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            The horror stories begin with the change in duration of our menstrual cycle- there could be longer gaps between
            periods or spotting between 2 cycles.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Like, the frustration of not knowing when you will get your period next is not enough; the flow would differ too,
            making it heavier or lighter over time.
            </p>
        <p
        style={{
            fontSize: '30px',
            color: '#F1C9A6'
        }}
        >
            ___
            <br/>
            Intensified PMS (premenstrual syndrome)
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Drastic and frequent mood swings are the most common signals, along with increased insomnia or hot flashes.
        </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            This could increase our irritability level, losing our energy levels; getting tired even after sitting at work the entire
            day or taking longer weekend naps to recover from our workweek would be common.
            </p>
        <br/>
        <br/>
        <br/>
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <p>
                <Link to={"/what-is-menopause"} onClick={scrollToTop}>
                Previous: {isMobile ? <br/> : null} What is Menopause?
                </Link>
                </p>
            <p>
                <Link to={"/what-is-menopause/menopause"} onClick={scrollToTop}>
                Next: {isMobile ? <br/> : null} Menopause
                </Link>
                </p>
        </div>
            </div>
            </div>
    )
}

export default Perimenopause