import {useEffect, useRef} from 'react'

export function useAnchorCreator(){
    const value = useContext(MyContext);
    const anchor = useRef();

    useEffect(() => {
        value.updateAnchors(anchor);
    },[])
}