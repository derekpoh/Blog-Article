import { Link } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";
import 'typeface-roboto';


const WhatIsMenopause = () => {
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
            What is Menopause?
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Women have always been known to have great intuition, especially when it comes to their body reacting to
            certain conditions - emotionally, mentally or physically.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            These “feelings” tend to get “out of control” during specific phases of our life, the kind that we see in movies but
            have not explicitly discussed before it happens.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            We start to sense a shift in the way our body works; drastic mood swings with frequent tears or outbursts.
            The worst part?
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            The way people start reacting to this outburst, responding like they think we are going crazy.
            Honestly, we are not going crazy… It's just menopause!
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Menopause is a transitional period when our bodies start to wind down on our reproductive abilities.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            And it is no fun ride. All the mood swings, hot flashes, night sweats, insomnia, joint pains, and the never-ending
            list of problems. Feels like we have a lot to deal with, by ourselves.
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            But...
        </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Understanding and accepting these symptoms can help us simplify the process of solving them (as promised,
            as easy as 1, 2, 3)!
            </p>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            Let us start with understanding the 3 stages of Menopause:
            </p>
        <ol
        style={{
            fontSize: '18px',
        }} 
        >
        <li>
            <Link to={"/what-is-menopause/perimenopause"} onClick={scrollToTop}>
            Perimenopause or Premenopause
            </Link>
            </li>
        <li>
            <Link to={"/what-is-menopause/menopause"} onClick={scrollToTop}>
            Menopause
            </Link>
            </li>
        <li>
            <Link to={"/what-is-menopause/postmenopause"} onClick={scrollToTop}>
            Postmenopause
            </Link>
            </li>
        </ol>
        <br/>
        <br/>
        <br/>
        <div
        style={{
            display: 'flex',
            justifyContent: 'flex-end',
        }}>
            <p>
                <Link to={"/what-is-menopause/perimenopause"} onClick={scrollToTop}>
                Next: {isMobile ? <br/> : null} Perimenopause
                </Link>
                </p>
        </div>
        <br/>
        <br/>
        <br/>
        <p
        style={{
            fontSize: '17px',
            color: '#525252'
        }}  
        >
            References
            </p>
        <ol
        style={{
            fontSize: '16px',
            color: '#525252'
        }} 
        >
        <li>
            Caffeine and menopausal symptoms: what is the association? <br/>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/25051286" target="_blank" rel="noopener noreferrer">
            (https://www.ncbi.nlm.nih.gov/pubmed/25051286)
            </a>
            </li>
        <li>
            Cigarette Smoking, Androgen Levels, and Hot Flushes in Midlife Women <br/>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2673540/" target="_blank" rel="noopener noreferrer">
            (https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2673540/)
            </a>
            </li>
        <li>
            Risk factors for menopausal hot flashes. <br/>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/8008318" target="_blank" rel="noopener noreferrer">
            (https://www.ncbi.nlm.nih.gov/pubmed/8008318)
            </a>
            </li>
        </ol>
        
            </div>
            </div>

    )
}

export default WhatIsMenopause

