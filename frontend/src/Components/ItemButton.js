import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

function ItemButton({ children, variant, type, start = '150px', end = '200px', length = '0.4' }){
    const [hovered, setHovered] = useState(false)

    const style = {
        transition: `${length}s`,
        width: !hovered ? start : end,
        fontSize: '12px'
    }

    return(
        <Button style={style} variant={variant} type={type} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
        {children}
    </Button>
    )
}

export default ItemButton