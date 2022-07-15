import styled from 'styled-components'

const Elem = styled.div`
${props =>
        props.display === "flex" ?
            "display:flex; flex-direction:row;justify-content:space-between"
            : props.display === "flex_clmn" ?
                "display:flex; flex-direction:column;justify-content:space-between"
                :
                props.display === "flex_center" ?
                    "display:flex; flex-direction:column;justify-content:center"
                    : 'display:block'
    }
`
export { Elem }