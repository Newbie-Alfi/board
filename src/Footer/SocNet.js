import './SocNet.css'
import soc1 from './inst.svg'
import soc2 from './youtube.svg'
import soc4 from './fc.svg'
import soc5 from './twitter.svg'

let SocNet = () => {
    return (
        <div className="footer__soc-net-elemets">
            <a href=""><img className="footer__soc-net" src={soc1} alt='sorry, restart the site'/></a>
            <a href=""><img className="footer__soc-net" src={soc2} alt='sorry, restart the site'/></a>
            <a href=""><img className="footer__soc-net" src={soc1} alt='sorry, restart the site'/></a>
            <a href=""><img className="footer__soc-net" src={soc4} alt='sorry, restart the site'/></a>
            <a href=""><img className="footer__soc-net" src={soc5} alt='sorry, restart the site'/></a>
        </div>
    );
}

export default SocNet;