import { useEffect } from "react";

const Usetitle = (title) => {
    useEffect(() => {
        document.title = `${title} - codeBook`
    }, [title])



    return null;
}
 
export default Usetitle;