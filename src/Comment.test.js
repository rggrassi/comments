import React from 'react';
import Comment from './Comment';
import { render } from 'enzyme';

it('should render', () => {
    const c = {
        comment: 'teste'
    }
    const wrapper = render(<Comment c={c}/>);
    expect(wrapper.text()).toBe('teste');
})