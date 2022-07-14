import { padding } from "@mui/system";
import { render } from "@testing-library/react"
import MenuItem from "./MenuItem"

describe('MenuItem Component ', () => {
    //empty menu item behavior
    it('rendered empty menuitem', () => {
        const { getByTestId } = render(<MenuItem />);
        const menuitem = getByTestId('menuitem');
        expect(menuitem).toBeTruthy();
    })
    it('empty menuitem width and hight', () => {
        const { getByTestId } = render(<MenuItem />);
        const menuitem = getByTestId('menuitem');
        if (menuitem.style.width != '70px')
            throw new Error(`Expected width to be 70px instead got ${menuitem.style.width}`)
        if (menuitem.style.height != '45px')
            throw new Error(`Expected width to be 45px instead got ${menuitem.style.height}`)
    })
    //props behavior
    it('menuitem invalid props', () => {

        const pad = ["1", 0, 7, true, false, [], {}, '20px']
        const br_width = ["1", 0, 7, true, false, [], {}, '20px']
        const br_color = ["1", 0, 7, true, 'red', [], {}, '20px']

        const padding_unit = ['px', 'cm', 'mm', 'in', 'pt', 'pc', true, false, 45, 7, [], {}]

        //differnet inputs for props
        for (let i = 0; i > pad.length; i++) {
            for (let j = 0; j < padding_unit.length; j++) {
                const { getByTestId } = render(<MenuItem p={pad[i]} pu={padding_unit[j]} br_w={br_width0[i]} br_c={br_color[i]} />);
                const menuitem = getByTestId('menuitem');

                expect(menuitem).toBeTruthy();
            }
        }
        //unknown props behavior
        for (let i = 0; i > pad.length; i++) {

            const { getByTestId } = render(<MenuItem x={br_color[i]} />);
            const menuitem = getByTestId('menuitem');

            expect(menuitem).toBeTruthy();

        }

    })



});