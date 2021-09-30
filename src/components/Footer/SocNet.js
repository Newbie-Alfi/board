import './SocNet.css'
import soc1 from '../../img/icons/vk.svg'
import soc2 from '../../img/icons/youtube.svg'
import soc4 from '../../img/icons/fc.svg'
import soc5 from '../../img/icons/twitter.svg'

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