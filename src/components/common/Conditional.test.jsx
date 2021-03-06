import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../helpers/test.utils";
import Conditional from "./Conditional.jsx";

const defaultProps = () => ({
	meta: {
		touched: false,
		error: false,
	},
	radios: [
		{ label: "Apples" }, 
		{ label: "Bananas" },
		{ label: "Pears" }
	]
});

const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<Conditional {...props} />);
	return { wrapper, props };
};

describe("<Conditional />", () => {
	it("snapshot", () => {	
		const { wrapper } = setup();
		expect(wrapper).toMatchSnapshot();
	});

	it("renders", () => {
		const { wrapper } = setup();
		const component = findByTestAttr(wrapper, "conditional");
		expect(component.length).toBe(1);
	});

});
