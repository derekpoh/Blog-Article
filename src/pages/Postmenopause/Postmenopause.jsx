import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";

const Postmenopause = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const smallScreen = useMediaQuery("(max-width:1260px)");

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
            Postmenopause
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Yes, the troubles don’t end right at menopause. It is the stage where most of the severe menopausal symptoms
            decrease but it comes with additional side effects
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
            Increase in Follicle Stimulating Hormones (FSH)
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            This increases dramatically as our ovaries shut down and drastically lower the level of estrogen in our body.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            By this point, we started noticing a lowered energy level - sleeping in by 7/8 P.M. after work is a norm.
            </p>
        <p
        style={{
            fontSize: '30px',
            color: '#F1C9A6'
        }}
        >
            ___
            <br/>
            Higher risk of certain health conditions
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Some of the common health problems that occur during postmenopause are diabetes, joint pains, osteoporosis,
            cholesterol and heart disease.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            This could be an alarming phase, where every visit to the doctor is like drawing a lottery ticket- we need to
            maintain a healthy lifestyle to combat such possibilities.
            </p>
        <p
        style={{
            fontSize: '30px',
            color: '#F1C9A6'
        }}
        >
            ___
            <br/>
            Difficulty concentrating and memory lapses (often temporary)
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Forgetting your car keys, deadlines seem to increase over time. However, these are temporary symptoms of
            postmenopause.
        </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            We face a reduction in brain-derived neurotrophic factors which could also cause depression and anxiety.
            Now we have identified the 3 stages of Menopause.
            </p>
            <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Understanding the 3 most common symptoms amongst women is vital, allowing us to solve or reduce these
            problems.
            </p>
        <ol
        style={{
            fontSize: '18px',
        }} 
        >
        <li>
            Hot Flashes & Night Sweats
            </li>
        <li>
            Bloating & Weight Gain
            </li>
        <li>
            Joint Pains & Anxiety/Depression
            </li>
        </ol>
            <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Going through menopause by yourself is hard! Especially because it affects our daily life! Symptoms like
            reduction in metabolic rates and estrogen levels that cause weight gain and increase the size of our abdomen;
            night sweats and flashes, joint pains that make us feel 30 years older...are just to name a few..
            </p>
            <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Therefore, we have broken down understanding and solving menopause in 3 easy steps; which can make this
            journey a little less frustrating!
            </p>
            <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            We hope you can see that menopause does not have to be difficult and solving it can be as easy as 1, 2, 3!
            </p>
            <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            We at Better Body Co have a mission to help women around the world have an easier menopausal transition...
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
                <Link to={"/what-is-menopause/menopause"}>
                Previous: menopause
                </Link>
                </p>
        </div>
            </div>
            
            <div>
            <img 
            src='https://cdn.shopify.com/s/files/1/2060/5733/files/PPM--dex-final_2e85f294-d427-4524-ab0e-98fcfef514bf.jpg?v=1686204405'
            style={{
                width: isMobile ? '350px' : smallScreen ? "740px" : "1100px",
                height: 'auto',
                paddingTop: '50px',
                paddingBottom: '10px',  
            }} />
            </div>

            </div>


            </>
    )
}

export default Postmenopause