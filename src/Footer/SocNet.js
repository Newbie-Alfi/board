import './SocNet.css'

import soc1 from './inst.svg'
import soc2 from './youtube.svg'
import soc4 from './fc.svg'
import soc5 from './twitter.svg'

let SocNet = () => {
    return (
        <div className="footer__soc-net-elemets">
            <a href="https://vk.com/vyacheslawoo"><img className="footer__soc-net" src={soc1}></img></a>
            <a href=" "><img className="footer__soc-net" src={soc2}></img></a>
            <a href=" "><img className="footer__soc-net" src={soc1}></img></a>
            <a href=" "><img className="footer__soc-net" src={soc4}></img></a>
            <a href=" "><img className="footer__soc-net" src={soc5}></img></a>
        </div>
    );
}

export default SocNet;