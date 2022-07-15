import styled from 'styled-components'
import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Elem } from './style'



function MenuItem(props) {

    const ref = useRef(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const [hover, setHover] = useState(false)



    //set container width and height to its child width and height
    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
    }, [props.children]);


    //hover action
    useEffect(() => {
        if (hover)
            console.log('hovered')
        console.log(`width:${width}/height:${height}`)


    })




    //handle hover event
    const MouseEnter = () => {
        setHover(true)
    }
    const MouseLeave = () => {
        setHover(false)
    }







    return (
        <Container
            data-testid='menuitem'
            onMouseEnter={() => MouseEnter()}
            onMouseLeave={() => MouseLeave()}
            //margin is bugy use padding instead
            style={{
                width: (width > 70) ? width : '70px',
                height: (height > 45) ? height : '45px',
                padding: (props.p > 0 && props.pu) ? (props.p + props.pu) : '0.1px',
                margin: '0'




            }}
        >

            <Elem display={props.display} ref={ref}> {props.children}</Elem>



        </Container>
    )
}
MenuItem.propTypes = {
    p: PropTypes.number,
    pu: PropTypes.string,
    br_w: PropTypes.string,
    br_c: PropTypes.string,
    link: PropTypes.string
};
export default MenuItem
const Container = styled.div`
align-items:center;
text-align:center;
display: flex;
flex-direction: column;
justify-content: center;



&:hover{
    cursor:pointer;
     border:${props => (props.br_w ? props.br_w : '1px ') + 'solid ' + (props.br_c ? props.br_c : ' white')};
     transition-duration: 0.5s;

}
`


