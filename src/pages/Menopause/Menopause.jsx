import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";

const Menopause = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const smallScreen = useMediaQuery("(max-width:1260px)");

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
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
            Menopause
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            The official menopause stage begins 12 months after the last menstrual period (bleeding).
            <br/>
            <br/>
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
            Ovaries stop releasing eggs
            </p>
            <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            This means there would be minimal production of estrogen
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            At this stage, getting pregnant could be significantly harder. Hence, we notice the use of hormonal therapy or IVF
            for childbirth.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            We start feeling “low”, with the constant need to cuddle in bed and watch Netflix instead of going out and getting
            drinks with our girlfriends.
            </p>
        <p
        style={{
            fontSize: '30px',
            color: '#F1C9A6'
        }}
        >
            ___
            <br/>
            Intensified hot flashes and night sweats
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Waking up in the middle of the night, aggressively throwing our blanket away or turning your fan on max even
            though the aircon is on full blast.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Our body starts to feel warm or hot suddenly, with flushed red skin and increased heart rate; followed by
            suddenly feeling cold
            </p>
        <p
        style={{
            fontSize: '30px',
            color: '#F1C9A6'
        }}
        >
            ___
            <br/>
            Significant physical changes
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            The concept of “a minute on your lip, a lifetime on your hip” comes to reality. Eating one slice of cake for dinner
            could increase weight around our waist and abdominal region, with a reduction in our metabolic rate."
        </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            It is also common to notice our hair and skin becoming drier and thinner; no amount of conditioner and lotion
            seem to absolutely solve this problem
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
                <Link to={"/what-is-menopause/perimenopause"} onClick={scrollToTop}>
                Previous: {isMobile ? <br/> : null} Perimenopause
                </Link>
                </p>
            <p>
                
                <Link to={"/what-is-menopause/postmenopause"} onClick={scrollToTop}>
                Next: {isMobile ? <br/> : null} Postmenopause
                </Link>
                </p>
        </div>

            <div>
            <a href="https://betterbody.co/pages/pp-provitalize-m" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.shopify.com/s/files/1/2060/5733/files/PPM--dex-final_2e85f294-d427-4524-ab0e-98fcfef514bf.jpg?v=1686204405"
                alt="Say goodbye to unwanted weight gain due to menopause"
                style={{
                  width: isMobile ? '350px' : smallScreen ? "740px" : "1100px",
                  height: 'auto',
                  paddingTop: '50px',
                  paddingBottom: '10px',
                }}
              />
            </a>
          </div>

          <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Disclamier
            </p>
          <p
        style={{
            fontSize: isMobile ? '12px' : '15px',
            color: '#525252'
        }}  
        >
        *THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS
        PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.
        USERS' REVIEWS REFLECT THE OPINIONS OF THE INDIVIDUAL USER, NOT THE COMPANY.
        INDIVIDUALS' EXPERIENCES MAY VARY. USERS' COMMENTS ABOUT THE BENEFITS ATTRIBUTE TO
        BETTER BODY CO'S PRODUCTS AND DO NOT NECESSARILY REFLECT THE VIEWS OF THE COMPANY.
        THE RESULTS MAY VARY FROM PERSON TO PERSON.
            </p>

            </div>
            </div>

            </>
    )
}

export default Menopause
