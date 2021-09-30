import {useEffect, useRef, useContext} from 'react'
import { MyContext } from '../App';
export function useAnchorCreator(anchor){
    const value = useContext(MyContext);
    useEffect(() => {
        value.updateAnchors(anchor);
    },[])
}